const wSvg = 800;
const hSvg = 800;
const hViz = .8 * hSvg;
const wViz = .8 * wSvg;
const wPadding = (wSvg - wViz) / 2;
const hPadding = (hSvg - hViz) / 2;

let maxLabourForce = 0;
let maxGDP = 0;

for (let year of dataset) {
  for (let country of year.countries) {
    for (let city of country.cities) {
      maxLabourForce = Math.max(maxLabourForce, city.labourForce);
      maxGDP = Math.max(maxGDP, city.gdp);
    }
  }
}

let xScale = d3.scaleLinear([0, maxLabourForce * 1.1], [0, wViz]);
let yScale = d3.scaleLinear([0, maxGDP * 1.1], [hViz, 0]);

let svg = d3.select("body")
            .append("svg")
            .attr("width", wSvg)
            .attr("height", hSvg);

let xAxis = svg.append("g")
  .attr("transform", `translate(${wPadding}, ${hViz + hPadding})`)
  .call(d3.axisBottom(xScale));

let yAxis = svg.append("g")
  .attr("transform", `translate(${wPadding}, ${hPadding})`)
  .call(d3.axisLeft(yScale));

let currentYear = "2004";
let yearData = dataset.find(d => d.year === currentYear);

const colorScale = d3.scaleOrdinal(d3.schemeCategory10)
  .domain(yearData.countries.map(country => country.name));

function renderGraph() {
  let circles = svg.append("g").attr("class","viz");

  for (let country of yearData.countries) {
    circles
    .selectAll(`.circle-${country.name}`)
    .data(country.cities)
    .enter()
    .append("circle")
    .attr("class", d => `circle circle-${country.name}`)
    .attr("cx", d => xScale(d.labourForce))
    .attr("cy", d => yScale(d.gdp))
    .attr("r", d => Math.sqrt(d.population) * 0.01)
    // .attr("transform", `translate(${wPadding}, ${hViz + hPadding})`)
    .attr("transform", `translate(${wPadding}, ${hPadding})`)
    .attr("fill", colorScale(country.name))
    .append("title")
    .text(d => d.name);
  }

  svg.selectAll("circle").sort((a, b) => {
    return d3.descending(a.population, b.population);
  });

  function updateDataset() {
    let currentYearInt = parseInt(currentYear);
    if (currentYearInt < 2018) {
      currentYearInt++;
      currentYear = String(currentYearInt);
      yearData = dataset.find(d => d.year === currentYear);

      for (let country of yearData.countries) {
        circles.selectAll(`.circle-${country.name}`)
          .data(country.cities)
          .transition()
          .duration(2000)
          .attr("cx", d => xScale(d.labourForce))
          .attr("cy", d => yScale(d.gdp))
          .attr("r", d => Math.sqrt(d.population) * 0.01)
      }
    }
  }

  setInterval(updateDataset, 2000);
  return svg.node();
}

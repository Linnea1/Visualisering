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

let yearText = svg.append("text")
  .attr("x", 550) 
  .attr("y", 80)        
  .attr("text-anchor", "end")
  .attr("font-size", "26px")
  .attr("fill", "white");

let xAxis = svg.append("g")
  .attr("transform", `translate(${wPadding}, ${hViz + hPadding})`)
  .call(d3.axisBottom(xScale))
  .append("text")
  .attr("x", 700) 
  .attr("y", 10) 
  .attr("text-anchor", "middle")
  .attr("font-size", "18px")
  .text("Labour force")
  .attr("fill", "white");


let yAxis = svg.append("g")
  .attr("transform", `translate(${wPadding}, ${hPadding})`)
  .call(d3.axisLeft(yScale))
  .append("text")
  .attr("transform", "rotate(-90)")
  .attr("x", 30) 
  .attr("y", 0)       
  .attr("text-anchor", "middle")
  .attr("font-size", "18px")
  .text("GDP")
  .attr("fill", "white");

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
/*
  function updateDataset() {
    let currentYearInt = parseInt(currentYear);
    if (currentYearInt < 2018) {
      currentYearInt++;
      currentYear = String(currentYearInt);
      yearData = dataset.find(d => d.year === currentYear);

      yearText.text("Year: " + currentYear);

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
*/

let legendGroup = svg.append("g")
  .attr("class", "legend-group");

let legend = legendGroup.selectAll(".legend")
  .data(colorScale.domain())
  .enter()
  .append("g")
  .attr("class", "legend")
  .attr("transform", (d, i) => `translate(0, ${i * 30 + 20})`);

legend.append("rect")
  .attr("x", wSvg - 18)
  .attr("width", 18)
  .attr("height", 18)
  .style("fill", colorScale);

legend.append("text")
  .attr("x", wSvg - 24)
  .attr("y", 9)
  .attr("dy", ".35em")
  .style("text-anchor", "end")
  .style("fill", "white")
  .text(function(d) { return d; });
//För att få automatisk replay
function updateDataset() {
  let currentYearInt = parseInt(currentYear);
  if (currentYearInt < 2018) {
    currentYearInt++;
    currentYear = String(currentYearInt);
    yearData = dataset.find(d => d.year === currentYear);

    yearText.text("Year: " + currentYear);

    for (let country of yearData.countries) {
      circles.selectAll(`.circle-${country.name}`)
        .data(country.cities)
        .transition()
        .duration(2000)
        .attr("cx", d => xScale(d.labourForce))
        .attr("cy", d => yScale(d.gdp))
        .attr("r", d => Math.sqrt(d.population) * 0.01)
    }
  } else {
  currentYear = "2004";
  yearData = dataset.find(d => d.year === currentYear);
  yearText.text("Year: " + currentYear);

  for (let country of yearData.countries) {
    circles.selectAll(`.circle-${country.name}`)
      .data(country.cities)
      .transition()
      .duration(2000)
      .attr("cx", d => xScale(d.labourForce))
      .attr("cy", d => yScale(d.gdp))
      .attr("r", d => Math.sqrt(d.population) * 0.01);
  }
}

setTimeout(updateDataset, 2000);
}

updateDataset();
return svg.node();
}

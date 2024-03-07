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
  .attr("x", 0)
  .attr("y", -20)
  .attr("text-anchor", "middle")
  .attr("font-size", "18px")
  .text("GDP")
  .attr("fill", "white");

let yearText = svg.append("text")
.attr("x", 550)
.attr("y", 80)
.attr("text-anchor", "end")
.attr("font-size", "26px")
.attr("fill", "white")
.text("Year: 2004");

let currentYear = "2004";
let yearData = dataset.find(d => d.year === currentYear);
let playSvg=true;
const colorScale = d3.scaleOrdinal(d3.schemeCategory10)
  .domain(yearData.countries.map(country => country.name));

function renderGraph() {
  let circlesGroup = svg.append("g").attr("class","viz");


  for (let country of yearData.countries) {
    circlesGroup
    .selectAll(`.circle-${country.name}`)
    .data(country.cities)
    .enter()
    .append("circle")
    .attr("class", `circle circle-${country.name}`)
    .attr("cx", d => xScale(d.labourForce))
    .attr("cy", d => yScale(d.gdp))
    .attr("r", d => Math.sqrt(d.population) * 0.01)
    .attr("transform", `translate(${wPadding}, ${hPadding})`)
    .attr("fill", colorScale(country.name))
    .append("title")
    .text(d => d.name);
  }

  svg.selectAll("circle").sort((a, b) => {
    return d3.descending(a.population, b.population);
  });

let legendGroup = svg.append("g")
  .attr("class", "legend-group");

let legend = legendGroup.selectAll(".legend")
  .data(colorScale.domain())
  .enter()
  .append("g")
  .attr("class", "legend")
  .attr("transform", (d, i) => `translate(0, ${i * 30 + 50})`);

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

  document.getElementById("playButton").addEventListener("click",()=>{
    playSvg=!playSvg;
    document.getElementById("playButton").classList.toggle("paused")
    updateDataset();
  })
  setTimeout(updateDataset, 2000);
  return svg.node();
}

let sliderYear=document.getElementById("slider").value;
slider.onchange = ()=>{
  playSvg=false;
  document.getElementById("playButton").classList.toggle("paused")
  sliderYear=document.getElementById("slider").value;
  console.log(sliderYear)
  updateDataset();
}

function updateDataset() {
  let currentYearInt = parseInt(currentYear);
  if(playSvg===true){
    if (currentYearInt < 2018) {
      currentYearInt++;
      currentYear = String(currentYearInt);
      document.getElementById("slider").value=currentYearInt
    } else {
      currentYear = "2004";
    }
    setTimeout(updateDataset, 2000);
  }else{
    currentYear = String(document.getElementById("slider").value);
    yearData = dataset.find(d => d.year === currentYear);
    yearText.text("Year: " + currentYear);
  }

  yearData = dataset.find(d => d.year === currentYear);
  yearText.text("Year: " + currentYear);

  let circlesGroup = svg.select(".viz");

  for (let country of yearData.countries) {
    circlesGroup.selectAll(`.circle-${country.name}`)
      .data(country.cities)
      .transition()
      .duration(2000)
      .attr("cx", d => xScale(d.labourForce))
      .attr("cy", d => yScale(d.gdp))
      .attr("r", d => Math.sqrt(d.population) * 0.01);
  }
}

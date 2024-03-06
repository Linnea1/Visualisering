const body = document.querySelector("body");

body.innerHTML = `
  <header class="header">
    <div class="title">
      <h1>Global Urban Dynamics:</h1>
      <h2>Exploring Population, GDP, and Labor Force in Five Countries and Their Cities</h2>
    </div>
  </header>

  <div class="session introduction">
    <p>Welcome to "Global Urban Dynamics," where we delve into the intricate relationship between population dynamics, economic growth, and labor  force participation across five diverse countries and their cities. Through this interactive bubble plot visualization, we invite you to explore how these key indicators intersect and influence each other within urban centers worldwide.</p>
    <img src="money.png" alt="money" class="money">
  </div>

  <div class="session visualisation">
    <div class="visualisation-content">
      <h3>Visualisation</h3>
      <ul>
        <li>We have chosen to visualise our data using a dynamic Bubble Chart, drawing inspiration from Hans Rosling's renowned work.</li>
        <li>On the X-axis, the city's number of workers.</li>
        <li>On the Y-axis, the city's gross domestic product (GDP).</li>
        <li>The bubbles represent cities, with their size determined by the population.</li>
        <li>The colour indicates the country to which the city belongs.</li>
      </ul>
    </div>
  </div>

  <div class="session target">
    <h3>Target group, relevance & expected effect</h3>
    <div>
      <p><span>Target group</span>: policy makers in different countries</p>
      <p><span>Our goal</span> is to understand the relationship between labor force and GDP in different cities and countries, as well as how population size and nationality can affect these variables. By comparing economic performance based on these variables, we can observe their growth  patterns, strengths, and weaknesses along with the dynamics of the labor market and other socio-economic factors.</p>
      <p><span>For example</span>, a strong positive correlation between population growth and GDP may require sustainable strategies to support economic development. Alternatively, a country should consider changing its policies to stimulate the economy if it has a high population but low GDP.</p>
    </div>
  </div>

  <div class="session source">
    <h3>Source & Credibility</h3>
    <div>
      <p>The credibility of our source is <span class="hightlight">high</span>.</p>
      <p>The data comes from the Organisation for Economic Co-operation and Development (OCED). Its is a 75-year-old international organisation that conducts research and provides policy recommendations to different institutions and governments.</p>
    </div>
  </div>

  <div class="session preparation">
    <h3>How did we prepare the data?</h3>
    <div class="preparation-content">
      <div class="preparation-text">
        <h4>Research</h4>
        <p>We were interested in the relationship between a city and its wealth, depending on various factors. We explored several topics such as crime, unemployment rate, roads and traffic, workers' income, and climate. Ultimately, we decided to delve further into the relationships between a city's population, GDP, labor force, and nationality.</p>
        <br>
        <h4>Data Collection</h4>
        <p>We combined three datasets—population, GDP, and labor force—to create a dataset.js for our visualization.</p>
        <p>Among the 100+ countries in these three datasets, we selected five of them and five of their corresponding cities for comparison.</p>
        <p>These five countries were chosen due to their significant differences in population size and economic background.</p>
      </div>
      <img src="draft.png" alt="draft" class="draft">
    </div>
  </div>

  <div class="session learning">
    <h3>Our learning</h3>
    <h4>The most difficult part</h4>
    <p></p>
    <h4>The most important part</h4>
    <p></p>
  </div>
`;

const visualisationDiv = document.querySelector(".visualisation");
const visualisationContentDiv = document.querySelector(".visualisation-content");

visualisationDiv.appendChild(renderGraph());
visualisationDiv.insertBefore(visualisationDiv.lastChild, visualisationContentDiv);
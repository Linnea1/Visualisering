const visualisationDiv = document.querySelector(".visualisation");
const visualisationContentDiv = document.querySelector(".visualisation-content");

visualisationDiv.appendChild(renderGraph());
visualisationDiv.insertBefore(visualisationDiv.lastChild, visualisationContentDiv);

function createCountryTable(dataset) {
  const container = document.getElementById("container");

  const firstYearData = dataset[0];

  firstYearData.countries.forEach((country) => {
    const div = document.createElement("div");
    div.classList.add("square");

    const countryName = document.createElement("p");
    countryName.textContent = country.name;
    div.appendChild(countryName);
 
    const citiesList = document.createElement("ul");
    country.cities.forEach((city) => {
      const cityItem = document.createElement("li");
      cityItem.textContent = `${city.name}`;
      citiesList.appendChild(cityItem);
    });
    div.appendChild(citiesList);

    container.appendChild(div);
  });
}

createCountryTable(dataset);

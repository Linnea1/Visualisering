const visualisationDiv = document.querySelector(".visualisation");
const visualisationContentDiv = document.querySelector(".visualisation-content");

visualisationDiv.appendChild(renderGraph());
visualisationDiv.insertBefore(visualisationDiv.lastChild, visualisationContentDiv);

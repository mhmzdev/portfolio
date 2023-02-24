document.addEventListener("DOMContentLoaded", async function () {

    let data = await fetch("../src/data/tech.json")
        .then((response) => response.json())
        .then((json) => json);

    mapTechData(data);

});

function mapTechData(tech) {
    for (var i = 0; i < tech.length; i++) {
        // div
        var techDiv = document.createElement("div");
        techDiv.className = "tech";

        // icon
        var techIconImg = document.createElement("img");
        techIconImg.className = "tech-icon";
        if (tech[i]["name"] == "Node.js") {
            techIconImg.style.height = "20px";
        }

        // tech name
        var techName = document.createElement("span");
        techName.className = "tech-label";

        techIconImg.src = tech[i]["icon"];
        techIconImg.alt = tech[i]["name"];

        techName.innerHTML = tech[i]["name"];

        var relatedDiv = document.getElementById(tech[i]["type"]);

        techDiv.appendChild(techIconImg);
        techDiv.appendChild(techName);
        relatedDiv.appendChild(techDiv);
    }
}
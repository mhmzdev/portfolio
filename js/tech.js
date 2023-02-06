var data = require('../data/data.json');
const tech = data['tech'];

// div
var techDiv = document.createElement("div");
techDiv.className = "tech";

// icon
var techIconImg = document.createElement("img");
techIconImg.className = "tech-icon";

// tech name
var techName = document.createElement("span");
techName.className = "tech-label";

for (var i = 0; i < tech.length; i++) {
    // put items in the above div
    techIconImg.src = tech[i]["icon"];
    techIconImg.alt = tech[i]["name"];

    console.log(tech[i]["name"]);
}

// render the div's in specific type e.g. web or mobile etc.
// id="web-tech"

// id="mobile-tech"
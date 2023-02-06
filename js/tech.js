$(document).ready(function () {
    const tech = [
        {
            "name": "Flutter",
            "icon": "images/tech/flutter.svg",
            "type": "mobile-tech"
        },
        {
            "name": "Dart",
            "icon": "images/tech/dart.svg",
            "type": "mobile-tech"
        },
        {
            "name": "HTML 5",
            "icon": "images/tech/html.svg",
            "type": "web-tech"
        },
        {
            "name": "CSS 3",
            "icon": "images/tech/css.svg",
            "type": "web-tech"
        },
        {
            "name": "Bootstrap",
            "icon": "images/tech/bootstrap.svg",
            "type": "web-tech"
        },
        {
            "name": "Javascript",
            "icon": "images/tech/js.svg",
            "type": "web-tech"
        },
        {
            "name": "Flask Restful",
            "icon": "images/tech/flask.svg",
            "type": "server-tech"
        },
        {
            "name": "Node.js",
            "icon": "images/tech/node.svg",
            "type": "server-tech"
        },
        {
            "name": "Express.js",
            "icon": "images/tech/express.svg",
            "type": "server-tech"
        },
        {
            "name": "REST Apis",
            "icon": "images/tech/api.svg",
            "type": "server-tech"
        },
        {
            "name": "Firebase",
            "icon": "images/tech/firebase.svg",
            "type": "database-tech"
        },
        {
            "name": "MongoDB",
            "icon": "images/tech/mongo.svg",
            "type": "database-tech"
        },
        {
            "name": "SQL",
            "icon": "images/tech/sql.svg",
            "type": "database-tech"
        },
        {
            "name": "Git & GitHub",
            "icon": "images/tech/github.svg",
            "type": "vc-tech"
        },
        {
            "name": "Jira",
            "icon": "images/tech/jira.svg",
            "type": "vc-tech"
        },
        {
            "name": "Trello",
            "icon": "images/tech/trello.svg",
            "type": "vc-tech"
        },
        {
            "name": "Notion",
            "icon": "images/tech/notion.svg",
            "type": "vc-tech"
        },
        {
            "name": "Figma",
            "icon": "images/tech/figma.svg",
            "type": "design-tech"
        },
        {
            "name": "Adobe XD",
            "icon": "images/tech/adobexd.svg",
            "type": "design-tech"
        }
    ];

    for (var i = 0; i < tech.length; i++) {
        // div
        var techDiv = document.createElement("div");
        techDiv.className = "tech";
        techDiv.style.marginBottom = "15px";
        techDiv.style.maxWidth = "max-content";
        techDiv.style.marginRight = "15px";
        if (tech[i]["name"] == "Node.js") {
            techDiv.style.paddingLeft = "5px";
            techDiv.style.paddingRight = "5px";
        } else {
            techDiv.style.padding = "5px";
        }
        techDiv.style.borderRadius = "6px";
        techDiv.style.backgroundColor = "#6EF3A5";

        // icon
        var techIconImg = document.createElement("img");
        techIconImg.className = "tech-icon";
        techIconImg.style.backgroundColor = "#ffffff00";

        // tech name
        var techName = document.createElement("span");
        techName.className = "tech-label";
        techName.style.color = "black";
        techName.style.backgroundColor = "#ffffff00";
        techName.style.fontSize = "14px";
        techName.style.paddingRight = "5px";

        techIconImg.src = tech[i]["icon"];
        techIconImg.alt = tech[i]["name"];

        techName.innerHTML = tech[i]["name"];

        var relatedDiv = document.getElementById(tech[i]["type"]);
        relatedDiv.style.display = "flex";
        relatedDiv.style.flexWrap = "wrap";

        techDiv.appendChild(techIconImg);
        techDiv.appendChild(techName);
        relatedDiv.appendChild(techDiv);
    }
});
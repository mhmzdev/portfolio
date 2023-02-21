$(document).ready(function () {
    const tech = [
        {
            "name": "Flutter",
            "icon": "src/images/tech/flutter.svg",
            "type": "mobile-tech"
        },
        {
            "name": "Dart",
            "icon": "src/images/tech/dart.svg",
            "type": "mobile-tech"
        },
        {
            "name": "HTML 5",
            "icon": "src/images/tech/html.svg",
            "type": "web-tech"
        },
        {
            "name": "CSS 3",
            "icon": "src/images/tech/css.svg",
            "type": "web-tech"
        },
        {
            "name": "Bootstrap",
            "icon": "src/images/tech/bootstrap.svg",
            "type": "web-tech"
        },
        {
            "name": "Javascript",
            "icon": "src/images/tech/js.svg",
            "type": "web-tech"
        },
        {
            "name": "Flask Restful",
            "icon": "src/images/tech/flask.svg",
            "type": "server-tech"
        },
        {
            "name": "Node.js",
            "icon": "src/images/tech/node.svg",
            "type": "server-tech"
        },
        {
            "name": "Express.js",
            "icon": "src/images/tech/express.svg",
            "type": "server-tech"
        },
        {
            "name": "REST Apis",
            "icon": "src/images/tech/api.svg",
            "type": "server-tech"
        },
        {
            "name": "Firebase",
            "icon": "src/images/tech/firebase.svg",
            "type": "database-tech"
        },
        {
            "name": "MongoDB",
            "icon": "src/images/tech/mongo.svg",
            "type": "database-tech"
        },
        {
            "name": "SQL",
            "icon": "src/images/tech/sql.svg",
            "type": "database-tech"
        },
        {
            "name": "Git & GitHub",
            "icon": "src/images/tech/github.svg",
            "type": "vc-tech"
        },
        {
            "name": "Jira",
            "icon": "src/images/tech/jira.svg",
            "type": "vc-tech"
        },
        {
            "name": "Trello",
            "icon": "src/images/tech/trello.svg",
            "type": "vc-tech"
        },
        {
            "name": "Notion",
            "icon": "src/images/tech/notion.svg",
            "type": "vc-tech"
        },
        {
            "name": "Figma",
            "icon": "src/images/tech/figma.svg",
            "type": "design-tech"
        },
        {
            "name": "Adobe XD",
            "icon": "src/images/tech/adobexd.svg",
            "type": "design-tech"
        }
    ];

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
});
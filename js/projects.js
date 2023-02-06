$(document).ready(function () {
    var projects = [
        {
            "title": "The Holy Qur'an",
            "image": "images/projects/quran.png",
            "type": "Open Source",
            "labels": [
                {
                    "title": "Play",
                    "link": "https://link.com/"
                },
                {
                    "title": "Web",
                    "link": "https://link.com/"
                },
                {
                    "title": "GitHub",
                    "link": "https://link.com/"
                }
            ]
        },
        {
            "title": "Devfolio",
            "image": "images/projects/devfolio.png",
            "type": "Open Source",
            "labels": [
                {
                    "title": "Play",
                    "link": "https://link.com/"
                },
                {
                    "title": "Web",
                    "link": "https://link.com/"
                },
                {
                    "title": "GitHub",
                    "link": "https://link.com/"
                }
            ]
        },
        {
            "title": "Awesome Snackbar Content",
            "image": "images/projects/snackbar.png",
            "type": "Open Source",
            "labels": [
                {
                    "title": "GitHub",
                    "link": "https://link.com/"
                },
                {
                    "title": "Package",
                    "link": "https://link.com/"
                }
            ]
        },
        {
            "title": "COVID-19 Tracker",
            "image": "images/projects/covid.png",
            "type": "Open Source",
            "labels": [
                {
                    "title": "GitHub",
                    "link": "https://link.com/"
                }
            ]
        },
        {
            "title": "Storius",
            "image": "images/projects/storius.png",
            "type": "Product",
            "labels": [
                {
                    "title": "App",
                    "link": "https://link.com/"
                },
                {
                    "title": "Play",
                    "link": "https://link.com/"
                },
                {
                    "title": "Web",
                    "link": "https://link.com/"
                }
            ]
        },
        {
            "title": "Sastaticket.pk",
            "image": "images/projects/sastaticket.png",
            "type": "Product",
            "labels": [
                {
                    "title": "App",
                    "link": "https://link.com/"
                },
                {
                    "title": "Play",
                    "link": "https://link.com/"
                },
                {
                    "title": "Web",
                    "link": "https://link.com/"
                }
            ]
        }
    ];


    for (var i = 0; i < projects.length; i++) {
        var project = projects[i];
        var title = project.title;
        var type = project.type;
        var image = project.image;

        var card = document.createElement('div');
        card.className = "project-card";

        var imageDiv = document.createElement('div');
        imageDiv.className = "p-image";
        var projectLabel = document.createElement("div");
        projectLabel.className = "label p-type";
        projectLabel.innerHTML = type;

        var projectImg = document.createElement("img");
        projectImg.className = "p-image-bg";
        projectImg.src = image;
        projectImg.alt = title;

        imageDiv.appendChild(projectLabel);
        imageDiv.appendChild(projectImg);

        var projectName = document.createElement("p");
        projectName.className = "body1 p-title";
        projectName.innerHTML = title;

        var labels = document.createElement("div");
        labels.className = "p-labels";

        for (var j = 0; j < project.labels.length; j++) {
            var title = project.labels[j]["title"];
            var link = project.labels[j]["link"];

            var label = document.createElement('div');
            label.className = "p-label";
            var lableIcon = document.createElement("i");

            if (title == "App") {
                lableIcon.className = "p-label-icon fa fa-apple";
            } else if (title == "Play") {
                lableIcon.className = "p-label-icon fa fa-google";
            } else if (title == "Web") {
                lableIcon.className = "p-label-icon fa fa-globe";
            } else if (title == "GitHub") {
                lableIcon.className = "p-label-icon fa fa-github";
            }

            var labelText = document.createElement("span");
            labelText.className = "label p-label-text";
            labelText.innerHTML = title;

            label.appendChild(lableIcon);
            label.appendChild(labelText);

            labels.appendChild(label);
        }


        card.appendChild(projectLabel);
        card.appendChild(projectImg);
        card.appendChild(projectName);
        card.appendChild(labels);

        var projectsDiv = document.getElementById("projects");
        projectsDiv.appendChild(card);
    }

});
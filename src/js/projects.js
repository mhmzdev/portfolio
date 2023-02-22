$(document).ready(function () {
    var projects = [
        {
            "title": "The Holy Qur'an",
            "image": "images//projects/quran.png",
            "type": "Open Source",
            "labels": [
                {
                    "title": "Play",
                    "link": () => {
                        window.open("https://play.google.com/store/apps/details?id=com.hmz.al_quran", "_blank");
                    },
                },
                {
                    "title": "Web",
                    "link": () => {
                        window.open("https://mhmzdev.github.io/quran/", "_blank");
                    },
                },
                {
                    "title": "GitHub",
                    "link": () => {
                        window.open("https://github.com/mhmzdev/the-holy-quran-app", "_blank");
                    },
                }
            ]
        },
        {
            "title": "Devfolio",
            "image": "images//projects/devfolio.png",
            "type": "Open Source",
            "labels": [
                {
                    "title": "Play",
                    "link": () => {
                        window.open("https://play.google.com/store/apps/details?id=com.hmz.folio", "_blank");
                    }
                },
                {
                    "title": "Web",
                    "link": () => {
                        window.open("http://mhmzdev.github.io/devfolio", "_blank");
                    }
                },
                {
                    "title": "GitHub",
                    "link": () => {
                        window.open("https://github.com/mhmzdev/devfolio", "_blank");
                    }
                }
            ]
        },
        {
            "title": "Awesome Snackbar Content",
            "image": "images//projects/snackbar.png",
            "type": "Open Source",
            "labels": [
                {
                    "title": "GitHub",
                    "link": () => {
                        window.open("https://github.com/mhmzdev/awesome_snackbar_content", "_blank");
                    }
                },
                {
                    "title": "Package",
                    "link": () => {
                        window.open("https://pub.dev/packages/awesome_snackbar_content", "_blank");
                    }
                }
            ]
        },
        {
            "title": "COVID-19 Tracker",
            "image": "images//projects/covid.png",
            "type": "Open Source",
            "labels": [
                {
                    "title": "GitHub",
                    "link": () => {
                        window.open("https://github.com/mhmzdev/covid19-tracker-app", "_blank");
                    }
                }
            ]
        },
        {
            "title": "Storius",
            "image": "images//projects/storius.png",
            "type": "Product",
            "labels": [
                {
                    "title": "App",
                    "link": () => {
                        window.open("https://apps.apple.com/hk/app/storius-app/id1581928786?l=en", "_blank");
                    }
                },
                {
                    "title": "Play",
                    "link": () => {
                        window.open("https://play.google.com/store/apps/details?id=com.storius.storiusapp", "_blank");
                    }
                },
                {
                    "title": "Web",
                    "link": () => {
                        window.open("https://storiusapp.com/", "_blank");
                    }
                }
            ]
        },
        {
            "title": "Sastaticket.pk",
            "image": "images//projects/sastaticket.png",
            "type": "Product",
            "labels": [
                {
                    "title": "App",
                    "link": () => {
                        window.open("https://apps.apple.com/in/app/sastaticket-flight-hotels/id1564441908", "_blank");
                    }
                },
                {
                    "title": "Play",
                    "link": () => {
                        window.open("https://play.google.com/store/apps/details?id=com.pk.sastaticket&hl=en&gl=US", "_blank");
                    }
                },
                {
                    "title": "Web",
                    "link": () => {
                        window.open("https://www.sastaticket.pk/", "_blank")
                    }
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
            var labelIcon = document.createElement("i");

            if (title == "App") {
                labelIcon.className = "p-label-icon fa fa-apple";
            } else if (title == "Play") {
                labelIcon.className = "p-label-icon fa fa-google";
            } else if (title == "Web") {
                labelIcon.className = "p-label-icon fa fa-globe";
            } else if (title == "GitHub") {
                labelIcon.className = "p-label-icon fa fa-github";
            } else if (title == "Package") {
                labelIcon.className = "p-label-icon material-icons";
                labelIcon.innerHTML = "widgets";
                labelIcon.style.fontSize = "16px";
            }

            var labelText = document.createElement("span");
            labelText.className = "label p-label-text";
            labelText.innerHTML = title;

            label.onclick = link;

            label.appendChild(labelIcon);
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
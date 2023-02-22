$(document).ready(function () {
    var socials = [
        {
            "icon": "fa fa-linkedin-square",
            "value": () => {
                window.open("https://linkedin.com/in/mhmzdev", "_blank");
            }
        },
        {
            "icon": "fa fa-github",
            "value": () => {
                window.open("https://github.com/mhmzdev", "_blank");
            },
        },
        {
            "icon": "fa fa-medium",
            "value": () => {
                window.open("https://mhmzdev.medium.com", "_blank");
            }
        },
        {
            "icon": "fa fa-facebook-square",
            "value": () => {
                window.open("https://facebook.com/mhmzdev", "_blank");
            }
        },
        {
            "icon": "fa fa-instagram",
            "value": () => {
                window.open("https://instagram.com/mhmzdev", "_blank");
            }
        },
        {
            "icon": "fa fa-twitter",
            "value": () => {
                window.open("https://twitter.com/mhmzdev", "_blank");
            }
        }
    ];


    for (var i = 0; i < socials.length; i++) {
        var div = document.createElement("div");
        div.className = "social-icon-wrapper";

        var icon = document.createElement("i");
        icon.className = "social-icon " + socials[i]["icon"];

        var link = socials[i]["value"];
        div.onclick = link;

        div.appendChild(icon);

        var socialHandles = document.getElementById("social-handles");
        socialHandles.appendChild(div);
    }

    for (var i = 0; i < socials.length; i++) {
        var div = document.createElement("div");
        div.className = "social-icon-wrapper";
        div.style.padding = "3%";

        var icon = document.createElement("i");
        icon.className = "social-icon " + socials[i]["icon"];

        var link = socials[i]["value"];
        div.onclick = link;

        div.appendChild(icon);

        var socialHandlsContact = document.getElementById("social-contact-icons");
        var extraDiv = document.createElement("div");

        socialHandlsContact.appendChild(extraDiv);
        socialHandlsContact.appendChild(div);
        socialHandlsContact.appendChild(extraDiv);
    }
});
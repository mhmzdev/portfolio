$(document).ready(function () {
    var socials = [
        {
            "icon": "fa fa-linkedin-square",
            "value": "https://linkedin.com/in/mhmzdev"
        },
        {
            "icon": "fa fa-github",
            "value": "https://github.com/mhmzdev"
        },
        {
            "icon": "fa fa-medium",
            "value": "https://mhmzdev.medium.com"
        },
        {
            "icon": "fa fa-facebook-square",
            "value": "https://facebook.com/mhmzdev"
        },
        {
            "icon": "fa fa-instagram",
            "value": "https://instagram.com/mhmzdev"
        },
        {
            "icon": "fa fa-twitter",
            "value": "https://twitter.com/mhmzdev"
        }
    ];


    for (var i = 0; i < socials.length; i++) {
        var div = document.createElement("div");
        div.className = "social-icon-wrapper";

        var icon = document.createElement("i");
        icon.className = "social-icon " + socials[i]["icon"];

        var link = socials[i]["value"];
        div.onclick = () => {
            window.open(link, '_blank');
        };

        div.appendChild(icon);

        var socialHandles = document.getElementById("social-handles");
        socialHandles.appendChild(div);
    }

    for (var i = 0; i < socials.length; i++) {
        var div = document.createElement("div");
        div.className = "social-icon-wrapper";
        div.style.padding = "2%";

        var icon = document.createElement("i");
        icon.className = "social-icon " + socials[i]["icon"];

        var link = socials[i]["value"];
        div.onclick = () => {
            window.open(link, '_blank');
        };

        div.appendChild(icon);

        var socialHandlsContact = document.getElementById("social-contact-icons");
        var extraDiv = document.createElement("div");

        socialHandlsContact.appendChild(extraDiv);
        socialHandlsContact.appendChild(div);
        socialHandlsContact.appendChild(extraDiv);
    }
});
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

        div.style.marginLeft = "1%";
        div.style.padding = "0.75%";
        div.style.fontSize = "18px";
        div.style.borderRadius = "50%";
        div.style.backgroundColor = "#25262A";
        div.style.display = "flex";
        div.style.justifyContent = "center";
        div.style.alignItems = "center";
        div.style.animation = "beat 1s";

        div.onmouseover = function (event) {
            div.style.fontSize = "24px";
            div.style.transition = "0.4s";
        }

        div.onmouseout = function (event) {
            div.style.fontSize = "18px";
            div.style.transition = "0.4s";
        }

        var icon = document.createElement("i");
        icon.className = "social-icon " + socials[i]["icon"];

        icon.style.backgroundColor = "#ffffff00";
        icon.style.color = "#6EF3A5";

        div.appendChild(icon);

        var socialHandles = document.getElementById("social-handles");
        socialHandles.appendChild(div);
    }

    for (var i = 0; i < socials.length; i++) {
        var div = document.createElement("div");
        div.className = "social-icon-wrapper";

        div.style.marginLeft = "1%";
        div.style.padding = "2%";
        div.style.fontSize = "18px";
        div.style.borderRadius = "50%";
        div.style.backgroundColor = "#25262A";
        div.style.display = "flex";
        div.style.justifyContent = "center";
        div.style.alignItems = "center";
        div.style.animation = "beat 1s";

        var icon = document.createElement("i");
        icon.className = "social-icon " + socials[i]["icon"];

        icon.style.backgroundColor = "#ffffff00";
        icon.style.color = "#6EF3A5";

        div.appendChild(icon);

        var socialHandlsContact = document.getElementById("social-contact-icons");
        var extraDiv = document.createElement("div");

        socialHandlsContact.appendChild(extraDiv);
        socialHandlsContact.appendChild(div);
        socialHandlsContact.appendChild(extraDiv);
    }
});
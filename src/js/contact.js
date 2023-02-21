$(document).ready(function () {
    var contactInfo = [
        {
            "icon": "fa fa-phone",
            "label": "+92 346 0159889",
            "link": "https://wa.me/923460159889",
        },
        {
            "icon": "fa fa-envelope",
            "label": "hamza.6.shakeel@gmail.com",
            "link": "mailto:hamza.6.shakeel@gmail.com",
        },
    ];

    for (var i = 0; i < contactInfo.length; i++) {
        var c = contactInfo[i];
        var icon = c.icon;
        var label = c.label;
        var link = c.link;

        var card = document.createElement("div");
        card.className = "contact-card";

        card.onclick = () => {
            window.open(link, '_blank');
        };

        var iconDiv = document.createElement("i");
        iconDiv.id = "mail-icon";
        iconDiv.className = icon;

        var labelDiv = document.createElement("span");
        labelDiv.className = "body2 contact-label";
        labelDiv.innerHTML = label;

        var chevDiv = document.createElement("i");
        chevDiv.id = "chevron-icon";
        chevDiv.className = "fa fa-chevron-right";

        card.appendChild(iconDiv);
        card.appendChild(labelDiv);
        card.appendChild(chevDiv);

        var contactInfoDiv = document.getElementById("contact-info-div");
        contactInfoDiv.insertBefore(card, contactInfoDiv.firstChild);
    }
});
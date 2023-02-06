$(document).ready(function () {
    var contactInfo = [
        {
            "icon": "fa fa-phone",
            "label": "+92 311 1559877",
            "link": "https://somelink.com",
        },
        {
            "icon": "fa fa-envelope",
            "label": "hamza.6.shakeel@gmail.com",
            "link": "https://somelink.com",
        },
    ];

    for (var i = 0; i < contactInfo.length; i++) {
        var c = contactInfo[i];
        var icon = c.icon;
        var label = c.label;
        var link = c.link;

        var card = document.createElement("div");
        card.className = "contact-card";

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
$(document).ready(function () {
    currentDate();

    var contactInfo = [
        {
            "icon": "fa fa-phone",
            "label": "+92 346 0159889",
            "link": () => {
                window.open("https://wa.me/923460159889", "_blank");
            },
        },
        {
            "icon": "fa fa-envelope",
            "label": "hamza.6.shakeel@gmail.com",
            "link": () => {
                window.open("mailto:hamza.6.shakeel@gmail.com", "_blank");
            },
        },
    ];

    for (var i = 0; i < contactInfo.length; i++) {
        var c = contactInfo[i];
        var icon = c.icon;
        var label = c.label;
        var link = c.link;

        var card = document.createElement("div");
        card.className = "contact-card";

        card.onclick = link;

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

function onMeetClick() {
    window.open("https://calendly.com/mhmzdev/15min", '_blank');
}

function currentDate() {
    const current = new Date();
    let monthName = current.toLocaleDateString('en-US', {
        month: "long",
    });

    let date = current.getDate();

    let dayName = current.toLocaleDateString('en-US', {
        weekday: "long",
    });

    var monthText = document.getElementById("month");
    monthText.innerHTML = monthName;

    var dayText = document.getElementById("date");
    dayText.innerHTML = date;

    var weekDayText = document.getElementById("day");
    weekDayText.innerText = dayName;
}
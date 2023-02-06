$(document).ready(function () {
    var communities = [
        {
            "name": "Flutter Islamabad, Pakistan",
            "role": "Community Lead",
            "session": "April 2020 - Present",
            "logo": "images/community/flutter-isb.png",
        },
        {
            "name": "Google Developer Student Clubs",
            "role": "GDSC Lead",
            "session": "June 2020 - June 2021",
            "logo": "images/community/dsc.png",
        },
        {
            "name": "Microsoft Student Ambassador",
            "role": "Student Ambassador",
            "session": "Feb 2021 - Feb 2022",
            "logo": "images/community/mlsa.png",
        },
    ];

    for (var i = 0; i < communities.length; i++) {
        var com = communities[i];
        var name = com.name;
        var role = com.role;
        var session = com.session;
        var logo = com.logo;

        var card = document.createElement("div");
        card.className = "community-card";

        var image = document.createElement('img');
        image.className = "community-logo";
        image.src = logo;
        image.alt = name;

        var info = document.createElement("div");
        info.className = "community-info";

        var cName = document.createElement("p");
        cName.className = "body1 c-title";
        cName.textContent = name;

        var cRole = document.createElement("span");
        cRole.className = "body2 c-position";
        cRole.innerHTML = role;

        var cSession = document.createElement("p");
        cSession.className = "label c-session";
        cSession.textContent = session;

        info.appendChild(cName);
        info.appendChild(cRole);
        info.appendChild(cSession);

        card.appendChild(image);
        card.appendChild(info);

        var communitiesDiv = document.getElementById("communities");
        communitiesDiv.append(card);
    }
});
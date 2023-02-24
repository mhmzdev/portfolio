document.addEventListener("DOMContentLoaded", function () {
    mapCommunityData();
});

function mapCommunityData() {

    let communities = [
        {
            "name": "Flutter Islamabad, Pakistan",
            "role": "Community Lead",
            "session": "April 2020 - Present",
            "logo": "images/community/flutter-isb.png",
            "link": "https://meetup.com/flutter-islamabad",
            "details": "Flutter Islamabad, Pakistan - First ever flutter community to be officially registered at Flutter Network (Google). Hosted events, sessions, hands- on and workshops and trained hundred and thousands of developers."
        },
        {
            "name": "Google Developer Student Clubs",
            "role": "GDSC Lead",
            "session": "June 2020 - June 2021",
            "logo": "images/community/dsc.png",
            "link": "https://gdsc.community.dev/comsats-university-islamabad-campus/",
            "details": "Google Developer Student Clubs - Trained hundreds of students about various technologies like flutter, tensorflow, Git and GitHub etc."
        },
        {
            "name": "Microsoft Student Ambassador",
            "role": "Student Ambassador",
            "session": "Feb 2021 - Feb 2022",
            "logo": "images/community/mlsa.png",
            "link": "https://mlsa.pk/",
            "details": "Microsoft Student Ambassador - Helped students in learning technologies like Python, Azure and GitHub for their projects in college and real-life. Learned team management, event management and helped other students to grow their career as student ambassador."
        }
    ];

    for (var i = 0; i < communities.length; i++) {
        var com = communities[i];
        var name = com.name;
        var role = com.role;
        var session = com.session;
        var logo = com.logo;
        var link = com.link;
        var details = com.details;

        var card = document.createElement("a");
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

        card.href = link;
        card.target = "_blank";

        var communitiesDiv = document.getElementById("communities");
        communitiesDiv.append(card);

        var point = document.createElement("li");
        point.className = "body2 cw-point";
        point.innerHTML = details;

        var points = document.getElementById("cw-points");
        points.appendChild(point);
    }
}
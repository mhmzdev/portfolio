document.addEventListener("DOMContentLoaded", async function () {

    let data = await fetch("../src/data/community.json")
        .then((response) => response.json())
        .then((json) => json);

    mapCommunityData(data);

});

function mapCommunityData(communities) {
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
$(document).ready(function () {
    var overAllStats = [
        {
            "value": "3",
            "text-1": "Years",
            "text-2": "Experience",
        },
        {
            "value": "35+",
            "text-1": "Projects Completed",
            "text-2": "in 10+ Countries",
        },
        {
            "value": "109k+",
            "text-1": "Content",
            "text-2": "Reach & Views",
        },
    ];

    for (var i = 0; i < overAllStats.length; i++) {
        var stat = overAllStats[i];
        var value = stat["value"];
        var txt1 = stat["text-1"];
        var txt2 = stat["text-2"];

        var div = document.createElement("div");
        div.className = "stats stats-data";

        var valueText = document.createElement("h1");
        valueText.className = "value";
        valueText.textContent = value;

        var textColumn = document.createElement("div");
        textColumn.className = "stats-label-column";

        var text1 = document.createElement("div");
        text1.className = "label stats-label";
        text1.innerHTML = txt1;

        var text2 = document.createElement("div");
        text2.className = "label stats-label";
        text2.innerHTML = txt2;

        textColumn.appendChild(text1);
        textColumn.appendChild(text2);

        div.appendChild(valueText);
        div.appendChild(textColumn);

        var overaAllStatsDiv = document.getElementById("overall-stats");
        overaAllStatsDiv.append(div);
    }
});
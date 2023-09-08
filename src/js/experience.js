document.addEventListener("DOMContentLoaded", function () {
    mapExperienceData();
});


function mapExperienceData() {

    let exp = [
        {
            "org": "Sastaticket.pk",
            "position": "Software Engineer",
            "duration": "Jan 2022 - Present",
            "technologies": [
                "Flutter",
                "Dart",
                "GitHub Actions",
                "Supabase",
                "Firebase",
                "Fintech - Payments",
                "REST APIs",
                "Dart package"
            ],
            "details": [
                "Working with flutter_bloc state management, alongside provider to maintain local states and global use cases",
                "Integrated payment gateways into flutter app with REST APIs",
                "Handled local packages to maintain custom components and to maintain API architecture",
                "Maintaining layered architecture for better encapsulation and abstraction of code from Application layer to domain layer and to data layer",
                "Learned GitHub actions for CI/CD",
                "Worked with various env. flavors in flutter app (dev, qa, stage, prod)",
                "Learned concepts like ACL (Access Control List) for maintaining features in live app",
                "Integration of REST APIs, Firebase and local cached concepts for better user experience",
                "Added features in huge code base with scalability in mind, along with other concepts of OOP and design pattern.",
                "Learned project management tools like Jira and Mural",
                "Worked in Agile software methodology, worked in sprints and different team structures like Squads.",
                "Helped in interviews and expanding team of developers."
            ]
        },
        {
            "org": "Donation App Ltd. | UK",
            "position": "Consultant & Software Engineer",
            "duration": "Aug 2021 - Present",
            "technologies": [
                "Flutter/Dart",
                "GitHub Actions",
                "Firebase",
                "Stripe/PayPal",
                "REST APIs",
                "Cloud functions",
                "Node.js",
                "Express.js",
            ],
            "details": [
                "Developed first MVP for android application",
                "Upgraded MVP to latest flutter SDK as the MVP was developed in flutter 1.x.x",
                "Currently handling the BETA version for the mobile app using flutter (android/iOS) both",
                "Written cloud functions on firebase to handling some of the backend logic that needs to be separated from mobile application layer",
                "Developed web application using flutter for registrations of charities and marketing purposes",
                "Add stripe and paypal as payment gateways",
                "Followed bloc architecture and state management for scalable application",
                "Currently handling keen operations for penetration testing",
                "Implemented caching techniques for better UX",
            ]
        },
        {
            "org": "Eja Rides | Albania",
            "position": "Consultant & Lead Mobile Developer",
            "duration": "Sep 2022 - Jan 2023",
            "technologies": [
                "Flutter",
                "Dart",
                "GitHub Actions",
                "Firebase",
                "Fintech - Payments",
                "REST APIs",
                "GraphQL",
            ],
            "details": [
                "Upgraded the application to complete new UI and UX",
                "Uplifted the mobile apps architecture for better performance and better code structure",
                "Integrated REST and GraphQL structures of APIs for various purposes",
                "Added Monri payment gateway for testing purposes as this was commonly used in Albania and nearest regions",
                "Consulted for better UI and UX for new design for both the mobile apps",
                "Handled code-sharing concept as there were two mobile apps involved i.e. Driver and Rider app",
                "Keen discussion with stakeholders on how to improve the product overall",
                "Helped hiring and taking interviews for increasing the team count",
            ]
        },
        {
            "org": "ZOffers | India",
            "position": "Consultant mobile app",
            "duration": "Jul 2022 - Aug 2022",
            "technologies": [
                "Flutter",
                "Dart",
                "Firebase",
                "Bit-Bucket",
                "Fintech - Payments",
                "REST APIs",
            ],
            "details": [
                "Consultation for mobile team and interns for writing better code",
                "Better ways of handling complex code base and improve architecture",
                "Reviewing PRs of the mobile team",
                "Overall consulation for mobile app development",
            ]
        },
        {
            "org": "Sastaticket.pk",
            "position": "SWE Intern",
            "duration": "Oct 2021 - Jan 2022",
            "technologies": [
                "Flutter",
                "Dart",
                "Supabase",
                "Firebase"
            ],
            "details": [
                "Learned state management concepts like Bloc, futter bloc and provider",
                "Worked with layered architecture",
                "Integrated Supabase in flutter app",
                "Used external packages for managing form input concepts - flutter_form_builder",
                "Learned GitHub (Version Controlling) with a team, concepts like maintaining PRs, branches etc.",
                "Improved concepts of reusable components"
            ]
        },
        {
            "org": "Storius",
            "position": "Flutter/Dart Intern",
            "duration": "Nov 2020 - Jan 2021",
            "technologies": [
                "Flutter",
                "Dart",
                "App script",
                "Google maps"
            ],
            "details": [
                "Developed first BETA version of storius app",
                "Integrated Google sheets with App scripts that act as SQL database",
                "Managed two different source of data into the app to overcome the place of Firebase",
                "Learned and implemented MVC architecture for production level of application",
                "Integrated Google maps, live markers and interaction of users with it",
                "Added audio players on Google maps posted by users",
                "Enhanced UX of beta version till 3rd revision",
                "Helped in expanding team of developers with various resources"
            ]
        },
        {
            "org": "Multi TeleSoft",
            "position": "Lead Flutter Developer",
            "duration": "Feb 2020 - Apr 2020",
            "technologies": [
                "Flutter",
                "Dart",
                "Google maps",
                "SMS integration",
                "Live locations",
                "Firebase auth",
                "Firebase real-time"
            ],
            "details": [
                "Learned real-time location alerts using firebase real-time db",
                "Integrated Google Maps",
                "Firebase authentication via phone number",
                "MVC architecture based application",
                "Deployment on play store"
            ]
        }
    ];

    for (var i = 0; i < exp.length; i++) {
        var expCard = document.createElement("div");
        expCard.className = "exp-card";

        var expMetaDiv = document.createElement("div");
        expMetaDiv.className = "exp-meta";

        var orgName = document.createElement("h2");
        orgName.className = "heading2 exp-org";
        orgName.innerHTML = exp[i]["org"];

        var position = document.createElement("span");
        position.className = "label exp-position";
        position.innerHTML = exp[i]["position"];

        var session = document.createElement("p");
        session.className = "body2 exp-session";
        session.innerHTML = exp[i]["duration"];

        var technologiesHeading = document.createElement("span");
        technologiesHeading.className = "body2 exp-tech";
        technologiesHeading.innerHTML = "Technologies";

        var technologiesList = document.createElement("ul");
        technologiesList.className = "exp-tech-list";

        for (var k = 0; k < exp[i]["technologies"].length; k++) {
            var techName = document.createElement("li");
            techName.className = "body2 exp-tech-item";
            techName.innerHTML = exp[i]["technologies"][k];
            technologiesList.appendChild(techName);
        }
        expMetaDiv.appendChild(orgName);
        expMetaDiv.appendChild(position);
        expMetaDiv.appendChild(session);
        expMetaDiv.appendChild(technologiesHeading);
        expMetaDiv.appendChild(technologiesList);
        expCard.appendChild(expMetaDiv);

        var detailsList = document.createElement("ul");
        detailsList.className = "exp-detail";

        for (var k = 0; k < exp[i]["details"].length; k++) {
            var detail = document.createElement("li");
            detail.className = "body2 exp-detail-item";
            detail.innerHTML = exp[i]["details"][k];
            detailsList.appendChild(detail);
        }

        expCard.appendChild(detailsList);

        var experiences = document.getElementById("exp");
        experiences.appendChild(expCard);
    }
}
const clubs = [
    {
        name: "Coding Club",
        page: "coding-club.html",
        members: 6,
        activities: "Coding contests, workshops and project building",
        achievements: "1st place in Inter-College Hackathon",
        memberList: [
            ["Aarav Mehta", "Frontend developer", "Aarav creates clean interfaces and enjoys turning ideas into useful web experiences."],
            ["Diya Sharma", "Problem solver", "Diya breaks difficult problems into smaller steps and helps the team find practical solutions."],
            ["Kabir Singh", "Project builder", "Kabir turns creative ideas into working applications and enjoys building useful prototypes."],
            ["Ananya Rao", "Web designer", "Ananya plans clear layouts and thoughtful user experiences for every club project."],
            ["Rohan Patel", "Code challenge enthusiast", "Rohan loves algorithms and motivates the club during coding challenges and contests."],
            ["Meera Nair", "Backend developer", "Meera builds reliable services and organizes the data that makes projects work smoothly."]
        ]
    },
    {
        name: "Robotics Club",
        page: "robotics-club.html",
        members: 8,
        activities: "Robot building and technical competitions",
        achievements: "Best Robotics Project 2025",
        memberList: [
            ["Neil Kulkarni", "Mechanical designer", "Neil designs strong robot structures and enjoys turning sketches into moving parts."],
            ["Riya Chatterjee", "Sensor specialist", "Riya tests sensors that help robots understand their surroundings accurately."],
            ["Dev Agarwal", "Robot programmer", "Dev writes the code that controls robot movement and teaches machines to respond intelligently."],
            ["Jhanvi Reddy", "Electronics builder", "Jhanvi builds and tests the circuits inside robots to keep every connection reliable."],
            ["Om Prakash", "Project researcher", "Om researches new technologies and helps the team choose better project tools."],
            ["Simran Kaur", "Competition lead", "Simran prepares the team and robot for competitions while keeping everyone organized."],
            ["Veer Desai", "Prototype builder", "Veer turns digital designs into working prototypes and improves them through testing."],
            ["Lavanya Pillai", "Team coordinator", "Lavanya organizes tasks and makes sure every robotics member has a clear role."]
        ]
    },
    {
        name: "Cultural Club",
        page: "cultural-club.html",
        members: 7,
        activities: "Dance, music, drama and cultural programs",
        achievements: "Winner of Annual Cultural Fest",
        memberList: [
            ["Ishita Kapoor", "Dance performer", "Ishita brings energy and expression to every performance and enjoys creating new routines."],
            ["Arjun Malhotra", "Music coordinator", "Arjun coordinates music for events and believes the right rhythm brings audiences together."],
            ["Navya Iyer", "Drama performer", "Navya explores characters and stories while helping the group build stage confidence."],
            ["Vivaan Joshi", "Event host", "Vivaan keeps events lively and makes sure every guest feels welcome and included."],
            ["Myra Das", "Stage designer", "Myra creates colorful settings that support each performance through thoughtful planning."],
            ["Aditya Verma", "Creative writer", "Aditya writes scripts and stories that give every cultural performance its own personality."],
            ["Saanvi Shah", "Program coordinator", "Saanvi organizes schedules and helps cultural events run smoothly from start to finish."]
        ]
    },
    {
        name: "Photography Club",
        page: "photography-club.html",
        members: 3,
        activities: "Photography walks and photo exhibitions",
        achievements: "Best Campus Photography Exhibition",
        memberList: [
            ["Kiara Bansal", "Portrait photographer", "Kiara captures natural expressions and helps people feel comfortable in front of the camera."],
            ["Yash Thakur", "Landscape photographer", "Yash photographs landscapes and campus life while finding beauty in ordinary places."],
            ["Tara Menon", "Photo editor", "Tara prepares images for exhibitions and brings balance, color, and clarity to each photograph."]
        ]
    }
];

const events = [
    {
        title: "Coding Contest",
        date: "20 September",
        details: "Test your programming skills through timed challenges, teamwork, and creative problem solving."
    },
    {
        title: "Robotics Workshop",
        date: "25 September",
        details: "Learn how robots are designed, assembled, and programmed through practical demonstrations."
    },
    {
        title: "Cultural Night",
        date: "2 October",
        details: "Enjoy an evening of dance, music, drama, and performances celebrating student creativity."
    },
    {
        title: "Photography Exhibition",
        date: "10 October",
        details: "Explore student photography showcasing campus life, portraits, landscapes, and unique perspectives."
    }
];

const clubList = document.getElementById("clubList");

clubs.forEach(function(club) {
    const div = document.createElement("a");
    div.className = "club";
    div.href = club.page;

    div.innerHTML =
        "<div class=\"club-heading\"><h3>" + club.name + "</h3>" +
        "<span class=\"club-member-link\">Click here to see members</span></div>" +
        "<p><b>Members:</b> " + club.members + "</p>" +
        "<p><b>Activities:</b> " + club.activities + "</p>" +
        "<p><b>Achievement:</b> " + club.achievements + "</p>";

    clubList.appendChild(div);
});

const eventList = document.getElementById("eventList");

events.forEach(function(event) {
    const eventCard = document.createElement("article");
    eventCard.className = "event";
    eventCard.innerHTML =
        "<div class=\"event-summary\"><div><strong>" + event.title + "</strong><span>" + event.date + "</span></div>" +
        "<button class=\"event-details-toggle\" type=\"button\" aria-expanded=\"false\"><span class=\"event-icon\">+</span>Click to get more details</button></div>" +
        "<p class=\"event-details\" hidden>" + event.details + "</p>";

    eventList.appendChild(eventCard);

    const detailsButton = eventCard.querySelector(".event-details-toggle");
    const details = eventCard.querySelector(".event-details");
    detailsButton.addEventListener("click", function() {
        const isHidden = details.hasAttribute("hidden");
        details.toggleAttribute("hidden");
        detailsButton.setAttribute("aria-expanded", String(isHidden));
        detailsButton.querySelector(".event-icon").textContent = isHidden ? "-" : "+";
    });
});

const achievementList = document.getElementById("achievementList");

clubs.forEach(function(club) {
    const div = document.createElement("div");
    div.className = "achievement";

    div.innerHTML =
        "<h3>" + club.name + "</h3>" +
        "<p>" + club.achievements + "</p>";

    achievementList.appendChild(div);
});

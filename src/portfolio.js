// --- 🎨 Site Styling ---

// Colors (recommendation: choose a color suitable for dark and light modes)
// Should be inputted as a hex value. Use https://g.co/kgs/XCcs7T for choosing colors with hex.
const colors = {
    buttonColor: "#4305ba",
    LinkHighlightColor: "#4305ba"
}

// Transitions
const transitions = {
    active: true, // activate for all sections
    onlyLanding: false, // activate only for initial load of landing page
    showOnce: true, // transition only once
    thresholdOption: 0.2 // indicates at what percentage of the sections visibility the transition should start
}

// Splash Screen
const splashScreen = true // recommended: for best behavior after refresh

// --- 👋 Greeting Section ---
const greeting = {
    intro: "Hello 👋, my name is",
    name: "Maxim Shelepov",
    message: "I'm a computer science student and an up-and-coming software engineer. Previously worked as a web developer at my university building tools to aid students and educators. Now working on an educational AI tool as part of a Stealth Startup.",
    basedLocation: "Raleigh, NC",
    resumeLink: "https://docs.google.com/document/d/1Sa_sK3RMusoezzgzxu8LkV16i2Jra2qd/edit?usp=sharing&ouid=113657039181859132688&rtpof=true&sd=true", // recommended: google drive file share link (change to "anyone on the internet can view")
    logo: {
        link: "images/initials.png", // use relative path from  parent directory -> ex: images/image.ext
        custom: true // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
    },
    portraitLink: 'images/portrait.jpg'
}

const socialMediaLinks = {
    github: "https://github.com/feifyKike",
    linkedin: "https://www.linkedin.com/in/maxim-shelepov1",
    medium: "https://medium.com/@mimaishel",
    stackoverflow: "",
    xtwitter: "https://twitter.com/mimaishel"
} // to add any additional social media links check out the README.md or src/icons.js file

// --- 😎 About Section ---
const about = {
    autobiography: [
        "My name is Maxim Shelepov and I'm a computer science student at North Carolina State University. I have a knack for solving problems and creating impactful software solutions. Having worked in web development as part of my university IT team, I gained beyond surface-level experience in Laravel and the PHP universe. Through personal studies while in high school, I built my first every full-stack personal website maximshelepov.com using Django.",
        "Nowadays you can find me doing CS coursework (😅) or working on a Stealth Startup that a CS peer and I founded."
    ], // Separated items are paragraphs
    techStack: [
        "PHP",
        "Python",
        "JavaScript",
        "Vue.js",
        "MySQL",
        "Swift"
    ],
    photo1Link: "images/portrait1.jpeg",
    photo2Link: "images/portrait2.jpeg",
    photo3Link: "images/portrait3.jpeg"
}

// --- 🛡️ Experience Section ---
const experiences = [
    {
        position: "SWE",
        company: {
            name: "Stealth Startup",
            link: "https://en.wikipedia.org/wiki/Stealth_startup"
        },
        duration: "July 2024 - Present",
        bulletPoints: [
            "Developing an educational tool to rethink the student-AI interaction. With a core principle to enhance learning and growth.",
            "More updates to come!"
        ],
        hashtags: [
            "Python",
            "JS"
        ]
    },
    {
        position: "Web Dev Intern",
        company: {
            name: "WolfTech",
            link: "https://tools.wolftech.ncsu.edu/support/index.php/WolfTech_Information_Technology"
        },
        duration: "Aug 2022 - Aug 2024",
        bulletPoints: [
            "Resolved issues and developed new tools within several university web applications (email automation, research discovery, educational resources, scheduling tools, and text-generative AI news sharing).",
            "Achieved 100+ github code contributions as an intern on the team.",
            "Significant contributions in rebuilding and modernizing the university digital sign manager and system. Transforming idea into a testable development application with tools for migrating to new system."
        ],
        hashtags: [
            "Laravel",
            "PHP",
            "MySQL",
            "JS",
            "Vue.js",
            "HTML",
            "Tailwind"
        ]
    },
    // Archived
    // {
    //     position: "Math Tutor",
    //     company: {
    //         name: "Mathnasium",
    //         link: "https://www.mathnasium.com"
    //     },
    //     duration: "Jan 2022 - Aug 2022",
    //     bulletPoints: [
    //         "Taught math to students elementary through high school covering topics from basic algebra to college-level calculus.",
    //         "Directed the trajectory of the student's learning plan and math topic evaluation to facilitate success in their school math class.",
    //         "Requested by many students and parents for routine weekly tutoring sessions in a system with a standard random weekly rotation."
    //     ],
    //     hashtags: [
    //         "Calc 1-2",
    //         "Algebra 1-3",
    //         "Discrete Math",
    //         "Statistics"
    //     ]
    // }
]

// --- 💻 Work Section ---
const works = [
    {
        projectName: "Web Dev Portfolio Template",
        yearCompleted: "2023",
        description: "Created an open source portfolio single page application template for any developer. Built with an intention of simple personal profile implementation and personal customization on top of the existing stack (Vue.js, HTML, Tailwind.css).",
        techStack: "Vue.js, Tailwind.css",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/feifyKike/webdev_portfolio"
            },
            {
                label: "",
                type: "external",
                url: "https://feifykike.github.io/webdev_portfolio"
            }
        ],
        imageLink: "images/webdevportfolio_pic.png",
        alignLeft: true
    },
    {
        projectName: "TrackYourSubs IOS App",
        yearCompleted: "2022",
        description: "An IOS app to track you subscriptions and expenses, all the while presenting in a clean and professional look with a load of features. Some of the more evident features are: Budgeting (monthly / yearly option available), Current monthly & yearly total expense at a glance, Custom suggestions to meet budget, Organize (Categorization & Importance) and filter through subscriptions, Reminders via scheduled notifications, Stats page: pie chart visual, bar chart visual, and streak indicator.",
        techStack: "Swift, SwiftUI",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/feifyKike/TrackYourSubsDemo/"
            },
            {
                label: "",
                type: "external",
                url: "https://youtu.be/KsTx-F70OOk"
            }
        ],
        imageLink: "images/tracksubs_pic.png",
        alignLeft: false
    },
    {
        projectName: "Dynamic Portfolio Website",
        yearCompleted: "2021",
        description: "Developed a personal portfolio website with Python backend using the Django web development framework. Incorporated HTML, CSS, and JavaScript to construct the frontend of the website.",
        techStack: "Django, Python, HTML, CSS, JS",
        links: [
            {
                label: "",
                type: "external",
                url: "https://maximshelepov.com"
            }
        ],
        imageLink: "images/portfolio_pic.png",
        alignLeft: true
    },
    // {
    //     projectName: "Sudoku Game & Solver",
    //     yearCompleted: "2021",
    //     description: "Built a Sudoku game UI incorporating the Java Swing library. Randomly generates a Sudoku puzzle and solves itself using the backtracking algorithm written in Java..",
    //     techStack: "Java",
    //     links: [
    //         {
    //             label: "",
    //             type: "git",
    //             url: "https://github.com/feifyKike/sudokusolver"
    //         },
    //         {
    //             label: "",
    //             type: "external",
    //             url: "https://youtu.be/lXOjOrjf5hU"
    //         }
    //     ],
    //     imageLink: "images/sudoku_pic.png",
    //     alignLeft: false
    // },
    // {
    //     projectName: "Trivia Quiz",
    //     yearCompleted: "2020",
    //     description: "Interested in taking a fun and interactive pop quiz? Using the HTML, CSS3, JavaScript, and jQuery I created a quiz that can be taken on numerous topics of your choice and gives instant feedback. The entire project is built mostly on JavaScript and all the functionality and events are controlled through functions such as ReadDisplay and Validate. The HTML portion of the online quiz only serves as the skeleton and template for elements that will be created via JS.",
    //     techStack: "JS, HTML, CSS",
    //     links: [
    //         {
    //             label: "",
    //             type: "git",
    //             url: "https://github.com/feifyKike/JS-API-Quiz"
    //         },
    //         {
    //             label: "",
    //             type: "external",
    //             url: "https://codepen.io/Max_the_coder/pen/yLXZOYL" //https://codepen.io/Max_the_coder/pen/yLXZOYL
    //         }
    //     ],
    //     imageLink: "images/trivia_pic.png",
    //     alignLeft: true
    // },
    // {
    //     projectName: "Coronavirus Report",
    //     yearCompleted: "2020",
    //     description: "Created a program that displays up-to-date COVID-19 data and shows results in a graphical / visual representation. Coded with the Python programming language and libraries such as Matplotlib, Requests, and CSV.",
    //     techStack: "Python",
    //     links: [
    //         {
    //             label: "",
    //             type: "git",
    //             url: "https://youtu.be/gw5kb1QKVp0"
    //         },
    //         {
    //             label: "",
    //             type: "external",
    //             url: "https://github.com/feifyKike/Covid-Cases-Visual"
    //         }
    //     ],
    //     imageLink: "images/covid_pic.png",
    //     alignLeft: false
    // }
]

const archiveLink = "https://github.com/feifyKike?tab=repositories"

// --- 📭 Contact Section ---
// 2 Options available - Choose 1
const contact = {
    externalLink: {
        shortTitle: "Get in Touch",
        note: [
            "Currently seeking full-time software development positions in the Research Triangle Park or Buffalo NY area.",
        ], // paragraph breaks will be entered after each item,
        link: {
            email: "", // email takes precedance
            other: "https://forms.gle/W3MswTKsPWMxEbn58"
        },
        responseTimeMessage: "...and I'll respond within the next 24hrs"
    },
    formEmbedLink: "" // inclusion of this link will take precedance
}

export default {
    colors,
    transitions,
    splashScreen,
    greeting,
    socialMediaLinks,
    about,
    experiences,
    works,
    archiveLink,
    contact
}
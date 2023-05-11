// Site Styling
const buttonColor = "#4305ba" // hex color
const LinkHighlightColor = "#4305ba" // hex color

// Greeting Section
const greeting = {
    intro: "Hello, my name is Maxim Shelepov 👨🏻‍💻",
    message: "I'm a web developer and a computer science student at NC State University",
    basedLocation: "Raleigh, NC",
    resumeLink: "https://drive.google.com/file/d/1PilBAB-MTGOPmKnA1W29qOKr_cYxfKnw/preview", // recommended: google drive pdf file preview link
    logoAbsoluteLink: "src/assets/images/signature_logo.png", // absolute meaning direct link, relative meaning relative to current file location
    portraitAbsoluteLink: "src/assets/images/portrait.png"
}

const socialMediaLinks = {
    github: "https://github.com/feifyKike",
    linkedin: "https://www.linkedin.com/in/maxim-shelepov1",
    medium: "https://medium.com/@mimaishel",
    stackoverflow: "https://stackoverflow.com/users/13826671/maxim"
}

// About Section
const about = {
    autobiography: [
        "My name is Maxim Shelepov and I'm a Computer Science student at North Carolina State University. I have a passion for coding in languages such as Python, Java, PHP, & Swift. Work in web development and have experience with Django and Laravel frameworks.",
        "Responsible, organized, problem solver, and independent thinker. Work well in a team and a quick learner. Programming for 3+ years and have 4 years of experience in advanced mathematics such as Calculus, Statistics, and Discrete Mathematics.Currently, working as a web development intern for my University."
    ], // Separated items are paragraphs
    techStack: [
        "PHP",
        "Python",
        "JavaScript",
        "Vue.js",
        "MySQL",
        "Swift"
    ],
    photo1Link: "src/assets/images/portrait1.jpeg",
    photo2Link: "src/assets/images/portrait2.jpeg",
    photo3Link: "src/assets/images/portrait3.jpeg"
}

// Experience Section
const experiences = [
    {
        position: "Programming Intern",
        company: {
            name: "WolfTech",
            link: "https://tools.wolftech.ncsu.edu/support/index.php/WolfTech_Information_Technology"
        },
        duration: "Aug 2022 - Present",
        bulletPoints: [
            "Resolved issues, developed new features and tools for several NC State university web applications.",
            "Simplified workflows for future testing and deployment of project repositories."
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
    {
        position: "Math Tutor",
        company: {
            name: "Mathnasium",
            link: "https://www.mathnasium.com"
        },
        duration: "Jan 2022 - Aug 2022",
        bulletPoints: [
            "Helped students elementary through high school in mathematics via learning plan problems, HW help, and general questions.",
            "Assisted in guiding the learning plan and assessment of students' knowledge."
        ],
        hashtags: [
            "Calc 1-2",
            "Algebra 1-3",
            "Discrete Math",
            "Statistics"
        ]
    }
]

// Work Section
const works = [
    {
        projectName: "TrackYourSubs IOS App",
        yearCompleted: "2022",
        description: "An IOS app to track you subscriptions and expenses, all the while presenting in a clean and professional look with a load of features. Some of the more evident features are: Budgeting (monthly / yearly option available), Current monthly & yearly total expense at a glance, Custom suggestions to meet budget, Organize (Categorization & Importance) and filter through subscriptions, Reminders via scheduled notifications, Stats page: pie chart visual, bar chart visual, and streak indicator.",
        techStack: "Swift, SwiftUI",
        links: [
            {
                label: "Demo",
                url: "https://youtu.be/KsTx-F70OOk"
            },
            {
                label: "Github",
                url: "https://github.com/feifyKike/TrackYourSubsDemo/"
            }
        ],
        imageLink: "src/assets/project_images/tracksubs_pic.png",
        alignLeft: false
    },
    {
        projectName: "Dynamic Portfolio Website",
        yearCompleted: "2021",
        description: "Developed a personal portfolio website with Python backend using the Django web development framework. Incorporated HTML, CSS, and JavaScript to construct the frontend of the website.",
        techStack: "Django, Python, HTML, CSS, JS",
        links: [
            {
                label: "Live Demo",
                url: "https://maximshelepov.com"
            }
        ],
        imageLink: "src/assets/project_images/portfolio_pic.png",
        alignLeft: true
    },
    {
        projectName: "Sudoku Game & Solver",
        yearCompleted: "2021",
        description: "Built a Sudoku game UI incorporating the Java Swing library. Randomly generates a Sudoku puzzle and solves itself using the backtracking algorithm written in Java..",
        techStack: "Java",
        links: [
            {
                label: "Demo",
                url: "https://youtu.be/lXOjOrjf5hU"
            },
            {
                label: "Github",
                url: "https://github.com/feifyKike/sudokusolver"
            }
        ],
        imageLink: "src/assets/project_images/sudoku_pic.png",
        alignLeft: false
    },
    {
        projectName: "Trivia Quiz",
        yearCompleted: "2020",
        description: "Interested in taking a fun and interactive pop quiz? Using the HTML, CSS3, JavaScript, and jQuery I created a quiz that can be taken on numerous topics of your choice and gives instant feedback. The entire project is built mostly on JavaScript and all the functionality and events are controlled through functions such as ReadDisplay and Validate. The HTML portion of the online quiz only serves as the skeleton and template for elements that will be created via JS.",
        techStack: "JS, HTML, CSS",
        links: [
            {
                label: "Demo",
                url: "https://codepen.io/Max_the_coder/pen/yLXZOYL"
            },
            {
                label: "Github",
                url: "https://github.com/feifyKike/JS-API-Quiz"
            }
        ],
        imageLink: "src/assets/project_images/trivia_pic.png",
        alignLeft: true
    },
    {
        projectName: "Coronavirus Report",
        yearCompleted: "2020",
        description: "Created a program that displays up-to-date COVID-19 data and shows results in a graphical / visual representation. Coded with the Python programming language and libraries such as Matplotlib, Requests, and CSV.",
        techStack: "Python",
        links: [
            {
                label: "Demo",
                url: "https://youtu.be/gw5kb1QKVp0"
            },
            {
                label: "Github",
                url: "https://github.com/feifyKike/Covid-Cases-Visual"
            }
        ],
        imageLink: "src/assets/project_images/covid_pic.png",
        alignLeft: false
    }
]

const archiveLink = "https://github.com/feifyKike?tab=repositories"

// Contact Section
// 2 Options available - Choose 1
const contact = {
    externalLink: {
        shortTitle: "Get in Touch",
        note: [
            "Currently seeking web and software development positions/internships in the RTP area for summer 2024.",
            "Also looking to build a team for project & startup ideas or just make professional connections."
        ], // paragraph breaks will be entered after each item,
        link: {
            email: "", // email takes precedance
            other: ""
        },
        responseTimeMessage: "...and I'll resopnd within the next 24hrs"
    },
    formEmbedLink: "https://docs.google.com/forms/d/e/1FAIpQLSfvEu3_VYha6z6ppqmgrgJsbnAfdNtXu2nB8IqBSQJlX-4vaA/viewform?embedded=true" // inclusion of this link will take precedance
}

export default {
    buttonColor,
    LinkHighlightColor,
    greeting,
    socialMediaLinks,
    about,
    experiences,
    works,
    archiveLink,
    contact
}
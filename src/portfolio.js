// --- 🎨 Site Styling ---

// Colors (recommendation: choose a color suitable for dark and light modes)
// Should be inputted as a hex value. Use https://g.co/kgs/XCcs7T for choosing colors with hex.
const colors = {
  buttonColor: "#4305ba",
  LinkHighlightColor: "#4305ba",
};

// Transitions
const transitions = {
  active: true, // activate for all sections
  onlyLanding: false, // activate only for initial load of landing page
  showOnce: true, // transition only once
  thresholdOption: 0.2, // indicates at what percentage of the sections visibility the transition should start
};

// Splash Screen
const splashScreen = true; // recommended: for best behavior after refresh

// --- 👋 Greeting Section ---
const greeting = {
  intro: "Hello 👋, my name is",
  name: "Raj Shukla",
  message:
    "I'm an undergrad at IIT Dhanbad and an aspiring software engineer. Currently working as a web developer at my university building tools to aid students, educators, and staff.",
  basedLocation: "Dhanbad, Jharkhand",
  resumeLink:
    "https://drive.google.com/file/d/1Nff_p8ZVlUafK_1jMfex4maFWt_GtN8H/view", // recommended: google drive file share link (change to "anyone on the internet can view")
  logo: {
    link: "images/initials1", // use relative path from  parent directory -> ex: images/image.ext
    custom: true, // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
  },
  portraitLink: "images/portraita.jpeg",
};

const socialMediaLinks = {
  github: "https://github.com/RAJSHUKLA9797",
  linkedin: "https://www.linkedin.com/in/raj-shukla-3ba17622a/",
  medium: "",
  stackoverflow: "",
  xtwitter: "",
}; // to add any additional social media links check out the README.md or src/icons.js file

// --- 😎 About Section ---
const about = {
  autobiography: [
    "My name is Raj Shukla and I'm a B.Tech student at IIT Dhanbad. I have a passion for coding in languages such as Python, JS, & C++. I Work in web development and have experience with Nodejs and React.",
    "Programming for 2+ years and have 4 years of experience in advanced mathematics such as calculus and statistics. Currently working as a web development intern for my university.",
  ], // Separated items are paragraphs
  techStack: [
    "Nodejs",
    "Python",
    "JavaScript",
    "React.js",
    "MongoDB",
    "Express.JS",
  ],
  photo1Link: "images/portrait1a.jpeg",
  photo2Link: "images/portrait2a.jpeg",
  photo3Link: "",
};

// --- 🛡️ Experience Section ---
const experiences = [
  {
    position: "Web Dev Intern",
    company: {
      name: "NGO Portal",
      link: "https://ngo-frontend-37pi.onrender.com/",
    },
    duration: "Sept 2023 - Dec 2023",
    bulletPoints: [
      "Developed a fully functional website for an NGO under the guidance of the Dean Academic of my college which allowed the donors to donate their discarded belongings to the needy",
      "allowing the donors to donate their discarded belongings to the needy",
    ],
    hashtags: ["Nodejs", "MongoDB", "React", "JS", "HTML", "Bootstrap"],
  },
  {
    position: "Backend Developer",
    company: {
      name: "Concetto",
      link: "concetto.in",
    },
    duration: "Aug 2023 - Oct 2023",
    bulletPoints: [
      "I contributed to the development of a fully functional website in my college fest for managing events and merchandise sales",
      " It was used by around 800-1000 people (users and organizers) for the smooth conduction of th event.",
    ],
    hashtags: ["Nodejs", "Express", "MongoDB", "React"],
  },
];

// --- 💻 Work Section ---
const works = [
  {
    projectName: "Dil se Daan",
    yearCompleted: "2023",
    description:
      "A fully functional website for an NGO under the guidance of the Dean Academic of my college in a team of 6 members, allowing the donors to donate their discarded belongings to the needy",
    techStack: "Nodejs, MongoDB, React",
    links: [
      {
        label: "",
        type: "external",
        url: "https://ngo-frontend-37pi.onrender.com/",
      },
    ],
    imageLink: "images/DilSeDaan.png",
    alignLeft: false,
  },
  {
    projectName: "College Fest Website",
    yearCompleted: "2023",
    description:
      "A fully functional website in my college fest for managing events and merchandise sales. It was used by around 800-1000 people (users and organizers) for the smooth conduction of the event",
    techStack: "Nodejs, React, MongoDB",
    links: [
      {
        label: "",
        type: "external",
        url: "https://concetto.in/",
      },
    ],
    imageLink: "images/concetto.png",
    alignLeft: true,
  },
  {
    projectName: "Clever-Code",
    yearCompleted: "2022",
    description:
      "I made a platform that lets competitive coders practice based on the problems solved by their peers. The platform is a boon for students who need to improve their skills in DSA and competitive programming for ICPC and other events.",
    techStack: "JS",
    links: [
      {
        label: "",
        type: "external",
        url: "https://clever-code.tech/",
      },
    ],
    imageLink: "images/clever-code.png",
    alignLeft: false,
  },
];

const archiveLink = "https://github.com/RAJSHUKLA9797?tab=repositories";

// --- 📭 Contact Section ---
// 2 Options available - Choose 1
const contact = {
  externalLink: {
    shortTitle: "Get in Touch",
    note: [
      "Currently seeking web and software development positions/internships for summer 2025.",
      "Also looking to build a team for projects & startup ideas or just make professional connections.",
    ], // paragraph breaks will be entered after each item,
    link: {
      email: "rajshukla9797@gmail.com", // email takes precedance
    },
    responseTimeMessage: "...and I'll resopnd within the next 24hrs",
  },
  formEmbedLink: "", // inclusion of this link will take precedance
};

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
  contact,
};

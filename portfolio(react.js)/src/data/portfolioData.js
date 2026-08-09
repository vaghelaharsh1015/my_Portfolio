export const portfolioData = {
  personal: {
    name: "Harsh Vaghela",
    title: "BCA Student & Frontend Developer",
    subtitle: "BCA Student & Frontend Developer",
    description: "I build modern, responsive, and interactive web experiences using modern frontend technologies.",
    resumeUrl: "#resume-section",
    githubUrl: "https://github.com/vaghelaharsh1015",
    linkedinUrl: "https://linkedin.com/in/harsh-vaghela",
    email: "harshvaghela1015@gmail.com",
    phone: "+91 98765 43210",
    location: "Gujarat, India",
    tagline: "Building the future of the web with clean code and interactive 3D designs."
  },
  stats: [
    { value: "10+", label: "Projects Completed" },
    { value: "8+", label: "Technologies Mastered" },
    { value: "BCA", label: "Student Status" },
    { value: "100%", label: "Passion & Drive" }
  ],
  skills: {
    frontend: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React.js", level: 80 }
    ],
    programming: [
      { name: "C Language", level: 75 },
      { name: "C++", level: 80 },
      { name: "JavaScript", level: 85 }
    ],
    database: [
      { name: "SQL", level: 80 },
      { name: "PL/SQL", level: 75 }
    ],
    tools: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 88 },
      { name: "VS Code", level: 90 }
    ]
  },
  projects: [
    {
      id: "react-1",
      category: "React",
      title: "DevHub Developer Community",
      shortDescription: "A modern glassmorphic developer workspace featuring team collab boards, live markdown editor, and project trackers.",
      longDescription: "DevHub is a comprehensive dashboard platform tailored for developers to manage their code projects, read developer news, collaborate using interactive kanban boards, and edit documentation using a live-updating markdown editor. Built on React with a glassmorphism style sheet, it provides a high-performance workspace with animations.",
      technologies: ["React.js", "CSS3", "React Icons", "Local Storage"],
      image: "react_project_devhub",
      liveUrl: "https://github.com/vaghelaharsh1015/devhub",
      githubUrl: "https://github.com/vaghelaharsh1015/devhub"
    },
    {
      id: "react-2",
      category: "React",
      title: "Crypto Dashboard & Tracker",
      shortDescription: "A real-time cryptocurrency statistics portal displaying prices, historical trends, and interactive tracking lists.",
      longDescription: "A responsive cryptocurrency investment hub utilizing public APIs to render real-time market data. Users can create customizable watchlists, view detailed price trend charts, and simulate portfolio values. The design follows dark theme aesthetics with soft neon gradients.",
      technologies: ["React.js", "Fetch API", "CSS Variables", "Interactive Canvas"],
      image: "react_project_crypto",
      liveUrl: "https://github.com/vaghelaharsh1015/crypto-tracker",
      githubUrl: "https://github.com/vaghelaharsh1015/crypto-tracker"
    },
    {
      id: "js-1",
      category: "JavaScript",
      title: "Kanban Task Board",
      shortDescription: "An interactive, drag-and-drop task board with state transitions, custom tags, and local storage caching.",
      longDescription: "This interactive Kanban board allows users to manage workflows by creating, dragging, and organizing task cards across different states (Backlog, In Progress, Review, Done). Written in pure vanilla JavaScript, it features custom drag-and-drop event listeners, filterable labels, and data persistence.",
      technologies: ["JavaScript (ES6)", "HTML5", "CSS Grid", "Local Storage"],
      image: "js_project_kanban",
      liveUrl: "https://github.com/vaghelaharsh1015/js-kanban",
      githubUrl: "https://github.com/vaghelaharsh1015/js-kanban"
    },
    {
      id: "js-2",
      category: "JavaScript",
      title: "Retro Brick Breaker Game",
      shortDescription: "A classic arcade game rendered on HTML5 Canvas featuring physics, dynamic level speeds, and sound effects.",
      longDescription: "A retro brick breaker game built from scratch using object-oriented JavaScript and the HTML5 Canvas API. It integrates collision detection, score and life systems, powerups (paddle extension, ball speed variations), and smooth frame rendering for a latency-free experience.",
      technologies: ["JavaScript", "HTML5 Canvas", "CSS3 Animation", "Audio API"],
      image: "js_project_brickbreaker",
      liveUrl: "https://github.com/vaghelaharsh1015/brick-breaker",
      githubUrl: "https://github.com/vaghelaharsh1015/brick-breaker"
    },
    {
      id: "html-1",
      category: "HTML & CSS",
      title: "Gym & Fitness Landing Page",
      shortDescription: "A conversion-optimized, fully responsive gym page with dynamic pricing tables and interactive schedules.",
      longDescription: "A modern commercial fitness page prioritizing visual impact. Built using custom CSS Flexbox and CSS Grid layouts, it offers a multi-device fluid design, glowing hover animations, and custom SVG shapes.",
      technologies: ["HTML5", "CSS3", "Flexbox", "Media Queries"],
      image: "html_project_gym",
      liveUrl: "https://github.com/vaghelaharsh1015/gym-landing",
      githubUrl: "https://github.com/vaghelaharsh1015/gym-landing"
    },
    {
      id: "html-2",
      category: "HTML & CSS",
      title: "Tech Conference Event Site",
      shortDescription: "A futuristic conference event site featuring clean grids, elegant layout elements, and scrolling animations.",
      longDescription: "A premium event registration landing page featuring futuristic grid structures, glass cards detailing the speaker lists, and scrolling animated timelines for the sessions. Perfect responsiveness on mobile and tablet screens.",
      technologies: ["HTML5", "CSS3", "CSS Grid", "Transitions"],
      image: "html_project_conference",
      liveUrl: "https://github.com/vaghelaharsh1015/tech-conference",
      githubUrl: "https://github.com/vaghelaharsh1015/tech-conference"
    }
  ],
  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "V.S. Patel College of Arts & Science",
      university: "Veer Narmad South Gujarat University (VNSGU)",
      year: "2024 - Present",
      description: "Pursuing standard undergraduate computer applications degree focusing on programming fundamentals, system design, and database systems.",
      subjects: ["Computer Organization", "C & C++ Programming", "Database Management Systems (DBMS)", "Web Development Principles", "Data Structures"]
    },
    {
      degree: "Higher Secondary Certificate (HSC) - Science",
      institution: "Shree Vasishtha Vidyalaya",
      university: "GSEB Board",
      year: "2022 - 2024",
      description: "Completed secondary education with focus on Physics, Chemistry, and Mathematics (PCM).",
      subjects: ["Mathematics", "Physics", "Chemistry", "Computer Science"]
    }
  ]
};

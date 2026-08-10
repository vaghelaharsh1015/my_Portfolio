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
      title: "Pet Shop E-Commerce Website",
      shortDescription: "A comprehensive pet shop and care platform featuring service bookings, product catalog, shopping cart, and blog details.",
      longDescription: "Pet Shop is a fully featured, responsive React e-commerce application designed for pet owners and pet care centers. It features a complete online shop with dynamic product details, an interactive shopping cart and checkout simulation, a service booking overview, gallery components, and comprehensive blogs. Built using React and React Router for multi-page navigation and modular components.",
      technologies: ["React.js", "React Router", "React Icons", "CSS3 Animation"],
      image: "react_project_petshop",
      liveUrl: "https://petshop-website-sigma.vercel.app",
      githubUrl: "https://github.com/vaghelaharsh1015/pet-shop"
    },
    {
      id: "js-1",
      category: "JavaScript",
      title: "HK Mart - E-Commerce Website",
      shortDescription: "An interactive, responsive e-commerce web app featuring a user authentication portal and real-time cart handling.",
      longDescription: "HK Mart is a frontend e-commerce platform designed with Vanilla JavaScript, Bootstrap 5, and custom styling. It allows users to browse products, add items to a shopping cart with local-storage persistence, update quantities, and login/register through modal forms.",
      technologies: ["JavaScript", "Bootstrap 5", "CSS3", "Local Storage"],
      image: "js_project_hkmart",
      liveUrl: "https://hk-mart-c1uyx579a-king-petshop.vercel.app",
      githubUrl: "https://github.com/vaghelaharsh1015/HK-MART.git"
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

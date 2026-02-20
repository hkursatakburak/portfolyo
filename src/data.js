export const heroData = {
  name: "Hamza Kürşat AKBURAK",
  tagline: "Electrical & Electronics Engineer focused on Radar, Intelligent Systems and Applied AI",
  intro: "A brief welcoming sentence introducing him as an engineering student building real-world systems.",
  buttons: [
    { text: "View Projects", link: "#projects", primary: true },
    { text: "Download CV", link: "https://drive.google.com/file/d/1bF9plXVfHya5Y1j9Sohhs1xh9WBcyBHD/view?usp=sharing", primary: false }
  ]
};

export const aboutData = {
  bio: "I’m an Electrical & Electronics Engineering student interested in radar, sensing technologies and AI. I enjoy working on projects where I can turn theory into something real, especially when it involves building and testing systems. Along the way, I’ve also taken active roles in teams and communities, which helped me grow both technically and personally."
};

export const projectsTopDescription = "Explore my work across engineering and leadership domains.";

export const techProjects = [
  {
    id: 1,
    title: "Sentinel-2 Soil Quality Prediction with AI",
    summary: "Low-cost soil organic carbon prediction model for the Thrace region.",
    description: "Developed a machine learning model using satellite imagery to estimate soil quality and reduce reliance on traditional lab analysis.",
    technologies: ["Sentinel-2", "Random Forest", "NDVI", "SAVI", "BSI"],
    result: "R² = 0.911, field validation error ≈ 0.46%",
    image: null
  },
  {
    id: 2,
    title: "Hyperspectral Imaging for Soil Analysis",
    summary: "Ongoing graduation project using hyperspectral camera data and deep learning to estimate soil properties with near-laboratory accuracy for precision agriculture.",
    description: "Ongoing graduation project using hyperspectral camera data and deep learning to estimate soil properties with near-laboratory accuracy for precision agriculture.",
    technologies: ["Hyperspectral Imaging", "Deep Learning", "Signal Processing"],
    image: null
  }
];

export const miniProjects = [
  {
    id: 1,
    title: "STM32 Bare-Metal Driver Development",
    description: "Low-level peripheral drivers built at register level without HAL."
  },
  {
    id: 2,
    title: "FPGA Communication Modules (UART/SPI)",
    description: "Custom digital communication protocols implemented on FPGA."
  },
  {
    id: 3,
    title: "CAN-Bus Network Simulation & Implementation",
    description: "Robust communication network for embedded systems."
  },
  {
    id: 4,
    title: "Custom Minimalist PCB Design",
    description: "Designing a custom PCB to transition from prototypes to hardware."
  },
  {
    id: 5,
    title: "Mini Radar System Prototype",
    description: "Small-scale radar using sensors and signal processing for detection."
  },
  {
    id: 6,
    title: "Analog Filter Design & Simulation",
    description: "Analog filter modeling and validation using LTSpice."
  }
];

export const socialProjects = [
  {
    id: 101,
    title: "Gençlik İşle Yükseliyor — UNIDES",
    summary: "Government-supported youth employment project (50,000 TL funding) organizing workshops, summits and career events to connect young people with local decision makers.",
    description: "Government-supported youth employment project (50,000 TL funding) organizing workshops, summits and career events to connect young people with local decision makers.",
    image: null
  },
  {
    id: 102,
    title: "Entrepreneurship & Social Impact Events",
    summary: "Organization roles in multiple summits and social responsibility events including Fark Kadında and entrepreneurship summits.",
    description: "Organization roles in multiple summits and social responsibility events including Fark Kadında and entrepreneurship summits.",
    image: null
  }
];

export const technicalExperience = [
  {
    id: 1,
    role: "Boyahane & Enerji Takımı Intern",
    company: "Türk Traktör",
    duration: "30.06.2025 \u2013 28.07.2025",
    description: "Robotics panel operations, Debugging & reporting, SCADA processes, Process optimization."
  },
  {
    id: 2,
    role: "Engineering Intern",
    company: "T.C. Ministry of Industry and Technology",
    duration: "05.08.2024 \u2013 02.09.2024",
    description: "Meter calibration, Transformer inspection, Energy system testing."
  }
];

export const leadershipExperience = [
  {
    id: 101,
    role: "Editor",
    company: "Defence Turk",
    duration: "2024\u2013Present",
    description: ""
  },
  {
    id: 102,
    role: "Chairman",
    company: "Trakya University Entrepreneurship Club",
    duration: "2024\u20132025",
    description: ""
  },
  {
    id: 103,
    role: "Vice Chairman",
    company: "Trakya University Entrepreneurship Club",
    duration: "2023\u20132024",
    description: ""
  },
  {
    id: 104,
    role: "Board Member",
    company: "Trakya University Entrepreneurship Club",
    duration: "2022\u20132023",
    description: ""
  },
  {
    id: 105,
    role: "Instructor",
    company: "AIESEC",
    duration: "2024",
    description: ""
  },
  {
    id: 106,
    role: "Technical Support Team Leader",
    company: "Trakya Career Fair",
    duration: "2023",
    description: ""
  }
];

export const awardsData = [
  { text: "Special Jury Prize \u2014 Oxford Readers (2022)", description: "Academic achievement award." },
  { text: "Balkan Wushu Championship \u2014 2019", description: "International championship title." }
];

export const programsData = [
  {
    id: 1,
    program: "Yapay Zeka ve Teknoloji Akademisi",
    organization: "AI Fellow",
    year: "2026",
    description: ""
  },
  {
    id: 2,
    program: "1st Social Impact Workshop",
    organization: "Trakya University Representative",
    year: "",
    description: ""
  }
];

export const certificatesData = [
  { id: 1, name: "Drone Development & Coding", organization: "Mudanya University", year: "2024" },
  { id: 2, name: "Robotic Coding", organization: "Miuul", year: "2024" },
  { id: 3, name: "Arduino Instructor Training", organization: "Başkent University", year: "2023" },
  { id: 4, name: "Effective Communication Strategies", organization: "BTK Academy", year: "2023" },
  { id: 5, name: "Storytelling & Short Movie Workshop", organization: "Oxford Readers", year: "2022" },
  { id: 6, name: "IHA-1 Amateur Drone Pilot License", organization: "SHGM", year: "2021" },
  { id: 7, name: "Working in a Digital World", organization: "IBM", year: "2024" },
  { id: 8, name: "Leadership Development Experience", organization: "AIESEC", year: "2024" }
];

export const skillsData = [
  "Embedded Systems", "Signal Processing", "Machine Learning", "Radar & Sensing Technologies", "Python", "MATLAB", "Git & GitHub", "LTSpice", "Leadership"
];

export const educationData = [
  {
    degree: "Electrical & Electronics Engineering",
    university: "Trakya University",
    details: "30% English curriculum"
  }
];

export const contactData = {
  email: "akburakkursat54@gmail.com",
  linkedin: "https://www.linkedin.com/in/hkursat-akburak/",
  github: "https://github.com/hkursatakburak"
};

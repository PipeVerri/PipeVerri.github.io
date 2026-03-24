export const siteConfig = {
  name: "Felipe Verri",
  title: "ML & Software Engineering Student",
  description: "Portfolio website of Felipe Verri",
  accentColor: "#19a337",
  social: {
    email: "pipe.verri@gmail.com",
    linkedin: "https://linkedin.com/in/felipe-verri-82a126272",
    github: "https://github.com/PipeVerri",
  },
  aboutMe:
    "Self-taught developer, last year of high school, based in Mendoza, Argentina.\n" +
      "I've gone through web development, competitive programming (OIA, Codeforces), founded a small software venture, and now I'm deep into machine learning — with a growing curiosity for bioinformatics.\n" +
      "I like problems that make you think before they let you build.",
  skills: ["Python", "Typescript", "C++", "React Native", "Node.js"],
  projectGroups: [
    {
      name: "Sign Translation",
      projects: [
        {
          name: "LSA-X",
          description: "COCO-Format Pose Landmarks and Aligned Subtitles for Argentine Sign Language (LSA) Video Recognition",
          link: "https://github.com/PipeVerri/LSA-X",
          skills: ["Python", "OpenCV", "RTMLib"],
        },
        {
          name: "LSA Translator",
          description: "Deep learning pipeline for real-time Argentine Sign Language recognition and translation from video input.",
          link: "https://github.com/PipeVerri/LSA-translator",
          skills: ["Python", "PyTorch", "Transformers", "RNNs"]
        }
      ],
    },
    {
      name: "ML & Bioinformatics",
      projects: [
        {
          name: "Bioinformatics Portfolio",
          description: "A collection of bioinformatics experiments focused on genomics, sequence analysis, and algorithmic problems.",
          link: "https://github.com/PipeVerri/Bioinformatics-portfolio",
          skills: ["Python", "PyTorch"],
        },
      ],
    },
  ],
  experience: [
    {
      company: "Tech Company",
      title: "Senior Software Engineer",
      dateRange: "Jan 2022 - Present",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      company: "Startup Inc",
      title: "Full Stack Developer",
      dateRange: "Jun 2020 - Dec 2021",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
    {
      company: "Digital Agency",
      title: "Frontend Developer",
      dateRange: "Aug 2018 - May 2020",
      bullets: [
        "Developed responsive web applications for 20+ clients",
        "Improved site performance scores by 35% on average",
        "Introduced modern JavaScript frameworks to legacy codebases",
      ],
    },
  ],
  education: [
    {
      school: "University Name",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2014 - 2018",
      achievements: [
        "Graduated Magna Cum Laude with 3.8 GPA",
        "Dean's List all semesters",
        "President of Computer Science Club",
      ],
    },
    {
      school: "Online Platform",
      degree: "Full Stack Development Certificate",
      dateRange: "2019",
      achievements: [
        "Completed 500+ hours of coursework",
        "Built 10+ portfolio projects",
        "Specialized in React and Node.js",
      ],
    },
  ],
};

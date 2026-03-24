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
      "I've gone through web development, competitive programming (OIA, Codeforces), founded a small software venture, and now I'm into machine learning — with a growing curiosity for bioinformatics.\n" +
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
          skills: ["Python", "Biopython"],
          image: "/projects/gc-skew.png"
        },
        {
          name: "ML Portfolio",
          description: "A collection of experiments and projects focused on computer vision, dimensionality reduction, and unsupervised learning, using both standard frameworks and from-scratch implementations.",
          link: "https://github.com/PipeVerri/ML-portfolio",
          skills: ["Python", "PyTorch"],
          image: "/projects/loss-landscape.png"
        },
      ],
    },
  ],
  workTopics: [
    {
      name: "Cybersecurity",
      projects: [
        {
          name: "Example Sec Project",
          description: "A sample cybersecurity project demonstrating network scanning and vulnerability assessment.",
          link: "https://github.com/PipeVerri",
          skills: ["Python", "Nmap"],
        },
        {

        }
      ],
      courses: [
        {
          name: "Introduction to Ethical Hacking",
          description: "Comprehensive course covering penetration testing fundamentals, tools, and methodologies.",
          certificateLink: "https://example.com/cert",
        },
        {
          name: "Network Security Fundamentals",
          description: "Hands-on training in network protocols, firewalls, IDS/IPS, and traffic analysis.",
          certificateLink: "",
        },
      ],
    },
    {

    }
  ],
  education: [
    {
      school: "ETec(Escuela técnica de la universidad de Mendoza)",
      degree: "Technical Degree in IT & High School Diploma",
      dateRange: "2021 - 2026",
      achievements: [

      ],
    },
  ],
};

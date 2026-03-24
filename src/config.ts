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
          name: "Scanz",
          description: "ARP-based multithreaded network scanner designed for speed",
          link: "https://github.com/PipeVerri/Scanz",
          year: "2021"
        },
        {
          name: "TryHackMe",
          description: "Played around on TryHackMe and completed ~90 rooms.",
          link: "https://tryhackme.com/p/argenPipe",
          year: "2021"
        },
      ],
      courses: [
        {
          name: "CompTIA Pentest+ Learning Path - TryHackMe",
          description: "Hands-on penetration testing training covering tools, techniques, and methodologies to prepare for the CompTIA PenTest+ certification exam.",
          certificateLink: "https://drive.google.com/file/d/1rAQUVhFh0dd9NqRXY33ArZQNzA1L7tlg/view?usp=sharing",
        },
        {
          name: "Pre Security Learning Path - TryHackMe",
          description: "Beginner-friendly cybersecurity fundamentals covering networking, web, and Linux basics for aspiring security professionals.",
          certificateLink: "https://drive.google.com/file/d/18HpORgfOuWSS1YTPyKpDDIJtm4rSK62P/view?usp=drive_link"
        }
      ],
    },
    {
      name: "Competitive programming & Hackathons",
      projects: [
        {
          name: "Competed in Argentina's National Informatics Olympiad",
          description: "Trained on codeforces an leetcode, placed 2nd in the country at the jurisdictional stage.",
          detailedDescription: "Placed 2nd in the country at the olympiad's jurisdictional stage. At nationals, got tired from over-preparation and placed 7th.\nAlso reached a peak Codeforces rating of 1300 in about a month of active training before shifting focus to entrepreneurship.",
          link: "asdasdasdasd", // TODO
          year: "2024"
        },
        {
          name: "Participated in NASA's Space App Challenge",
          description: "Participated in NASA's global hackathon as part of a 5-person team. Built an educational game about terraforming using Godot.",
          link: "https://drive.google.com/file/d/1tT177CSXuWZZcQyjLQ6GzdmNLimNuLwe/view?usp=drive_link",
          year: "2023"
        }
      ]
    },
    {
      name: "Game development",
      projects: [
        {
          name: "A night in the forest",
          description: "My first \"big\" project, made using Godot. Spent more time on the art than on the code",
          link: "https://argenpipe.itch.io/a-nigth-in-the-forest",
          year: "2020"
        }
      ],
      courses: [
        {
          name: "Tekkie Uni Mobile Development",
          description: "Mobile game and app development using LiveCode",
          certificateLink: "https://drive.google.com/file/d/1kaXa8_5DHbcKz9zedkCBETTJMxNBgdTe/view?usp=sharing",
          year: "2019"
        }
      ]
    },
    {
      name: "Sign language translation",
      projects: [
        {
          name: "LSA-Translator",
          description: "Ongoing research project on Argentine Sign Language (LSA) recognition using deep learning. No results yet — but with experimental techniques in progress that I expect to work.",
          link: "https://github.com/PipeVerri/LSA-translator",
          year: "2025"
        },
        {
          name: "Sign-Pipeline",
          description: "Automated dataset generation pipeline for continuous sign language translation.-cle",
          link: "https://github.com/PipeVerri/Sign-pipeline",
          year: "2025"
        },
        {
          name: "LSA-X",
          description: "Argentine Sign Language dataset built using Sign-Pipeline over a curated set of videos, with additional processing scripts.",
          link: "https://github.com/PipeVerri/LSA-X",
          year: "2025"
        },
        {
          name: "KNN-SignTranslator",
          description: "Early exploration into static ASL sign recognition using MediaPipe landmarks and KNN. Purely experimental.",
          link: "https://github.com/PipeVerri/KNN-SignTranslator",
          year: "2022"
        },
      ],
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

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
      lists: {
        "Projects": {
          icon: "arrow",
          items: [
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
        },
        "Courses": {
          icon: "certificate",
          items: [
            {
              name: "CompTIA Pentest+ Learning Path - TryHackMe",
              description: "Hands-on penetration testing training covering tools, techniques, and methodologies to prepare for the CompTIA PenTest+ certification exam.",
              link: "https://drive.google.com/file/d/1rAQUVhFh0dd9NqRXY33ArZQNzA1L7tlg/view?usp=sharing",
            },
            {
              name: "Pre Security Learning Path - TryHackMe",
              description: "Beginner-friendly cybersecurity fundamentals covering networking, web, and Linux basics for aspiring security professionals.",
              link: "https://drive.google.com/file/d/18HpORgfOuWSS1YTPyKpDDIJtm4rSK62P/view?usp=drive_link"
            }
          ],
        },
      },
    },
    {
      name: "Uncategorized",
      lists: {
        "Projects": {
          icon: "arrow",
          items: [
            {
              name: "Nutritionista",
              year: "2025",
              description: "A diet app that scanned your pantry and generated personalized recipes and meal plans using nutrition algorithms and GPT.",
              detailedDescription: `
## The Problem
Dieting is hard because it requires constant decision-making. Nutritionista aimed to remove that friction by generating recipes tailored to what the user already had at home, their caloric target, and their preferences (filling vs light, sweet vs savory).

## How It Worked
Users built their pantry by scanning barcodes (via OpenFoodFacts, self-hosted, and FatSecret) or adding items manually. The app calculated maintenance calories using standard nutrition formulas, split them across meals, and used GPT to generate recipes that fit both the pantry and the plan.

## Traction
Built with React Native and shipped internationally on the Play Store. Reached users across Eastern Europe without any paid advertising, and had one paying customer.

## What I Learned
After running UX interviews at my gym, I realized I was targeting a market that barely exists. People either go free (MyFitnessPal, etc.) or go all-in with a coach — nobody wants the middle ground. I also noticed that even coaches struggle to retain dieting clients, which made retention-based monetization structurally hard regardless of product quality.

It was my first real product. I learned more from shutting it down than from building it.
  `,
            }
          ]
        },
        "Events": {
          icon: "certificate",
          items: [
            {
              name: "Competed in Argentina's National Informatics Olympiad",
              description: "Trained on codeforces an leetcode, placed 2nd in the country at the jurisdictional stage.",
              detailedDescription: "Placed 2nd in the country at the olympiad's jurisdictional stage. At nationals, got tired from over-preparation and placed 7th.\nAlso reached a peak Codeforces rating of 1300 in about a month of active training before shifting focus to entrepreneurship.",
              link: "asdasdasdasd", // TODO
              year: "2024"
            },
            {
              name: "Participated in NASA's Space App Challenge Hackathon",
              description: "Participated in NASA's global hackathon as part of a 5-person team. Built an educational game about terraforming using Godot.",
              link: "https://drive.google.com/file/d/1tT177CSXuWZZcQyjLQ6GzdmNLimNuLwe/view?usp=drive_link",
              year: "2023"
            }
          ],
        },
      },
    },
    {
      name: "Game development",
      lists: {
        "Projects": {
          icon: "arrow",
          items: [
            {
              name: "A night in the forest",
              description: "My first \"big\" project, made using Godot. Spent more time on the art than on the code",
              link: "https://argenpipe.itch.io/a-nigth-in-the-forest",
              year: "2020"
            }
          ],
        },
        "Courses": {
          icon: "certificate",
          items: [
            {
              name: "Tekkie Uni Mobile Development",
              description: "Mobile game and app development using LiveCode",
              link: "https://drive.google.com/file/d/1kaXa8_5DHbcKz9zedkCBETTJMxNBgdTe/view?usp=sharing",
              year: "2019"
            }
          ],
        },
      },
    },
    {
      name: "Sign language translation",
      lists: {
        "Projects": {
          icon: "arrow",
          items: [
            {
              name: "LSA-Translator",
              description: "Ongoing research project on Argentine Sign Language (LSA) recognition using deep learning. No results yet — but with experimental techniques in progress that I expect to work.",
              link: "https://github.com/PipeVerri/LSA-translator",
              year: "2025"
            },
            {
              name: "Sign-Pipeline",
              description: "Automated dataset generation pipeline for continuous sign language translation.",
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
        },
      },
    },
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

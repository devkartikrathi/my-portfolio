export const resumeData = {
    name: "Kartik Rathi",
    initials: "KR",
    location: "Delhi-110053, India",
    locationLink: "https://www.google.com/maps/place/Delhi",
    about:
        "Software Engineer with a passion for Artificial Intelligence and Machine Learning (AI/ML), experienced in developing intelligent systems, seeking full-time opportunities in SWE and AI/ML development roles.",
    summary:
        "Software Engineer with a passion for Artificial Intelligence and Machine Learning (AI/ML), experienced in developing intelligent systems, seeking full-time opportunities in SWE and AI/ML development roles.",
    avatarUrl: "", // Add if available
    personalWebsiteUrl: "https://kartik-rathi.site",
    contact: {
        email: "devkartikrathi@gmail.com",
        tel: "+91 8384007473",
        social: [
            {
                name: "LinkedIn",
                url: "https://linkedin.com/in/devkartikrathi",
                icon: "Linkedin",
            },
            {
                name: "GitHub",
                url: "https://github.com/devkartikrathi", // Assuming based on username
                icon: "Github",
            },
        ],
    },
    education: [
        {
            school: "K. R. Mangalam University",
            degree: "B.Tech in CSE, AI and ML",
            start: "2021",
            end: "2025",
            grade: "CGPA: 8.8",
            description: "Relevant Coursework: Machine Learning, Deep Learning, Data Structures and Algorithms, NLP, Operating Systems, Computer Networks",
        },
    ],
    work: [
        {
            company: "NeedCFO",
            href: "https://needcfo.com", // Assuming URL
            badges: [],
            location: "Gurugram, India",
            title: "Software Developer Intern",
            logoUrl: "",
            start: "Dec 2024",
            end: "Jun 2025",
            description:
                "Designed and implemented a prompt-driven personal finance system utilizing the Google Gemini LLM to allow natural language transaction inputs, reducing input time by over 70% for MSME. Developed an AI-powered transaction processing pipeline alongside OCR-based receipt scanning for a unified smart dashboard experience using Next.js, Prisma, and serverless functions.",
        },
        {
            company: "Centre for AI and Robotics @ IIT Mandi",
            href: "https://iitmandi.ac.in", // Assuming URL
            badges: [],
            location: "Himachal Pradesh, India",
            title: "Research Intern",
            logoUrl: "",
            start: "Jun 2024",
            end: "Jul 2024",
            description:
                "Developed a RAG based chatbot (ChatGITA) and improved the initial accuracy by 30%. Built a dataset of approximately 18,000 question-response pairs via web scraping. Fine-tuned LLAMA2-7B and Gemma-2B models on 18,000 conversations, achieving 85% user satisfaction.",
        },
        {
            company: "K.R. Mangalam University",
            href: "https://krmangalam.edu.in", // Assuming URL
            badges: [],
            location: "Gurugram, India",
            title: "Educator and Facilitator",
            logoUrl: "",
            start: "Nov 2024",
            end: "Jan 2025",
            description:
                "Conducted training for 125 participants in ML, Python, and Orange Data Mining. Achieved a participant rating of 90% as 'Excellent' in engagement and relevance for the program.",
        },
    ],
    skills: [
        "Python",
        "Java",
        "Golang",
        "Machine Learning",
        "Generative AI",
        "Docker",
        "Fast API",
        "SQL",
        "Orange Data Mining",
        "AWS",
        "Bedrock",
        "MongoDB",
        "Langchain",
        "nôn",
        "PowerBI",
        "GCP",
        "Kubernetes",
        "Scikit-Learn",
        "TensorFlow",
        "PyTorch",
        "Numpy",
        "Pandas",
    ],
    projects: [
        {
            title: "GuardianAI",
            techStack: ["Next.js", "Generative AI", "Neon DB"],
            description:
                "A platform to help users understand and analyze their trading patterns and mistakes. Created a summary-based system to reduce token usage and LLM costs. Added real-time data syncing through Zerodha and implemented alerts to guide traders.",
            link: {
                label: "GitHub",
                href: "#", // Add link if known
            },
        },
        {
            title: "AI Code Iterator",
            techStack: ["Generative AI", "WebContainers"],
            description:
                "A code generation platform that uses simple prompts to generate fully functional modern web apps and spin up a webcontainer. Enabled in-browser code generation and compilation using Webcontainers. Integrated accept/reject diff features inspired by V0.dev.",
            link: {
                label: "GitHub",
                href: "#", // Add link if known
            },
        },
    ],
    research: [
        {
            title: "Solar Panels Salvaging for Safety & Sustainability",
            publication: "Materials Today: Proceedings, 2022",
            description:
                "Explores solar panel recycling, mineral recovery, and the urgent need for a circular economy in renewable energy systems.",
            link: "#", // Add link if known
        },
        {
            title: "The Efficacy of Specialized Language Models in Advancing Educational Outcomes",
            publication: "IJMSRT, 2025",
            description:
                "Analyzes domain-specific LLMs for personalized, cost-efficient education at scale.",
            link: "#", // Add link if known
        },
    ],
    activities: [
        {
            title: "Founder of ByteCode",
            description:
                "An 800+ member coding community focused on collaborative learning. Organized tech events, workshops, and hackathons to enhance community engagement.",
        },
    ],
    certifications: [
        "Certificate of Accomplishment: Cloud Core",
        "Certificate of Accomplishment: Big Data 101",
        "Certificate of Accomplishment: Drone Boot camp",
    ],
} as const;

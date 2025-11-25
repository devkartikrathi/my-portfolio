export const resumeData = {
    name: "Kartik Rathi",
    initials: "KR",
    location: "Delhi-110053, India",
    locationLink: "https://www.google.com/maps/place/Delhi",
    summary:
        "with a passion for Generative AI and Agentic AI, experienced in developing intelligent systems",
    avatarUrl: "/profile.png",
    personalWebsiteUrl: "https://kartik-rathi.site",
    description: "Kartik Rathi's personal website",
    keywords: [
        "Kartik Rathi",
        "Software Engineer",
        "Generative AI",
        "Agentic AI",
        "Full Stack Developer",
        "Next.js",
        "React",
    ],
    roles: ["Software Engineer"],
    status: {
        isAvailable: true,
        text: "Available for work",
    },
    navItems: [
        { name: "Home", path: "/" },
        { name: "Experience", path: "#experience" },
        { name: "Projects", path: "#projects" },
        { name: "Contact", path: "#contact" },
    ],
    skills: [
        "Python",
        "GCP",
        "Docker",
        "Langchain",
        "Golang",
        "AWS",
        "n8n",
        "CrewAI",
    ],
    contact: {
        email: "devkartikrathi@gmail.com",
        tel: "+91 8384007473",
        text: "I'm currently looking for full-time opportunities. If you have any questions or just want to say hi, feel free to reach out!",
        social: [
            {
                name: "LinkedIn",
                url: "https://linkedin.com/in/devkartikrathi",
                icon: "Linkedin",
            },
            {
                name: "GitHub",
                url: "https://github.com/devkartikrathi",
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
            href: "https://needcfo.in",
            badges: [],
            location: "Gurugram, India",
            title: "Software Developer Intern",
            logoUrl: "",
            start: "Dec 2024",
            end: "Jun 2025",
            description: [
                "Engineered a prompt-driven finance system using Google Gemini LLM, cutting transaction input time by 70% for MSMEs.",
                "Built an AI-powered pipeline with OCR receipt scanning and a unified dashboard using Next.js, Prisma, and serverless functions.",
            ],
        },
        {
            company: "Centre for AI and Robotics @ IIT Mandi",
            href: "https://iitmandi.ac.in",
            badges: [],
            location: "Himachal Pradesh, India",
            title: "Research Intern",
            logoUrl: "",
            start: "Jun 2024",
            end: "Jul 2024",
            description: [
                "Developed 'ChatGITA', a RAG-based chatbot, boosting initial response accuracy by 30%.",
                "Curated a dataset of 18k+ Q&A pairs via web scraping to train domain-specific models.",
                "Fine-tuned LLAMA2-7B and Gemma-2B models, achieving an 85% user satisfaction rate.",
            ],
        },
        {
            company: "K.R. Mangalam University",
            href: "https://krmangalam.edu.in",
            badges: [],
            location: "Gurugram, India",
            title: "Educator and Facilitator",
            logoUrl: "",
            start: "Nov 2024",
            end: "Jan 2025",
            description: [
                "Led comprehensive training for 125+ participants in Machine Learning, Python, and Data Mining.",
                "Achieved a 90% 'Excellent' rating for program engagement and curriculum relevance.",
            ],
        },
    ],
    projects: [
        {
            title: "GuardianAI",
            techStack: ["Next.js", "Generative AI", "Neon DB"],
            description: [
                "Built a trading analysis platform to identify patterns and mitigate user mistakes.",
                "Optimized LLM costs by implementing a summary-based token reduction system.",
                "Integrated real-time Zerodha data syncing and automated trader guidance alerts.",
            ],
            link: {
                label: "GitHub",
                href: "#",
            },
        },
        {
            title: "AI Code Iterator",
            techStack: ["Generative AI", "WebContainers"],
            description: [
                "Developed a prompt-to-app platform generating fully functional web applications.",
                "Enabled instant in-browser code generation and compilation via WebContainers.",
                "Implemented V0.dev-inspired diff review features for seamless code iteration.",
            ],
            link: {
                label: "GitHub",
                href: "#",
            },
        },
    ],
    research: [
        {
            title: "Solar Panels Salvaging for Safety & Sustainability",
            publication: "Materials Today: Proceedings, 2022",
            description:
                "Explores solar panel recycling, mineral recovery, and the urgent need for a circular economy in renewable energy systems.",
            link: "#",
        },
        {
            title: "The Efficacy of Specialized Language Models in Advancing Educational Outcomes",
            publication: "IJMSRT, 2025",
            description:
                "Analyzes domain-specific LLMs for personalized, cost-efficient education at scale.",
            link: "#",
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

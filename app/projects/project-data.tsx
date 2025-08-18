export interface Project {
  title: string;
  year: number;
  description: string;
  liveUrl: string;
  githubUrl: string;
  techStack: string[];
  features: string[];
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Code Assist",
    year: 2024,
    description: "An AI-powered code assistance platform that helps developers write better code with intelligent suggestions and real-time collaboration features.",
    liveUrl: "https://code-assist.kartik-rathi.site/",
    githubUrl: "https://github.com/devkartikrathi/code-assist/",
    techStack: ["TypeScript", "React", "Next.js", "Tailwind CSS", "AI/ML"],
    features: [
      "AI-powered code suggestions",
      "Real-time collaboration",
      "Intelligent code analysis",
      "Modern UI/UX design"
    ]
  },
  {
    title: "Trade Report",
    year: 2024,
    description: "A comprehensive trading analytics platform that provides data-driven insights, performance tracking, and AI-powered analysis for traders.",
    liveUrl: "https://tradereport.kartik-rathi.site/",
    githubUrl: "https://github.com/devkartikrathi/tradereport",
    techStack: ["TypeScript", "Next.js 15", "Prisma", "PostgreSQL", "Google Gemini AI", "Tailwind CSS"],
    features: [
      "Multi-format file support (CSV, XLSX, XLS)",
      "AI-powered broker detection",
      "Performance analytics & charts",
      "Real-time data processing",
      "Responsive mobile design"
    ]
  }
];

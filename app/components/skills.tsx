"use client";

import { useState, useEffect } from "react";
import { Section } from "@/app/components/ui/section";
import StackIcon from "tech-stack-icons";

const iconMapping: { [key: string]: string } = {
  Python: "python",
  Golang: "go",
  Docker: "docker",
  SQL: "mysql",
  AWS: "aws",
  GCP: "gcloud",
  CrewAI: "crewai",
  Langchain: "langchain",
  Postgres: "postgresql",
  n8n: "n8n",
};

const categories = [
  {
    name: "Programming Languages",
    skills: ["Python", "Golang"],
  },
  {
    name: "Databases",
    skills: ["SQL", "Postgres"],
  },
  {
    name: "Cloud & Docker",
    skills: ["Docker", "AWS", "GCP"],
  },
  {
    name: "AI & Frameworks",
    skills: ["CrewAI", "Langchain", "n8n"],
  },
];

// Flatten all skills into a single array
const allSkills = categories.flatMap((category) => category.skills);

export function Skills() {
  const [highlightedSkill, setHighlightedSkill] = useState<string | null>(null);

  useEffect(() => {
    // Randomly highlight a skill every 1 second (Diwali-style)
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * allSkills.length);
      setHighlightedSkill(allSkills[randomIndex]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Section id="skills">
      <h2 className="text-xl font-bold mb-8">Skills</h2>
      <div className="flex flex-col gap-8">
        {categories.map((category) => (
          <div key={category.name} className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-4">
              {category.skills.map((skill) => {
                const iconName = iconMapping[skill];
                const isHighlighted = skill === highlightedSkill;

                return (
                  <div
                    key={skill}
                    className={`flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium hover:bg-muted/50 transition-colors ${
                      isHighlighted ? "bg-muted/50" : ""
                    }`}
                  >
                    {iconName ? (
                      <div className="w-6 h-6 relative">
                        <StackIcon name={iconName} />
                      </div>
                    ) : (
                      <span className="text-xs">🔹</span>
                    )}
                    <span>{skill}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

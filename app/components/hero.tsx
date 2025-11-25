"use client";

import { resumeData } from "@/app/data/resume";
import { Section } from "@/app/components/ui/section";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import StackIcon from "tech-stack-icons";

// Map skill names to icon names supported by tech-stack-icons
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

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Hero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Section className="flex min-h-screen flex-col items-center justify-start pt-32 gap-8 max-w-2xl mx-auto">
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
          <div className="relative flex-shrink-0">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full p-[3px] border-2 border-muted-foreground/20">
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-background">
                <Image
                  src={resumeData.avatarUrl}
                  alt={resumeData.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-center md:text-left items-center md:items-start">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl flex items-center gap-2">
              Hey, I'm {resumeData.name} 
              <motion.span
                className="inline-block cursor-default origin-bottom-right"
                whileHover={{ rotate: [0, 20, -10, 20, -10, 10, 0] }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                👋
              </motion.span>
            </h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              {resumeData.status.text}
            </div>
            <p className="max-w-[600px] text-muted-foreground md:text-lg/relaxed">
              <span className="text-orange-500 font-semibold">{resumeData.roles[0]}</span>{" "}
              {resumeData.summary}
            </p>
            <div className="flex gap-4 mt-1">
              {resumeData.contact.social.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {social.icon === "Github" && <Github className="h-5 w-5" />}
                  {social.icon === "Linkedin" && <Linkedin className="h-5 w-5" />}
                </Link>
              ))}
              <Link
                href={`mailto:${resumeData.contact.email}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3 mt-4">
          {resumeData.skills.map((skill) => {
            const iconName = iconMapping[skill];
            if (!iconName) return null;
            return (
              <div
                key={skill}
                className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl border border-muted/10 bg-card/5 hover:bg-card/10 transition-colors"
              >
                <div className="w-6 h-6 relative flex-shrink-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all">
                  {mounted && (
                    <StackIcon 
                      name={iconName} 
                      variant={resolvedTheme === "dark" ? "dark" : "light"} 
                    />
                  )}
                </div>
                <span className="text-[10px] font-medium text-muted-foreground/60">{skill}</span>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

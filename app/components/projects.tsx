"use client";

import { resumeData } from "@/app/data/resume";
import { Section } from "@/app/components/ui/section";
import { Github } from "lucide-react";
import Link from "next/link";

export function Projects() {
  return (
    <Section id="projects">
      <h2 className="text-xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {resumeData.projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col gap-4 rounded-lg border p-6 hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">{project.title}</h3>
              {project.link && (
                <Link
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Github className="h-5 w-5" />
                </Link>
              )}
            </div>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              {project.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

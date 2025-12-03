"use client";

import { resumeData } from "@/app/data/resume";
import { Section } from "@/app/components/ui/section";
import { BentoGrid, BentoGridItem } from "@/app/components/ui/bento-grid";
import { Github } from "lucide-react";
import Link from "next/link";

export function Projects() {
  return (
    <Section id="projects">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-left">Projects</h2>
      <BentoGrid className="max-w-4xl mx-auto">
        {resumeData.projects.map((project, i) => (
          <BentoGridItem
            key={i}
            title={project.title}
            description={
              <div className="flex flex-col gap-2">
                <ul className="list-disc list-inside text-xs text-muted-foreground">
                  {project.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1 mt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            }
            icon={
              project.link ? (
                <Link
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Github className="h-4 w-4" />
                </Link>
              ) : null
            }
          />
        ))}
      </BentoGrid>
    </Section>
  );
}

"use client";

import { resumeData } from "@/app/data/resume";
import { Section } from "@/app/components/ui/section";

export function Skills() {
  return (
    <Section id="skills">
      <h2 className="text-xl font-bold mb-8">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {resumeData.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md bg-foreground text-background px-3 py-1 text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </Section>
  );
}

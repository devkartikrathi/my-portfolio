"use client";

import { resumeData } from "@/app/data/resume";
import { Section } from "@/app/components/ui/section";

export function Experience() {
  return (
    <Section id="experience">
      <h2 className="text-xl font-bold mb-8">Work Experience</h2>
      <div className="flex flex-col gap-8">
        {resumeData.work.map((role) => (
          <div key={role.company} className="flex flex-col gap-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <h3 className="font-semibold text-lg">{role.company}</h3>
              <span className="text-sm text-muted-foreground">
                {role.start} - {role.end}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <p className="text-sm font-medium">{role.title}</p>
              <span className="text-sm text-muted-foreground">
                {role.location}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              {role.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

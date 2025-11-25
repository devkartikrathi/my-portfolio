"use client";

import { resumeData } from "@/app/data/resume";
import { Section } from "@/app/components/ui/section";

export function Experience() {
  return (
    <Section id="experience" className="relative">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <h2 className="text-xl font-bold mb-8">Work Experience</h2>
      <div className="flex flex-col gap-8">
        {resumeData.work.map((role) => (
          <div key={role.company} className="flex flex-col gap-2 p-4 -mx-4 rounded-lg transition-colors hover:bg-accent/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-0">
              <h3 className="font-semibold text-lg">{role.company}</h3>
              <span className="text-sm text-muted-foreground">
                {role.start} - {role.end}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-0">
              <p className="text-sm font-medium">{role.title}</p>
              <span className="text-sm text-muted-foreground">
                {role.location}
              </span>
            </div>
            <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
              {role.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

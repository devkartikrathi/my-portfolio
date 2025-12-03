"use client";

import { resumeData } from "@/app/data/resume";
import { Section } from "@/app/components/ui/section";
import { Timeline } from "@/app/components/ui/timeline";

export function Experience() {
  const timelineData = resumeData.work.map((role) => ({
    title: `${role.start} - ${role.end}`,
    content: (
      <div className="flex flex-col gap-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-0">
          <h3 className="font-semibold text-lg text-foreground">{role.company}</h3>
          <span className="text-sm text-muted-foreground">
            {role.location}
          </span>
        </div>
        <p className="text-sm font-medium text-muted-foreground">{role.title}</p>
        <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
          {role.description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
    ),
  }));

  return (
    <Section id="experience" className="relative">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4 text-left">Work Experience</h2>
      <p className="text-muted-foreground text-sm md:text-base max-w-sm mb-8 text-left">
        My professional journey and the companies I've had the privilege to work with.
      </p>
      <div className="w-full">
        <Timeline data={timelineData} />
      </div>
    </Section>
  );
}

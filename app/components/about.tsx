"use client";

import { resumeData } from "@/app/data/resume";
import { Section } from "@/app/components/ui/section";

export function About() {
  return (
    <Section id="about">
      <h2 className="text-xl font-bold mb-8">About</h2>
      <div className="prose dark:prose-invert max-w-full text-muted-foreground">
        <p>{resumeData.about}</p>
      </div>
    </Section>
  );
}

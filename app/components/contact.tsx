"use client";

import { resumeData } from "@/app/data/resume";
import { Section } from "@/app/components/ui/section";
import { BackgroundBeams } from "@/app/components/ui/background-beams";
import { Mail, Linkedin, Github } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <Section id="contact" className="mb-16 relative w-full rounded-md bg-background antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h2 className="relative z-10 text-3xl font-bold tracking-tighter sm:text-4xl text-foreground text-center font-sans">
          Get in Touch
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          {resumeData.contact.text}
        </p>
        <div className="flex justify-center gap-4 mt-4 relative z-10">
          <Link
            href={`mailto:${resumeData.contact.email}`}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span>{resumeData.contact.email}</span>
          </Link>
        </div>
        <div className="flex justify-center flex-wrap gap-4 mt-4 relative z-10">
          {resumeData.contact.social.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {social.icon === "Github" && <Github className="h-5 w-5" />}
              {social.icon === "Linkedin" && <Linkedin className="h-5 w-5" />}
              <span>{social.name}</span>
            </Link>
          ))}
        </div>
      </div>
      <BackgroundBeams />
    </Section>
  );
}

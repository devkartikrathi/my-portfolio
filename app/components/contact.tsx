"use client";

import { resumeData } from "@/app/data/resume";
import { Section } from "@/app/components/ui/section";
import { Mail, Linkedin, Github } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <Section id="contact" className="mb-16">
      <h2 className="text-xl font-bold mb-8">Get in Touch</h2>
      <div className="flex flex-col gap-4">
        <p className="text-muted-foreground">
          {resumeData.contact.text}
        </p>
        <div className="flex gap-4 mt-4">
          <Link
            href={`mailto:${resumeData.contact.email}`}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span>{resumeData.contact.email}</span>
          </Link>
        </div>
        <div className="flex flex-wrap gap-4">
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
    </Section>
  );
}

"use client";

import { resumeData } from "@/app/data/resume";
import { Section } from "@/app/components/ui/section";
import { Button } from "@/app/components/ui/button"; // We might need to create this or use standard HTML button styled
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <Section className="flex min-h-screen flex-col-reverse md:flex-row items-center justify-between pt-24 gap-8">
      <div className="flex flex-col gap-4 flex-1">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          {resumeData.name}
        </h1>
        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          {resumeData.summary}
        </p>
        <div className="mt-8 flex gap-4">
          {resumeData.contact.social.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {social.icon === "Github" && <Github className="h-6 w-6" />}
              {social.icon === "Linkedin" && <Linkedin className="h-6 w-6" />}
            </Link>
          ))}
          <Link
            href={`mailto:${resumeData.contact.email}`}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="h-6 w-6" />
          </Link>
        </div>
      </div>
      <div className="relative w-40 h-40 md:w-64 md:h-64 flex-shrink-0">
        <Image
          src="/profile.png"
          alt={resumeData.name}
          fill
          className="rounded-full object-cover border-2 border-muted"
          priority
        />
      </div>
    </Section>
  );
}

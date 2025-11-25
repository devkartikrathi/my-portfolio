"use client";

import { resumeData } from "@/app/data/resume";

export function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-muted-foreground">
      <p>
        &copy; {new Date().getFullYear()} {resumeData.name}. All rights reserved.
      </p>
    </footer>
  );
}

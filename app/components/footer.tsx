"use client";

export function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-muted-foreground">
      <p>
        &copy; {new Date().getFullYear()} Kartik Rathi. All rights reserved.
      </p>
    </footer>
  );
}

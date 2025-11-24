import "./global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/app/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Kartik Rathi | Portfolio",
  description: "Software Engineer specializing in AI/ML and Full Stack Development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("scroll-smooth", inter.variable)}>
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased",
          inter.className
        )}
      >
        {children}
      </body>
    </html>
  );
}

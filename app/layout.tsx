import "./global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/app/lib/utils";
import { ThemeProvider } from "@/app/components/theme-switch";
import Particles from "@/app/components/particles";

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
    <html lang="en" className={cn("scroll-smooth", inter.variable)} suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased",
          inter.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Particles
            className="absolute inset-0 -z-10 animate-fade-in"
            quantity={100}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

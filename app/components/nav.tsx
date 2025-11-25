"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/app/lib/utils";
import { motion } from "framer-motion";
import { ThemeSwitch } from "@/app/components/theme-switch";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "#about" },
  { name: "Experience", path: "#experience" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4"
    >
      <div className="flex items-center gap-1 rounded-full border bg-background/80 px-4 py-2 backdrop-blur-md shadow-sm">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={cn(
              "relative px-3 py-1.5 text-sm font-medium transition-colors hover:text-foreground/80",
              pathname === item.path ? "text-foreground" : "text-foreground/60"
            )}
          >
            {item.name}
          </Link>
        ))}
        <div className="pl-2 ml-2 border-l">
          <ThemeSwitch />
        </div>
      </div>
    </motion.nav>
  );
}

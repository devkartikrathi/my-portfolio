"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/app/lib/utils";

interface SectionProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode;
  delay?: number;
}

export function Section({
  children,
  className,
  delay = 0,
  ...props
}: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn("py-12 md:py-16 lg:py-24", className)}
      {...props}
    >
      {children}
    </motion.section>
  );
}

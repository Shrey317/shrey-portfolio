"use client";
import { useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";
// Small motion hooks keep the full animation renderer out of the initial bundle.
// Content is always visible, including before hydration and without JavaScript.
export default function AnimatedSection({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const reduceMotion = useReducedMotion();
  return <div ref={ref} className={`${className}${inView && reduceMotion === false ? " section-reveal" : ""}`} style={{ animationDelay: `${delay}s` }}>{children}</div>;
}

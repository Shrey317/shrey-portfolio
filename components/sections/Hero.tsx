"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, Mail, Github, Linkedin, Briefcase } from "lucide-react";
import { hero, siteConfig } from "@/lib/data";
import { hasSocialLink } from "@/lib/utils";

const TERMINAL_TEXT = hero.terminalText;

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const [displayText, setDisplayText] = useState("");
  const [cursorOn, setCursorOn] = useState(true);
  const [typingDone, setTypingDone] = useState(false);

  // Store the interval in a ref so cleanup always has access to it,
  // even when the component unmounts mid-animation (fixes the memory leak).
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayText(TERMINAL_TEXT);
      setTypingDone(true);
      return;
    }

    let i = 0;
    const startDelay = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        i++;
        setDisplayText(TERMINAL_TEXT.slice(0, i));
        if (i >= TERMINAL_TEXT.length) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setTypingDone(true);
        }
      }, 70);
    }, 600);

    // Cleanup: cancels both the initial delay AND the running interval
    return () => {
      clearTimeout(startDelay);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [prefersReducedMotion]);

  // Cursor blink
  useEffect(() => {
    const blink = setInterval(() => setCursorOn((v) => !v), 530);
    return () => clearInterval(blink);
  }, []);

  const fadeUp = (delay: number) => ({
    initial: prefersReducedMotion ? {} : { opacity: 0, y: 28 },
    animate: typingDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
    transition: { duration: 0.65, ease: "easeOut", delay },
  });

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      aria-label="Hero"
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,58,237,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-7">

        {/* ── "Open to work" availability badge ───────────────────── */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/8 text-violet-300 text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
            </span>
            <Briefcase size={12} />
            {hero.availabilityText}
          </div>
        </motion.div>

        {/* Terminal line */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <code className="inline-flex items-center gap-1 font-mono text-sm sm:text-base px-4 py-2 rounded-lg bg-[#111] border border-white/8 text-violet-400">
            {displayText}
            <span
              aria-hidden="true"
              className="inline-block w-[2px] h-[1em] align-middle bg-violet-400"
              style={{ opacity: cursorOn ? 1 : 0, transition: "opacity 0.08s" }}
            />
          </code>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0)}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#f5f5f5] leading-none"
        >
          {hero.headline}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.1)}
          className="text-xl sm:text-2xl font-semibold text-violet-400 tracking-tight"
        >
          {hero.subtitle}
        </motion.p>

        {/* Tagline */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-base sm:text-lg text-[#888] max-w-2xl leading-relaxed"
        >
          {hero.tagline}
        </motion.p>

        {/* CTA row */}
        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/resume.pdf"
            download="Shrey_Patel_Resume.pdf"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg
              border border-violet-500 text-violet-400 font-medium
              hover:bg-violet-500/10 transition-colors"
          >
            ↓ Download Resume
          </a>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg
              bg-violet-600 hover:bg-violet-700 text-white font-medium transition-colors"
          >
            Get In Touch →
          </Link>
        </motion.div>

        {/* Social icons */}
        <motion.div {...fadeUp(0.4)} className="flex items-center gap-6">
          {hasSocialLink(siteConfig.links.github) && (
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-[#888] hover:text-violet-400 transition-colors"
            >
              <Github size={22} />
            </a>
          )}
          {hasSocialLink(siteConfig.links.linkedin) && (
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-[#888] hover:text-violet-400 transition-colors"
            >
              <Linkedin size={22} />
            </a>
          )}
          <a
            href={`mailto:${siteConfig.links.email}`}
            aria-label="Send email"
            className="text-[#888] hover:text-violet-400 transition-colors"
          >
            <Mail size={22} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        aria-hidden="true"
        animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#555]"
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}

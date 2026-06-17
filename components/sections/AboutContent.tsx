"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Award, Download, GraduationCap, Calendar } from "lucide-react";
// FIX: removed unused `education` import — education is now rendered here
import { siteConfig, aboutStats, certifications, education } from "@/lib/data";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Image from 'next/image';

export default function AboutContent() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="max-w-6xl mx-auto px-6 pb-28">

      {/* ── Page title ──────────────────────────────────────────────── */}
      <AnimatedSection>
        <SectionHeader label="About" accent="Me" align="left" />
      </AnimatedSection>

      {/* ── Bio + avatar ─────────────────────────────────────────────── */}
      <div className="grid lg:grid-cols-3 gap-12 mb-20">
        {/* Avatar column */}
        <AnimatedSection direction="left" className="flex flex-col items-center lg:items-start gap-6">
          {/* Gradient avatar with initials */}
      {/* Optimized Next.js Image */}
      <div className="relative w-40 h-40 rounded-2xl overflow-hidden">
        <Image
          src="/portfolio-img.jpeg" // Replace with your exact filename
          alt="Shrey Patel"
          fill
          className="object-cover"
          priority // Optional: Loads the image quickly since it's above the fold
        />
      </div>

          <a
            href="/resume.pdf"
            download="Shrey_Patel_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
              border border-violet-500 text-violet-400 font-medium text-sm
              hover:bg-violet-500/10 transition-colors"
          >
            <Download size={16} />
            Download Resume
          </a>
        </AnimatedSection>

        {/* Bio text column */}
        <AnimatedSection delay={0.1} className="lg:col-span-2 space-y-5">
          <h2 className="text-2xl font-bold text-[#f5f5f5]">
            Hi, I&apos;m {siteConfig.name} 👋
          </h2>
          <p className="text-[#888] leading-relaxed">
            I&apos;m a Software Engineering student completing a BSc (Hons) in Information Technology, 
            with a strong focus on web development and JavaScript. My core stack includes HTML, CSS, JavaScript, 
            React, Node.js, Express.js, and REST APIs, and I enjoy building responsive, user-friendly web applications 
            from start to finish.
          </p>
          <p className="text-[#888] leading-relaxed">
            I care about writing clean, maintainable code and creating interfaces 
            that feel simple, polished, and intuitive. I&apos;m especially interested in 
            full-stack development, where I can work across both frontend and backend to 
            turn ideas into practical, scalable solutions. I&apos;m currently looking for junior 
            web development opportunities where I can contribute, learn, and grow.
          </p>
          <p className="text-[#888] leading-relaxed">
            Outside of coding I enjoy exploring new frameworks, contributing to discussions
            around AI ethics, and staying up to date with the rapidly evolving JavaScript ecosystem.
          </p>
        </AnimatedSection>
      </div>

      {/* ── Stats strip ──────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20">
        {aboutStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            viewport={{ once: true }}
            className="rounded-xl border border-white/8 bg-[#111] p-6 text-center"
          >
            <p className="text-3xl font-extrabold text-violet-400 mb-1">{stat.value}</p>
            <p className="text-xs text-[#666] font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* ── Education ───────────────────────────────────────────────── */}
      <AnimatedSection className="mb-10">
        <h3 className="text-xl font-bold text-[#f5f5f5] mb-6">Education</h3>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 gap-4 mb-20">
        {education.map((edu, i) => (
          <motion.div
            key={edu.institution}
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="flex items-start gap-4 rounded-xl border border-white/8 bg-[#111] p-5"
          >
            <div className="shrink-0 w-9 h-9 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
              <GraduationCap size={18} className="text-violet-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#f5f5f5] leading-snug">{edu.degree}</p>
              <p className="text-xs text-violet-400 mt-1">{edu.institution}</p>
              <div className="flex items-center gap-2 mt-2 text-xs text-[#666]">
                <Calendar size={11} />
                <span>{edu.startDate} – {edu.endDate}</span>
                {edu.gpa && <span>· {edu.gpa}</span>}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Certifications ───────────────────────────────────────────── */}
      <AnimatedSection className="mb-6">
        <h3 className="text-xl font-bold text-[#f5f5f5]">Certifications & Achievements</h3>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 gap-4">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            viewport={{ once: true }}
            className="flex items-start gap-4 rounded-xl border border-white/8 bg-[#111] p-5"
          >
            <div className="shrink-0 w-9 h-9 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
              <Award size={18} className="text-violet-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#f5f5f5] leading-snug">{cert.title}</p>
              <p className="text-xs text-violet-400 mt-1">{cert.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

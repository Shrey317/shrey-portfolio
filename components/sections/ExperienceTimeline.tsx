"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { experience } from "@/lib/data";
import TechTag from "@/components/shared/TechTag";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function ExperienceTimeline() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="experience" className="py-28 max-w-6xl mx-auto px-6">
      <AnimatedSection>
        <SectionHeader
          label="Work"
          accent="Experience"
          // description="Where I've applied my skills in real-world product environments."
        />
      </AnimatedSection>

      <div className="relative">
        {/* Vertical accent line — hidden on mobile */}
        <div
          className="absolute left-[17px] top-2 bottom-2 w-px hidden sm:block"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to bottom, #7c3aed 0%, rgba(124,58,237,0.4) 60%, transparent 100%)",
          }}
        />

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.article
              key={`${exp.company}-${exp.startDate}`}
              initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true, margin: "-40px" }}
              className="relative sm:pl-14"
            >
              {/* Timeline dot */}
              <div
                className="absolute left-0 top-5 w-[34px] h-[34px] rounded-full
                  bg-violet-500/15 border border-violet-500 hidden sm:flex
                  items-center justify-center"
                aria-hidden="true"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-violet-500" />
              </div>

              {/* Card */}
              <div className="rounded-xl border border-white/8 bg-[#111] p-6 space-y-4">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-[#f5f5f5] leading-snug">
                      {exp.role}
                    </h3>
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-violet-400 font-medium text-sm hover:underline"
                      >
                        {exp.company}
                      </a>
                    ) : (
                      <p className="text-violet-400 font-medium text-sm">
                        {exp.company}
                      </p>
                    )}
                  </div>

                  {/* Dates + location pills */}
                  <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0 text-xs text-[#666]">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/8">
                      <Calendar size={12} />
                      {exp.startDate} — {exp.endDate}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/8">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[#888] leading-relaxed">
                  {exp.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <TechTag key={t}>{t}</TechTag>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

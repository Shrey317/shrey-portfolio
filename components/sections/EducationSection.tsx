"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { education } from "@/lib/data";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function EducationSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="education" className="py-28 bg-[#0b0b0b]">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <SectionHeader
            label="My"
            accent="Education"
            // description="Academic foundations behind the code."
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.article
              key={edu.institution}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.12 }}
              viewport={{ once: true }}
              className="rounded-xl border border-white/8 bg-[#111] p-6"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="shrink-0 w-11 h-11 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                  <GraduationCap size={22} className="text-violet-400" />
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <h3 className="font-semibold text-[#f5f5f5] text-sm sm:text-base leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="text-violet-400 text-sm font-medium mt-1">
                    {edu.institution}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 mt-2.5 text-xs text-[#666]">
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={11} />
                      {edu.startDate} – {edu.endDate}
                    </span>
                    {edu.gpa && (
                      <span className="inline-flex items-center gap-1">
                        <Award size={11} />
                        {edu.gpa}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

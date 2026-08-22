"use client";

import { motion, useReducedMotion } from "motion/react";

import { education, experience, site } from "@/lib/content";

export function About() {
  const reduce = useReducedMotion();

  return (
    <section className="mx-auto max-w-[1080px] px-6 pb-24">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-[11px] tracking-[0.22em] text-[#a1a1a1] uppercase">About</p>
        <h2 className="font-heading mt-2 max-w-2xl text-4xl">How I work</h2>
        <p className="mt-6 max-w-3xl text-base leading-8 text-[#a1a1a1]">{site.aboutExtra}</p>
      </motion.div>
      <div className="mt-12">
        {experience.map((job) => (
          <motion.article
            key={job.company}
            className="border-t border-white/10 py-8"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
              <p className="font-medium">
                {job.role}, {job.company}
              </p>
              <p className="text-sm text-[#a1a1a1]">{job.period}</p>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[#a1a1a1]">{job.summary}</p>
          </motion.article>
        ))}
        <p className="border-t border-white/10 pt-8 text-sm text-[#a1a1a1]">
          {education.degree} · {education.school} · {education.detail} · {education.period}
        </p>
      </div>
    </section>
  );
}

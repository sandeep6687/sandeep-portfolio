"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { GraduationCap } from "lucide-react";

import { education, experience, site } from "@/lib/content";

export function About() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="scroll-mt-24 mx-auto max-w-[1080px] px-6 py-20">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-[11px] tracking-[0.22em] text-[#a1a1a1] uppercase">
          Track Record
        </p>
        <h2 className="font-heading mt-2 max-w-2xl text-4xl sm:text-5xl">
          Experience & Delivery
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[#a1a1a1]">
          {site.aboutExtra}
        </p>
      </motion.div>

      {/* Profile Bio Card with Portrait */}
      <motion.div
        className="mt-8 flex flex-col sm:flex-row items-center gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <div className="relative size-24 sm:size-28 shrink-0 overflow-hidden rounded-2xl border border-white/20 shadow-xl">
          <Image
            src="/sandeep.jpg"
            alt={site.name}
            fill
            className="object-cover object-top"
            sizes="112px"
          />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <h3 className="text-xl font-semibold text-white">{site.name}</h3>
            <span className="rounded-full border border-sky-400/30 bg-sky-500/10 px-2.5 py-0.5 text-[11px] font-mono text-sky-300">
              Zenoti · Software Engineer
            </span>
          </div>
          <p className="mt-1 text-xs text-white/60 font-mono">{site.role}</p>
          <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#c8c8c8]">
            {site.pitch}
          </p>
        </div>
      </motion.div>

      <div className="mt-12 space-y-12">
        {experience.map((job) => (
          <motion.article
            key={job.company}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 transition-colors hover:border-white/20"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {job.role}
                </h3>
                <p className="text-sm font-medium text-emerald-400">
                  {job.company}
                </p>
              </div>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-mono text-[#a1a1a1]">
                {job.period}
              </span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[#c8c8c8]">
              {job.summary}
            </p>

            {job.highlights && job.highlights.length > 0 ? (
              <div className="mt-6">
                <h4 className="text-xs font-semibold tracking-wider text-[#a1a1a1] uppercase">
                  Key Engineering Contributions
                </h4>
                <ul className="mt-3 grid gap-3 sm:grid-cols-1">
                  {job.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-[#a1a1a1]"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-emerald-400/80" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </motion.article>
        ))}

        {/* Education Credential Card */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.01] p-6"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-start gap-3">
            <div className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/70">
              <GraduationCap className="size-5" />
            </div>
            <div>
              <p className="font-medium text-white">{education.degree}</p>
              <p className="text-sm text-[#a1a1a1]">{education.school}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-300">
              {education.detail}
            </span>
            <span className="text-xs text-[#a1a1a1]">{education.period}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


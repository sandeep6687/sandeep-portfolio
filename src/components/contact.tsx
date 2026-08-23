"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { site } from "@/lib/content";

export function Contact() {
  const reduce = useReducedMotion();

  return (
    <motion.section
      id="contact"
      className="scroll-mt-24 mx-auto max-w-[1080px] px-6 pb-28"
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="text-[11px] tracking-[0.22em] text-[#a1a1a1] uppercase">Contact</p>
      <h2 className="font-heading mt-2 text-4xl sm:text-5xl">Let’s talk</h2>
      <p className="mt-4 max-w-xl text-base leading-8 text-[#a1a1a1]">
        {site.lookingFor} I usually reply within a day.
      </p>
      <a
        href={site.mailHref}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-8 inline-flex items-center gap-2 text-[15px] font-medium"
      >
        {site.email}
        <ArrowUpRight className="size-4 text-white/40 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
      </a>
      <p className="mt-2 text-sm text-[#a1a1a1]">{site.phone}</p>
    </motion.section>
  );
}

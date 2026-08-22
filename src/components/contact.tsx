"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { Tilt3D } from "@/components/motion/tilt-3d";
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
      <div style={{ perspective: "700px" }} className="mt-8 w-fit">
        <Tilt3D
          href={`mailto:${site.email}`}
          intensity={12}
          className="inline-flex items-center gap-2 text-[15px] font-medium"
        >
          <span className="relative">{site.email}</span>
          <ArrowUpRight className="relative size-4 text-white/40" />
        </Tilt3D>
      </div>
      <p className="mt-2 text-sm text-[#a1a1a1]">{site.phone}</p>
    </motion.section>
  );
}

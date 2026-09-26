"use client";

import { motion, useReducedMotion } from "motion/react";
import { whyWorkWithMe } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

export function WhyWorkWithMe() {
  const reduce = useReducedMotion();

  return (
    <section id="why-me" className="scroll-mt-24 mx-auto max-w-[1080px] px-6 py-20">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <p className="text-[11px] tracking-[0.22em] text-[#a1a1a1] uppercase">
          Engineering Standard
        </p>
        <h2 className="font-heading mt-2 text-3xl sm:text-5xl font-semibold tracking-tight text-white">
          Why work with me.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-[#a1a1a1]">
          Systems built with mathematical precision, clean contracts, honest error-handling, and zero fluff.
        </p>
      </motion.div>

      <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
        {whyWorkWithMe.map((item, index) => (
          <motion.div
            key={item.number}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: EASE }}
            className="group flex flex-col sm:flex-row sm:items-start justify-between gap-6 py-8 transition-colors hover:bg-white/[0.015]"
          >
            <div className="flex items-start gap-4">
              <span className="font-mono text-xs text-sky-400 font-semibold tracking-wider">
                {item.number}
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-sky-200 transition-colors">
                {item.title}
              </h3>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#a1a1a1] sm:text-right">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { motion, useReducedMotion } from "motion/react";
import { Quote } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Testimonials() {
  const reduce = useReducedMotion();

  return (
    <section className="scroll-mt-24 mx-auto max-w-[1080px] px-6 py-16">
      <motion.div
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.005] p-8 sm:p-12 backdrop-blur-sm"
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <Quote className="size-8 text-sky-400/40" />

        <blockquote className="mt-6 text-xl sm:text-2xl font-light leading-relaxed text-white/90">
          “In distributed systems and agentic workflows, reliability isn’t an afterthought — it’s the architecture. When every API contract is clean and telemetry is transparent, software operates with calm predictability.”
        </blockquote>

        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
          <div>
            <p className="text-sm font-semibold text-white">Engineering Philosophy</p>
            <p className="text-xs text-white/50">Production-first distributed systems & deterministic agent loops</p>
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-sky-300">
            Zenoti SaaS Standard
          </span>
        </div>
      </motion.div>
    </section>
  );
}

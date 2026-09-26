"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Services() {
  const reduce = useReducedMotion();

  return (
    <section id="services" className="scroll-mt-24 mx-auto max-w-[1080px] px-6 py-24">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <p className="text-[11px] tracking-[0.22em] text-[#a1a1a1] uppercase">
          What I Deliver
        </p>
        <h2 className="font-heading mt-2 text-3xl sm:text-5xl font-semibold tracking-tight text-white">
          Let’s build something worth remembering.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-[#a1a1a1]">
          Combining 18 months of high-velocity enterprise SaaS backend engineering with modern real-time frontend execution and deterministic AI systems.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((srv, index) => (
          <motion.div
            key={srv.title}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: EASE }}
            className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.05]"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-white/40">
                <span className="font-mono">0{index + 1}</span>
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
              </div>

              <h3 className="mt-4 text-lg font-semibold tracking-tight text-white group-hover:text-sky-300 transition-colors">
                {srv.title}
              </h3>

              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#a1a1a1]">
                {srv.description}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-1.5 border-t border-white/5 pt-4">
              {srv.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] font-mono text-white/70"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

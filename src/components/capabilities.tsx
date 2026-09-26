"use client";

import { motion, useReducedMotion } from "motion/react";
import { skillGroups } from "@/lib/content";

export function Capabilities() {
  const reduce = useReducedMotion();

  return (
    <section id="skills" className="scroll-mt-24 mx-auto max-w-[1080px] px-6 py-20">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-[11px] tracking-[0.22em] text-[#a1a1a1] uppercase">
          Technical Expertise
        </p>
        <h2 className="font-heading mt-2 text-4xl sm:text-5xl">Capabilities & Stack</h2>
        <p className="mt-4 max-w-2xl text-base text-[#a1a1a1]">
          Core proficiencies spanning agentic orchestration, backend microservices, high-throughput messaging, and cloud deployments.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
          >
            <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
              {group.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/80 transition-colors group-hover:border-white/15 hover:border-white/30 hover:bg-white/10 hover:text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


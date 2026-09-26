"use client";

import { motion, useReducedMotion } from "motion/react";
import { CheckCircle2, Trophy } from "lucide-react";
import { achievements } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

const honors = [
  "400+ LeetCode Problems Solved",
  "Algo University Fellowship",
  "Myntra WeForShe HackerRamp — Top 100 Team",
  "CodeChef Silver Badge",
  "GFG GeekStreak Contributor",
  "NxtWave Leadership Certificate",
  "Mega GEN AI Workshop Participant",
  "Internshala Student Partner",
];

export function Achievements() {
  const reduce = useReducedMotion();

  return (
    <section id="achievements" className="scroll-mt-24 mx-auto max-w-[1080px] px-6 py-20">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <p className="text-[11px] tracking-[0.22em] text-[#a1a1a1] uppercase">
          Milestones & Recognition
        </p>
        <h2 className="font-heading mt-2 text-3xl sm:text-5xl font-semibold tracking-tight text-white">
          Achievements & Benchmarks
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-[#a1a1a1]">
          Measured production outcomes, competitive algorithmic problem solving, and fellowship recognitions.
        </p>
      </motion.div>

      {/* Production Metrics Grid */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item, index) => (
          <motion.div
            key={item.label}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: EASE }}
            className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
          >
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-3xl sm:text-4xl font-bold tracking-tight text-white">
                  {item.metric}
                </span>
                <span className="text-xs font-mono text-sky-400 font-medium">
                  {item.unit}
                </span>
              </div>
              <h3 className="mt-3 text-sm font-semibold text-white/90">
                {item.label}
              </h3>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-[#a1a1a1] border-t border-white/5 pt-3">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Algorithmic & Fellowship Honors Strip */}
      <motion.div
        className="mt-10 rounded-2xl border border-white/10 bg-white/[0.015] p-6 sm:p-8"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: EASE }}
      >
        <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-sky-300 uppercase">
          <Trophy className="size-4 text-amber-400" />
          <span>Fellowships & Honors</span>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {honors.map((honor) => (
            <div
              key={honor}
              className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.03] px-3.5 py-2.5 text-xs text-white/85 transition-colors hover:border-white/15 hover:bg-white/[0.06]"
            >
              <CheckCircle2 className="size-3.5 shrink-0 text-emerald-400" />
              <span>{honor}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

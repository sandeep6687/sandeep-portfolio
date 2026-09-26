"use client";

import { motion, useReducedMotion } from "motion/react";

import { CountUp } from "@/components/motion/count-up";
import { Tilt3D } from "@/components/motion/tilt-3d";
import { SocialPills } from "@/components/social-links";
import { site, stats } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="scroll-mt-24 mx-auto max-w-[1080px] px-6 pt-16 pb-8 sm:pt-24">
      <div style={{ perspective: "700px" }} className="mb-8 w-fit">
        <Tilt3D
          intensity={20}
          className="flex size-16 items-center justify-center rounded-full bg-[#c8e6d0] text-lg font-medium text-[#0a0a0a]"
        >
          <span className="relative">SG</span>
        </Tilt3D>
      </div>
      <motion.h1
        className="font-heading max-w-3xl text-[2.15rem] leading-[1.2] font-medium tracking-tight sm:text-5xl lg:text-[3.35rem]"
        initial={reduce ? false : { opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.12, ease }}
      >
        {site.headline}
      </motion.h1>
      <motion.p
        className="mt-8 max-w-3xl text-base leading-8 text-[#a1a1a1] sm:text-lg"
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.28, ease }}
      >
        {site.pitch}
      </motion.p>
      <dl className="mt-12 flex gap-16" style={{ perspective: "800px" }}>
        {stats.slice(0, 2).map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={reduce ? false : { opacity: 0, y: 16, rotateX: 18 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.55, delay: 0.42 + index * 0.1, ease }}
            style={{ transformPerspective: 800 }}
          >
            <Tilt3D intensity={12} shine={false} className="w-fit">
              <dt className="relative text-4xl font-medium tracking-tight sm:text-5xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </dt>
              <dd className="relative mt-1 text-sm text-[#a1a1a1]">{stat.label}</dd>
            </Tilt3D>
          </motion.div>
        ))}
      </dl>
      <motion.div
        className="mt-10 flex flex-col gap-6"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.62, ease }}
      >
        <div className="flex flex-wrap items-center gap-6" style={{ perspective: "700px" }}>
          <Tilt3D
            href="#work"
            intensity={14}
            className="inline-flex items-center rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black"
          >
            <span className="relative">View Projects →</span>
          </Tilt3D>
          <a
            href={site.resume}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-white underline underline-offset-4 transition-opacity hover:opacity-70"
          >
            See full resume
          </a>
        </div>
        <SocialPills />
      </motion.div>
    </section>
  );
}

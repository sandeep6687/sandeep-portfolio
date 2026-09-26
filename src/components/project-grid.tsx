"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { Tilt3D } from "@/components/motion/tilt-3d";
import { ProjectVisual } from "@/components/project-visual";
import { featuredProjects, site } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

export function ProjectGrid() {
  const reduce = useReducedMotion();

  return (
    <section id="work" className="scroll-mt-24 mx-auto max-w-[1080px] px-6 py-24">
      <motion.div
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6"
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <div>
          <p className="text-[11px] tracking-[0.22em] text-[#a1a1a1] uppercase">
            Selected Work
          </p>
          <h2 className="font-heading mt-2 text-3xl sm:text-5xl font-semibold tracking-tight text-white">
            Production Systems & Projects
          </h2>
        </div>
        <a
          href={site.mailHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm font-medium text-white/60 transition-colors hover:text-white"
        >
          Discuss an architecture →
        </a>
      </motion.div>

      {/* Editorial Project Showcase */}
      <div className="mt-12 space-y-16">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={reduce ? false : { opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: index * 0.08, ease: EASE }}
            className="group"
            data-cursor-text="VIEW"
          >
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              {/* Visual Presentation (7 Cols) */}
              <div className="lg:col-span-7" style={{ perspective: "1200px" }}>
                <Link
                  href={`/work/${project.slug}`}
                  className="block overflow-hidden rounded-2xl border border-white/10 transition-all duration-500 group-hover:border-white/25 group-hover:shadow-[0_0_30px_rgba(56,189,248,0.12)]"
                >
                  <Tilt3D intensity={6} className="w-full">
                    <div
                      className="relative aspect-[16/10] w-full transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      style={{ backgroundColor: project.accent }}
                      data-stage
                    >
                      <ProjectVisual slug={project.slug} />
                    </div>
                  </Tilt3D>
                </Link>
              </div>

              {/* Editorial Content (5 Cols) */}
              <div className="flex flex-col justify-between space-y-4 lg:col-span-5">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-semibold tracking-wider text-sky-400 uppercase">
                      0{index + 1} · {project.label}
                    </span>
                    {project.company ? (
                      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-mono text-white/70">
                        {project.company}
                      </span>
                    ) : null}
                  </div>

                  <Link href={`/work/${project.slug}`} className="block mt-2">
                    <h3 className="font-heading text-xl sm:text-2xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-sky-200">
                      {project.title}
                    </h3>
                  </Link>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#c8c8c8]">
                    {project.summary}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-mono text-white/75"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project CTA */}
                  <div className="pt-2">
                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white transition-all group-hover:text-sky-300"
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

import { Tilt3D } from "@/components/motion/tilt-3d";
import { ProjectVisual } from "@/components/project-visual";
import { featuredProjects, site } from "@/lib/content";

export function ProjectGrid() {
  const reduce = useReducedMotion();

  return (
    <section id="work" className="scroll-mt-24 mx-auto max-w-[1080px] px-6 py-24">
      <motion.div
        className="flex items-end justify-between gap-4"
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <p className="text-[11px] tracking-[0.22em] text-[#a1a1a1] uppercase">
            Featured
          </p>
          <h2 className="font-heading mt-2 text-4xl sm:text-5xl">Selected Work</h2>
        </div>
        <a
          href={site.mailHref}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden text-sm text-[#a1a1a1] transition-colors hover:text-white sm:inline"
        >
          Work with me →
        </a>
      </motion.div>
      <div className="mt-12 grid gap-10 md:grid-cols-2" style={{ perspective: "1200px" }}>
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={reduce ? false : { opacity: 0, y: 32, rotateX: 12 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformPerspective: 1200 }}
          >
            <Link href={`/work/${project.slug}`} className="group block">
              <Tilt3D intensity={10} className="overflow-hidden rounded-xl">
                <div
                  className="relative aspect-[4/3]"
                  style={{ backgroundColor: project.accent }}
                >
                  <ProjectVisual slug={project.slug} />
                </div>
              </Tilt3D>
              <p className="mt-4 text-[11px] tracking-[0.18em] text-[#a1a1a1] uppercase">
                {project.label}
                {project.company ? ` · ${project.company}` : ""}
              </p>
              <h3 className="font-heading mt-2 text-xl leading-snug transition-colors group-hover:text-white sm:text-2xl">
                {project.cardTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#a1a1a1]">
                {project.summary}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

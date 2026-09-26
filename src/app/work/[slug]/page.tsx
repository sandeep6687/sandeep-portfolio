import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import { Tilt3D } from "@/components/motion/tilt-3d";
import { ProjectVisual } from "@/components/project-visual";
import { getAdjacentProjects, getProject, projects } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Not found" };
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
    },
  };
}

export default async function WorkPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <article className="mx-auto max-w-[760px] px-6 py-16">
      <Link
        href="/#work"
        className="inline-flex items-center gap-1.5 text-sm text-[#a1a1a1] transition-colors hover:text-white"
      >
        <ArrowLeft className="size-4" /> Back to Projects
      </Link>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <p className="text-[11px] tracking-[0.18em] text-[#a1a1a1] uppercase">
          {project.label}
          {project.company ? ` · Built at ${project.company}` : ""}
        </p>
        <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70">
          Role: {project.role}
        </span>
      </div>

      <h1 className="font-heading mt-4 text-3xl sm:text-4xl leading-tight">
        {project.title}
      </h1>

      <p className="mt-4 text-lg leading-8 text-[#a1a1a1]">{project.summary}</p>

      {/* Tech Stack Pills & Links */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-md border border-white/15 bg-white/[0.05] px-2.5 py-1 text-xs font-medium text-white/90"
            >
              {item}
            </span>
          ))}
        </div>

        {project.links && project.links.length > 0 ? (
          <div className="flex items-center gap-3">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white px-3.5 py-1.5 text-xs font-semibold text-black transition-all hover:bg-white/90"
              >
                {link.label}
                <ArrowUpRight className="size-3.5" />
              </a>
            ))}
          </div>
        ) : null}
      </div>

      {/* 3D Visual Stage */}
      <div className="mt-10" style={{ perspective: "1200px" }}>
        <Tilt3D intensity={8} className="overflow-hidden rounded-xl border border-white/10 shadow-2xl">
          <div
            className="relative aspect-[16/9]"
            style={{ backgroundColor: project.accent }}
          >
            <ProjectVisual slug={project.slug} />
          </div>
        </Tilt3D>
      </div>

      {/* Case Study Body */}
      <div className="mt-12 space-y-12 text-base leading-8">
        <section className="rounded-xl border border-white/5 bg-white/[0.02] p-6 sm:p-8">
          <h2 className="font-heading text-2xl text-white">Problem Statement</h2>
          <p className="mt-3 text-[#c8c8c8]">{project.problem}</p>
        </section>

        <section className="rounded-xl border border-white/5 bg-white/[0.02] p-6 sm:p-8">
          <h2 className="font-heading text-2xl text-white">Engineering Approach</h2>
          <ol className="mt-4 list-decimal space-y-4 pl-5 text-[#c8c8c8]">
            {project.approach.map((step) => (
              <li key={step} className="leading-relaxed">
                {step}
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-xl border border-white/5 bg-white/[0.02] p-6 sm:p-8">
          <h2 className="font-heading text-2xl text-white">Outcome & Key Metrics</h2>
          <p className="mt-3 text-[#c8c8c8]">{project.outcome}</p>
        </section>
      </div>

      {/* Previous / Next Project Navigation */}
      <nav className="mt-16 grid grid-cols-1 gap-4 border-t border-white/10 pt-8 sm:grid-cols-2">
        {prev ? (
          <Link
            href={`/work/${prev.slug}`}
            className="group flex flex-col rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-white/20 hover:bg-white/[0.05]"
          >
            <span className="flex items-center gap-1.5 text-xs text-[#a1a1a1]">
              <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />
              Previous Project
            </span>
            <span className="font-heading mt-2 text-lg font-medium text-white group-hover:text-white">
              {prev.title}
            </span>
          </Link>
        ) : <div />}

        {next ? (
          <Link
            href={`/work/${next.slug}`}
            className="group flex flex-col items-start sm:items-end rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-white/20 hover:bg-white/[0.05]"
          >
            <span className="flex items-center gap-1.5 text-xs text-[#a1a1a1]">
              Next Project
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="font-heading mt-2 text-lg font-medium text-white group-hover:text-white sm:text-right">
              {next.title}
            </span>
          </Link>
        ) : <div />}
      </nav>
    </article>
  );
}


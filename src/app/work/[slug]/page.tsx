import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Tilt3D } from "@/components/motion/tilt-3d";
import { ProjectVisual } from "@/components/project-visual";
import { getProject, projects } from "@/lib/content";

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
  return { title: project.title, description: project.summary };
}

export default async function WorkPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-[720px] px-6 py-16">
      <Link href="/#work" className="text-sm text-[#a1a1a1] hover:text-white">
        ← Projects
      </Link>
      <p className="mt-10 text-[11px] tracking-[0.18em] text-[#a1a1a1] uppercase">
        {project.label}
        {project.company ? ` · Built at ${project.company}` : ""}
      </p>
      <h1 className="font-heading mt-3 text-4xl leading-tight">{project.title}</h1>
      <p className="mt-5 text-lg leading-8 text-[#a1a1a1]">{project.summary}</p>
      <div className="mt-10" style={{ perspective: "1200px" }}>
        <Tilt3D intensity={8} className="overflow-hidden rounded-xl">
          <div
            className="relative aspect-[16/9]"
            style={{ backgroundColor: project.accent }}
          >
            <ProjectVisual slug={project.slug} />
          </div>
        </Tilt3D>
      </div>
      <div className="mt-12 space-y-10 text-base leading-8">
        <section>
          <h2 className="font-heading text-2xl">Problem</h2>
          <p className="mt-3 text-[#c8c8c8]">{project.problem}</p>
        </section>
        <section>
          <h2 className="font-heading text-2xl">Approach</h2>
          <ol className="mt-3 list-decimal space-y-3 pl-5 text-[#c8c8c8]">
            {project.approach.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
        <section>
          <h2 className="font-heading text-2xl">Outcome</h2>
          <p className="mt-3 text-[#c8c8c8]">{project.outcome}</p>
        </section>
      </div>
    </article>
  );
}

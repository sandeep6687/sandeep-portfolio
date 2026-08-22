import { experience } from "@/lib/content";

export function Experience() {
  return (
    <section id="experience" className="relative z-10 mx-auto max-w-4xl scroll-mt-16 px-6 pb-24">
      <p className="mb-8 text-center text-sm text-[#8a8a8a]">Experience</p>
      {experience.map((job) => (
        <div
          key={job.company}
          className="rounded-xl border border-white/8 bg-white/4 px-6 py-8"
        >
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <p className="text-lg font-medium">
              {job.role}, {job.company}
            </p>
            <p className="text-sm text-[#8a8a8a]">{job.period}</p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-[#8a8a8a]">{job.summary}</p>
        </div>
      ))}
    </section>
  );
}

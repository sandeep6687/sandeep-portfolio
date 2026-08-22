import { skillGroups } from "@/lib/content";

export function Capabilities() {
  return (
    <section id="capabilities" className="scroll-mt-20 px-6 py-24 md:px-12 lg:px-16">
      <h2 className="text-sm tracking-[0.22em] text-primary uppercase">Skills</h2>
      <div className="mt-10 grid gap-10 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm text-white/50">{group.title}</h3>
            <p className="mt-3 leading-relaxed">{group.items.join("  ·  ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

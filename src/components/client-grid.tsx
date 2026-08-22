import { clientTiles } from "@/lib/content";

export function ClientGrid() {
  return (
    <section className="relative z-10 mx-auto max-w-4xl px-6 pb-24 pt-8">
      <p className="mb-8 text-center text-sm text-[#8a8a8a]">Some of my clients</p>
      <div className="relative">
        <div className="grid-sweep pointer-events-none absolute top-0 left-0 z-10 h-px w-1/3 bg-gradient-to-r from-transparent via-white to-transparent" />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {clientTiles.map((item) => (
            <div
              key={item}
              className="flex h-[72px] items-center justify-center rounded-xl border border-white/8 bg-white/4 text-sm font-medium tracking-tight text-white/85"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

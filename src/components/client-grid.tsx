import { clientTiles } from "@/lib/content";

export function ClientGrid() {
  return (
    <section className="relative z-10 mx-auto max-w-4xl px-6 pb-20 pt-4">
      <div className="mb-6 text-center">
        <p className="text-[11px] tracking-[0.2em] text-[#a1a1a1] uppercase">
          Production Ecosystem
        </p>
        <p className="mt-1 text-xs text-white/50">
          Core backend, agentic framework, and cloud technologies I build with
        </p>
      </div>
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-6 backdrop-blur-sm">
        <div className="grid-sweep pointer-events-none absolute top-0 left-0 z-10 h-px w-1/3 bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4">
          {clientTiles.map((item) => (
            <div
              key={item}
              className="flex h-14 items-center justify-center rounded-xl border border-white/8 bg-white/[0.03] text-sm font-medium tracking-tight text-white/85 transition-all hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


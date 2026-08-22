import { clientTiles } from "@/lib/content";

export function LogoStrip() {
  const loop = [...clientTiles, ...clientTiles];

  return (
    <section className="border-y border-white/10 py-10">
      <p className="mb-6 px-6 text-center text-sm tracking-[0.2em] text-muted-foreground uppercase md:px-12">
        Some of the systems I ship with
      </p>
      <div className="relative overflow-hidden">
        <div className="animate-marquee flex w-max gap-12 pr-12">
          {loop.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="text-lg font-medium tracking-tight text-white/35"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

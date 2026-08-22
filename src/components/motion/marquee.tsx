"use client";

import { clientTiles } from "@/lib/content";

export function TechMarquee() {
  const loop = [...clientTiles, ...clientTiles];

  return (
    <div className="relative overflow-hidden border-y border-border/60 py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="animate-marquee flex w-max gap-10 pr-10 motion-reduce:animate-none">
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="font-mono text-xs tracking-[0.28em] text-muted-foreground uppercase"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

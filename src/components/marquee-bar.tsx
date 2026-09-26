"use client";

import { marqueeItems } from "@/lib/content";

export function MarqueeBar() {
  const loop = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-black/40 py-5 backdrop-blur-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent" />
      <div className="animate-marquee flex w-max gap-12 pr-12 motion-reduce:animate-none">
        {loop.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-12">
            <span className="font-mono text-xs tracking-[0.3em] text-white/60 uppercase transition-colors hover:text-white">
              {item}
            </span>
            <span className="size-1 rounded-full bg-sky-400/60" />
          </div>
        ))}
      </div>
    </div>
  );
}

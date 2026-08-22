"use client";

import { ArrowUpRight } from "lucide-react";

import { Tilt3D } from "@/components/motion/tilt-3d";
import { site } from "@/lib/content";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 18c-4.51 2-5-2-7-2"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect width="4" height="12" x="2" y="9" stroke="currentColor" strokeWidth="1.75" rx="0.5" />
      <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

const links = [
  { href: site.linkedin, label: "LinkedIn", handle: "sandeep-go", Icon: LinkedInIcon },
  { href: site.github, label: "GitHub", handle: "sandeep6687", Icon: GitHubIcon },
] as const;

export function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`} style={{ perspective: "600px" }}>
      {links.map(({ href, label, Icon }) => (
        <Tilt3D
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          ariaLabel={label}
          intensity={18}
          className="inline-flex size-8 items-center justify-center rounded-full border border-white/15 text-[#a1a1a1] hover:border-white hover:bg-white hover:text-black"
        >
          <Icon className="relative size-3.5" />
        </Tilt3D>
      ))}
    </div>
  );
}

export function SocialPills() {
  return (
    <div className="flex flex-wrap items-center gap-3" style={{ perspective: "800px" }}>
      {links.map(({ href, label, Icon }) => (
        <Tilt3D
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          ariaLabel={label}
          intensity={16}
          className="inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/15 bg-[#111] px-3.5 py-1.5 text-sm text-[#c8c8c8] shadow-[0_10px_24px_rgb(0_0_0_/_0.35)]"
        >
          <Icon className="relative size-3.5" />
          <span className="relative">{label}</span>
          <ArrowUpRight className="relative size-3.5 text-white/40" />
        </Tilt3D>
      ))}
    </div>
  );
}

export function SocialRows() {
  return (
    <ul className="mt-8 divide-y divide-white/10 border-y border-white/10" style={{ perspective: "900px" }}>
      {links.map(({ href, label, handle, Icon }) => (
        <li key={label} className="py-1">
          <Tilt3D
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel={label}
            intensity={10}
            className="flex items-center justify-between gap-4 overflow-hidden rounded-xl px-3 py-3"
          >
            <span className="relative flex items-center gap-3">
              <span className="inline-flex size-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80">
                <Icon className="size-4" />
              </span>
              <span>
                <span className="block text-[15px] font-medium text-white">{label}</span>
                <span className="block text-sm text-[#a1a1a1]">{handle}</span>
              </span>
            </span>
            <ArrowUpRight className="relative size-4 text-white/30" />
          </Tilt3D>
        </li>
      ))}
    </ul>
  );
}

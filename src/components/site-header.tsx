"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu } from "lucide-react";

import { SocialIcons } from "@/components/social-links";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { nav, site } from "@/lib/content";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md shadow-lg"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1080px] items-center justify-between gap-4 px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative size-9 overflow-hidden rounded-full border border-white/25 ring-2 ring-sky-500/20">
            <Image
              src="/sandeep.jpg"
              alt={site.name}
              fill
              className="object-cover object-top"
              sizes="36px"
            />
          </div>
          <span className="text-sm font-semibold tracking-tight text-white hover:text-white/80">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-[13px] font-medium text-white/70 md:flex">
          {nav.map((item) =>
            "external" in item && item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="relative hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="relative hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <SocialIcons />
          <a
            href={site.mailHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.05] px-4 py-1.5 text-xs font-medium text-white transition-all hover:border-white/30 hover:bg-white/10"
          >
            <span>Let&apos;s Work Together</span>
            <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#0a0a0a] border-white/10 text-white">
            <SheetHeader>
              <SheetTitle className="text-white text-left">{site.name}</SheetTitle>
              <p className="text-xs text-white/50 text-left font-mono">{site.role}</p>
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-2">
              {nav.map((item) => (
                <SheetClose asChild key={item.href}>
                  <a
                    href={item.href}
                    className="rounded-lg px-3 py-3 text-sm text-white/80 hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </a>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <a
                  href={site.mailHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-black"
                >
                  Let&apos;s Work Together
                </a>
              </SheetClose>
              <div className="mt-6 border-t border-white/10 pt-4">
                <SocialIcons />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

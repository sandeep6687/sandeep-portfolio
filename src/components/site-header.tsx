"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

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
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[#0a0a0a]/90 backdrop-blur-sm">
      <div className="mx-auto flex h-[72px] max-w-[1080px] items-center justify-between gap-4 px-6">
        <Link href="/" className="shrink-0 text-[15px] font-medium tracking-tight">
          {site.name}
        </Link>
        <nav className="hidden items-center gap-7 text-[14px] text-[#a1a1a1] md:flex">
          {nav.map((item) =>
            "external" in item && item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="relative hover:text-white after:absolute after:right-0 after:bottom-[-6px] after:left-0 after:h-px after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="relative hover:text-white after:absolute after:right-0 after:bottom-[-6px] after:left-0 after:h-px after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100"
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
            className="group inline-flex items-center gap-1.5 text-[13px] text-[#a1a1a1] transition-colors hover:text-white"
          >
            Work with me
            <span className="translate-x-0 transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#0a0a0a]">
            <SheetHeader>
              <SheetTitle>{site.name}</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {nav.map((item) => (
                <SheetClose asChild key={item.href}>
                  <a href={item.href} className="rounded-md px-2 py-3">
                    {item.label}
                  </a>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <a
                  href={site.mailHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md px-2 py-3"
                >
                  Work with me
                </a>
              </SheetClose>
              <div className="mt-4 px-2">
                <SocialIcons />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

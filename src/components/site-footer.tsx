import { SocialIcons } from "@/components/social-links";
import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-[1080px] px-6 pb-12">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10 pt-8 text-xs text-white/50">
        {/* Left: Name */}
        <div className="flex items-center gap-2">
          <span className="font-semibold text-white/80">{site.name}</span>
          <span>·</span>
          <span>Software Engineer</span>
        </div>

        {/* Center: Philosophy */}
        <p className="font-mono text-[11px] text-white/40">
          Built with curiosity + code
        </p>

        {/* Right: Year & Socials */}
        <div className="flex items-center gap-4">
          <SocialIcons />
          <span className="font-mono">© 2026</span>
        </div>
      </div>
    </footer>
  );
}

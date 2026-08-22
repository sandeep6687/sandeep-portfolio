import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-[1080px] px-6 pb-12">
      <div className="border-t border-white/10 pt-8">
        <p className="text-sm text-white/40">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}

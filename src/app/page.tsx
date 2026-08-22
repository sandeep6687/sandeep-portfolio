import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { ProjectGrid } from "@/components/project-grid";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectGrid />
      <About />
      <Contact />
    </>
  );
}

import { About } from "@/components/about";
import { Achievements } from "@/components/achievements";
import { Capabilities } from "@/components/capabilities";
import { ClientGrid } from "@/components/client-grid";
import { Contact } from "@/components/contact";
import { Hero360 } from "@/components/hero-360";
import { MarqueeBar } from "@/components/marquee-bar";
import { ProjectGrid } from "@/components/project-grid";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { WhyWorkWithMe } from "@/components/why-me";

export default function Home() {
  return (
    <>
      {/* 360 Turntable Hero Experience */}
      <Hero360 />

      {/* Subtle Horizontal Marquee */}
      <MarqueeBar />

      {/* Production Ecosystem & Technologies */}
      <ClientGrid />

      {/* Selected Work (Updated with Latest Resume Projects) */}
      <ProjectGrid />

      {/* Technical Capabilities & Stack */}
      <Capabilities />

      {/* Client / Enterprise Focused Services */}
      <Services />

      {/* Why Work With Me (Engineering Standards) */}
      <WhyWorkWithMe />

      {/* Production Milestones & Recognitions */}
      <Achievements />

      {/* Experience & Education Credential */}
      <About />

      {/* Philosophy & Endorsement */}
      <Testimonials />

      {/* Contact Form & Final CTA */}
      <Contact />
    </>
  );
}

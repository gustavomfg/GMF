import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ManifestoSection } from "@/components/sections/manifesto-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { StackBand } from "@/components/sections/stack-band";
import { CommandPalette } from "@/components/interactive/command-palette";
import { PageEdgeBlur } from "@/components/atmosphere/page-edge-blur";
import { NAV_ITEMS, PROJECTS, TECHNICAL_PROFILE } from "@/data/portfolio";

export function NocturnePortfolio() {
  return (
    <>
      <main id="conteudo">
        <a className="skip-link" href="#projetos">Pular para os projetos</a>

        <Navbar items={NAV_ITEMS} />
        <HeroSection />
        <StackBand />
        <ManifestoSection />
        <ProjectsSection projects={PROJECTS} />
        <AboutSection profile={TECHNICAL_PROFILE} />
        <ContactSection />
        <Footer />
      </main>
      <PageEdgeBlur />
      <CommandPalette />
    </>
  );
}

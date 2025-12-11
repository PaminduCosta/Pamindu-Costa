import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ImpactSection } from "@/components/ImpactSection";
import { ScrollTransitionWrapper } from "../../components/ScrollTransitionWrapper";
import { CurvyLinesBackground } from "../../components/CurvyLinesBackground";
import { LenisScroll } from "../../components/LenisScroll";
import { ProjectsSection } from "../../components/ProjectsSection";

import { TechnologiesSection } from "../../components/TechnologiesSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
    return (
        <main className="relative bg-light-background dark:bg-dark-background min-h-screen transition-colors duration-500">
            <LenisScroll />
            <div className="fixed inset-0 z-0">
                <CurvyLinesBackground />
            </div>
            <Navbar />
            <ScrollTransitionWrapper>
                <Hero />
            </ScrollTransitionWrapper>
            <div className="relative z-10">
                <ImpactSection />
            </div>
            <div id="projects" className="relative z-10">
                <ProjectsSection />
            </div>
            <div className="relative z-10">
                <TechnologiesSection />
            </div>
            <div id="contact" className="relative z-10 transition-colors duration-500">
                <ContactSection />
            </div>
        </main >
    );
}

"use client";

import { TechCard } from "./TechCard";
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiPython,
    SiMongodb,
    SiCss3,
    SiFigma,
} from "react-icons/si";
import { useTranslations } from "next-intl";

// Sample technology data
const technologies = [
    { name: "React", icon: <SiReact className="w-12 h-12 text-[#61DAFB]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="w-12 h-12 text-black dark:text-white" /> },
    { name: "TypeScript", icon: <SiTypescript className="w-12 h-12 text-[#3178C6]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-12 h-12 text-[#06B6D4]" /> },
    { name: "CSS", icon: <SiCss3 className="w-12 h-12 text-[#1572B6]" /> },
    { name: "Python", icon: <SiPython className="w-12 h-12 text-[#3776AB]" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-12 h-12 text-[#47A248]" /> },
    { name: "Figma", icon: <SiFigma className="w-12 h-12 text-[#F24E1E]" /> }
];

export const TechnologiesSection = () => {
    const t = useTranslations("HomePage");
    return (
        <section className="relative py-24 px-8 md:px-16">
            {/* Section Header */}
            <div className="max-w-7xl mx-auto mb-16 text-center">
                <h2 className="text-5xl md:text-7xl font-bold text-light-text dark:text-dark-text mb-6">
                    {t("technologies")}
                </h2>
                <p className="text-xl text-light-text/70 dark:text-dark-text/70 max-w-3xl mx-auto">
                    {t("technologies_description")}
                </p>
            </div>

            {/* Clean Grid */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 object-fit">
                    {technologies.map((tech, index) => (
                        <div key={index}>
                            <TechCard {...tech} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

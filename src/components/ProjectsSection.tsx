"use client";

import React from "react";
import { HorizontalScrollSection } from "./HorizontalScrollSection";
import { ProjectCard } from "./ProjectCard";
import { Timeline } from "./Timeline";
import { useTranslations } from "next-intl";
import { useLoading } from "@/context/LoadingContext";

// Global flag to simulate "resources loaded" state across navigations
let resourcesLoaded = false;

export const ProjectsSection = () => {
    const t = useTranslations("HomePage");
    const { addLoader, removeLoader } = useLoading();

    // Sample project data - replace with your actual projects
    const projects = [
        {
            title: t("projects_list.0.title"),
            description: t("projects_list.0.description"),
            imageUrl: "./p2.png",
        },
        {
            title: t("projects_list.1.title"),
            status: t("projects_list.1.status"),
            description: t("projects_list.1.description"),
            imageUrl: "./p3.png",
        },
        {
            title: t("projects_list.2.title"),
            status: t("projects_list.2.status"),
            description: t("projects_list.2.description"),
            imageUrl: "./p42.png",
        },
    ];

    React.useEffect(() => {
        // Only trigger loading if resources haven't been loaded yet
        if (!resourcesLoaded) {
            addLoader('projects-media');

            // Simulate video loading taking some time
            const timer = setTimeout(() => {
                resourcesLoaded = true;
                removeLoader('projects-media');
            }, 1500);

            return () => clearTimeout(timer);
        }
    }, [addLoader, removeLoader]);

    return (
        <section className="relative">
            <HorizontalScrollSection>
                {/* Section Header - First Panel */}
                <div className="shrink-0 w-screen h-screen flex items-center justify-center px-8 md:px-16">
                    <div className="text-center">
                        <h2 className="text-5xl md:text-7xl font-bold text-light-text dark:text-dark-text mb-6">
                            {t("projects_title")}
                        </h2>
                        <p className="text-xl text-light-text/70 dark:text-dark-text/70 max-w-3xl mx-auto">
                            {t("projects_description")}
                        </p>
                    </div>
                </div>

                {/* Project Cards */}
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </HorizontalScrollSection>

            {/* Education Section - Vertical Flow */}
            <div id="education" className="w-full pt-20 pb-20 relative px-4 md:px-16 overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-light-primary/5 dark:bg-dark-primary/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2"></div>

                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-light-text dark:text-dark-text mb-6">
                        {t("Education_title")}
                    </h2>
                    <p className="text-xl text-light-text/70 dark:text-dark-text/70 max-w-2xl mx-auto">
                        {t("Education_description")}
                    </p>
                </div>

                <Timeline />
            </div>
        </section>
    );
};

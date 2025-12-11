"use client";

import { useTranslations } from "next-intl";
import { useLoading } from "@/context/LoadingContext";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Timeline } from "@/components/Timeline";
import { CurvyLinesBackground } from "@/components/CurvyLinesBackground";
import { LenisScroll } from "@/components/LenisScroll";

export default function About() {
    const t = useTranslations('HomePage');
    const { addLoader, removeLoader } = useLoading();

    useEffect(() => {
        // Simulate heavy asset loading (videos/animations)
        addLoader('about-sim');

        const timer = setTimeout(() => {
            removeLoader('about-sim');
        }, 2000); // 2 seconds delay

        return () => clearTimeout(timer);
    }, [addLoader, removeLoader]);

    return (
        <main className="relative bg-light-background dark:bg-dark-background min-h-screen transition-colors duration-500">
            <LenisScroll />
            <div className="fixed inset-0 z-0">
                <CurvyLinesBackground />
            </div>

            <Navbar />

            <div className="relative z-10 pt-32 pb-20 px-4">
                {/* Hero / Intro */}
                <div className="max-w-5xl mx-auto text-center mb-20 flex flex-col md:flex-row items-center justify-center gap-8">
                    <div className="w-full md:w-1/2">
                        <h1 className="text-5xl md:text-7xl font-bold text-light-text dark:text-dark-text mb-8 text-left">
                            Hello,<br /> I'm Pamindu.
                        </h1>
                        <p className="text-xl text-light-text/80 dark:text-dark-text/80 leading-relaxed text-justify">
                            I am a passionate developer dedicated to building intuitive and dynamic web experiences.
                            My journey is fueled by a curiosity for new technologies and a commitment to clean, efficient code.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img src="/profile_photo-removebg.png" alt="Pamindu Costa" className="max-w-[300px] w-full h-auto object-cover" />
                    </div>
                </div>

                {/* Education Timeline */}
                <div className="max-w-5xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-light-text dark:text-dark-text mb-12">
                        Education
                    </h2>
                    <Timeline />
                </div>
            </div>

            <div className="relative z-10">
            </div>
        </main>
    );
}

"use client";

import React, { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface PinnedSectionProps {
    children: ReactNode;
    pinDuration?: number; // Duration in pixels to keep it pinned
}

export const PinnedSection = ({ children, pinDuration = 500 }: PinnedSectionProps) => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        // Pin the section for a brief moment
        const pinTrigger = ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: `+=${pinDuration}`,
            pin: true,
            pinSpacing: true,
        });

        // Cleanup
        return () => {
            pinTrigger.kill();
        };
    }, [pinDuration]);

    return (
        <div ref={sectionRef}>
            {children}
        </div>
    );
};

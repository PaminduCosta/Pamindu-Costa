"use client";

import React, { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollSectionProps {
    children: ReactNode;
}

export const HorizontalScrollSection = ({ children }: HorizontalScrollSectionProps) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const scroll = scrollRef.current;

        if (!section || !scroll) return;

        // Only apply horizontal scroll on desktop (>= 768px)
        const mediaQuery = window.matchMedia('(min-width: 768px)');

        const setupScrollAnimation = () => {
            if (mediaQuery.matches) {

                const scrollTween = gsap.to(scroll, {
                    x: () => -(scroll.scrollWidth - window.innerWidth),
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top top",
                        end: () => `+=${scroll.scrollWidth - window.innerWidth}`,
                        scrub: 1,
                        pin: true,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                    },
                });

                return () => {
                    scrollTween.kill();
                    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
                };
            }
        };

        const cleanup = setupScrollAnimation();

        // Only re-setup on media query change (mobile <-> desktop breakpoint)
        // General window resizing is handled by functional values + invalidateOnRefresh
        const handleResize = () => {
            if (cleanup) cleanup();
            setupScrollAnimation();
        };

        mediaQuery.addEventListener('change', handleResize);

        return () => {
            mediaQuery.removeEventListener('change', handleResize);
            if (cleanup) cleanup();
        };
    }, []);

    return (
        <div ref={sectionRef} className="relative md:overflow-hidden pt-10">
            <div ref={scrollRef} className="flex flex-col md:flex-row md:w-fit">
                {children}
            </div>
        </div>
    );
};

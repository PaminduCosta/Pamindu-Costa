"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ScrollTransitionWrapper({ children }: { children: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // More aggressive scale down for pronounced "sinking" effect
    const scale = useTransform(scrollYProgress, [0, 0.4, 1], [1, 0.6, 0.5]);

    // Move into the "background" (slight downward movement creates depth)
    const y = useTransform(scrollYProgress, [0, 0.6, 1], [0, 50, 100]);

    // Fade out more gradually
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.7, 0]);

    // Add border radius for smooth transition
    const borderRadius = useTransform(scrollYProgress, [0, 0.3], [0, 48]);

    return (
        <div ref={containerRef} className="h-[150vh] relative z-20">
            <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center" style={{ perspective: "1000px" }}>
                <motion.div
                    style={{ scale, y, opacity, borderRadius }}
                    className="w-full h-full origin-center overflow-hidden bg-white dark:bg-gray-900 shadow-2xl"
                >
                    {children}
                </motion.div>
            </div>
        </div>
    );
}

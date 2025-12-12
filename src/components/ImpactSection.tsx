"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { useRef } from "react";

export function ImpactSection() {
    const t = useTranslations('HomePage.impact');
    const locale = useLocale();
    const isSinhala = locale === 'si';
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const lines = ['line1', 'line2', 'line3', 'line4'] as const;

    return (
        <section ref={containerRef} className="min-h-screen relative flex items-center justify-center overflow-hidden py-20">
            {/* Background is now handled globally in page.tsx or is transparent here to show the fixed background */}

            <div className="max-w-[90vw] mx-auto z-10">
                <div className="flex flex-col items-center justify-center text-center space-y-4 md:space-y-8">
                    {lines.map((line, index) => (
                        <div key={line} className="overflow-hidden">
                            <motion.h2
                                initial={{ y: "100%", opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.1,
                                    ease: [0.65, 0.05, 0, 1]
                                }}
                                className={`
                  font-bold uppercase 
                  ${isSinhala ? 'tracking-normal leading-[1.3] pb-4' : 'tracking-tighter leading-[0.9]'}
                  ${index === 1 || index === 3
                                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-light-secondary to-light-primary dark:from-dark-primary dark:to-purple-400'
                                        : 'text-light-accent dark:text-dark-text'}
                 ${isSinhala
                                        ? 'text-lg sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl'
                                        : 'text-lg sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl'}
                `}
                                style={{ fontFamily: isSinhala ? 'var(--font-noto-sinhala)' : undefined }}
                            >
                                {t(line)}
                            </motion.h2>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

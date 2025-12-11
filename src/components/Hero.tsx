"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { GlassCard } from "./GlassCard";
import { useRef } from "react";
import { MapPin, ChevronDown } from "lucide-react";
import { RollingIcon } from "./RollingIcon";
import { RollingText } from "./RollingText";
import { NextLogo } from "./NextLogo";
import { LocationLink } from "./LocationLink";

export function Hero() {
    const t = useTranslations('HomePage');
    const locale = useLocale();
    const isSinhala = locale === 'si';
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const arrowOpacity = useTransform(scrollYProgress, [0, 0.001], [1, 0]);

    return (
        <motion.section
            ref={ref}
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
            style={{ y, opacity }}
        >

            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="grid md:grid-cols-2 sm:gap-12 gap-6 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-2 sm:space-y-6"
                    >
                        <motion.h1
                            className={`font-bold ${isSinhala ? 'text-2xl md:text-5xl lg:text-7xl' : 'text-3xl md:text-6xl lg:text-8xl'}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <span className="bg-linear-to-r from-light-secondary via-light-primary to-light-accent dark:from-dark-primary dark:via-dark-text dark:to-dark-primary bg-clip-text text-transparent">
                                {t('title')}
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-base md:text-xl lg:text-2xl text-light-accent/70 dark:text-dark-text/70"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            {t('subtitle')}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="flex flex-col md:flex-row gap-3 md:gap-4 items-start md:items-center"
                        >
                            <h3 className="text-sm md:text-lg bg-linear-to-r from-light-secondary via-light-primary to-light-accent dark:from-dark-primary dark:via-dark-text dark:to-dark-primary bg-clip-text text-transparent">{t("call_to_action")}</h3>
                            <motion.a
                                href="/cv.pdf"
                                download="Pamindu_Costa_CV.pdf"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full md:w-auto group px-6 md:px-8 py-3 bg-linear-to-r from-light-secondary to-light-primary dark:from-dark-primary dark:to-dark-text text-white rounded-md font-medium shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
                            >
                                <RollingIcon icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                        <polyline points="7 10 12 15 17 10" />
                                        <line x1="12" x2="12" y1="15" y2="3" />
                                    </svg>
                                } />
                                <RollingText text={t('download_cv')} />
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Glass Card with Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <GlassCard className="p-6 md:p-8 space-y-4 md:space-y-6">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, delay: 1 }}
                                className="w-24 h-24 md:w-32 md:h-32 mx-auto bg-linear-to-br from-light-secondary to-light-primary dark:from-dark-primary dark:to-dark-text rounded-full overflow-hidden"
                            >
                                <img
                                    src="/profile_photo_croped-removebg-preview.png"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.2 }}
                                className="text-xl md:text-2xl font-bold text-center"
                            >
                                {t("name")}<br />
                                <LocationLink />
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.6 }}
                                className="text-center text-light-accent/90 dark:text-dark-text/60 font-medium text-sm md:text-base px-2"
                            >
                                {t("sales_pitch1")} <NextLogo className="inline-block h-5 md:h-6 w-auto align-middle mx-1" /> {t("sales_pitch2")}.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.8 }}
                                className="text-center"
                            >
                                <p className="text-xs md:text-md text-light-accent/80 dark:text-dark-text/60 px-2">
                                    {t("about1")}<img
                                        src="/waving-hand-svgrepo-com.svg"
                                        alt="waving hand"
                                        className="inline-block w-4 h-4 md:w-5 md:h-5 cursor-default animate-wave align-middle pb-1"
                                        style={{ transformOrigin: '70% 70%' }}
                                    />{t("about2")}
                                </p>
                            </motion.div>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
            {/* Scroll Indicator Wrapper for Entrance Delay */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                {/* Inner animating chevron controlled by scroll */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    style={{ opacity: arrowOpacity }}
                    transition={{
                        y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                    }}
                >
                    <ChevronDown className="w-8 h-8 text-light-accent/50 dark:text-dark-text/50" />
                </motion.div>
            </motion.div>
        </motion.section>
    );
}

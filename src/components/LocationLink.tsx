"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";
import { RollingText } from "./RollingText";
import { useTranslations } from "next-intl";

export const LocationLink = () => {
    const [isHovered, setIsHovered] = useState(false);
    const t = useTranslations('HomePage');

    return (
        <div className="relative inline-block">
            <a
                href="https://www.google.com/maps/search/?api=1&query=6.896444,80.086556"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-1 mt-2 text-sm font-normal text-light-accent/90 dark:text-dark-text/60 hover:text-light-primary dark:hover:text-dark-primary transition-colors cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Blinking MapPin Icon */}
                <motion.div
                    animate={{
                        opacity: [1, 0.4, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <MapPin className="w-4 h-4" />
                </motion.div>

                {/* Rolling Text Animation */}
                <RollingText text={t("location")} className="text-sm font-normal" />
            </a>

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-4 z-50 pointer-events-none"
                    >
                        <div className="bg-white dark:bg-dark-secondary p-1 rounded-lg shadow-xl border border-light-accent/10 dark:border-dark-text/10">
                            <div className="w-[300px] h-[200px] rounded-md overflow-hidden bg-gray-100 dark:bg-gray-800">
                                <iframe
                                    title="Location Map"
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    scrolling="no"
                                    marginHeight={0}
                                    marginWidth={0}
                                    src="https://maps.google.com/maps?q=6.896444,80.086556&z=15&output=embed"
                                    className="w-full h-full filter grayscale hover:grayscale-0 transition-all duration-300"
                                ></iframe>
                            </div>
                            {/* Little triangle arrow pointing up */}
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-dark-secondary rotate-45 border-l border-t border-light-accent/10 dark:border-dark-text/10"></div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

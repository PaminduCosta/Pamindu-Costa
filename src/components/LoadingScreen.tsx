"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLoading } from "@/context/LoadingContext";

export function LoadingScreen() {
    const { isLoading } = useLoading();

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-light-bg dark:bg-dark-bg"
                >
                    <div className="relative flex flex-col items-center">
                        {/* Animated Logo/Name */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-light-secondary to-light-primary dark:from-dark-primary dark:to-dark-text bg-clip-text text-transparent"
                        >
                            Pamindu Costa
                        </motion.div>

                        {/* Loading Indicator */}
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="h-1 bg-light-primary dark:bg-dark-primary mt-4 w-full rounded-full"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

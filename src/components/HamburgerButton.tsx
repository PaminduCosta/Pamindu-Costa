"use client";

import { motion } from "framer-motion";

interface HamburgerButtonProps {
    isOpen: boolean;
    onClick: () => void;
}

export const HamburgerButton = ({ isOpen, onClick }: HamburgerButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`relative w-11 h-11 flex items-center justify-center rounded-md hover:bg-light-accent/10 dark:hover:bg-dark-primary/10 transition-colors ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
        >
            <div className="w-6 h-5 flex flex-col justify-between">
                {/* Top line */}
                <motion.span
                    animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-full h-0.5 bg-light-accent dark:bg-dark-text rounded-full origin-center"
                />
                {/* Middle line */}
                <motion.span
                    animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-full h-0.5 bg-light-accent dark:bg-dark-text rounded-full"
                />
                {/* Bottom line */}
                <motion.span
                    animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-full h-0.5 bg-light-accent dark:bg-dark-text rounded-full origin-center"
                />
            </div>
        </button>
    );
};

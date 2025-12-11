"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RollingIcon } from "./RollingIcon";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-10 h-10" />; // Placeholder to avoid hydration mismatch
    }

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="group p-2 rounded-md glass hover:bg-white/30 dark:hover:bg-white/10 transition-colors flex items-center justify-center"
            aria-label="Toggle Theme"
        >
            {theme === "dark" ? (
                <RollingIcon icon={<Moon className="w-5 h-5 text-dark-text" />} />
            ) : (
                <RollingIcon icon={<Sun className="w-5 h-5 text-light-accent" />} />
            )}
        </motion.button>
    );
}

"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
}

export function GlassCard({ children, className, ...props }: GlassCardProps) {
    return (
        <motion.div
            className={cn(
                "glass rounded-md p-6 shadow-xl transition-all duration-300 hover:shadow-2xl border border-gray-200/80 dark:border-white/10",
                className
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            {...props}
        >
            {children}
        </motion.div>
    );
}

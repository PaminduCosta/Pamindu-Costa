"use client";

import { Languages } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { RollingIcon } from "./RollingIcon";
import { RollingText } from "./RollingText";

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const switchLocale = (newLocale: string) => {
        const segments = pathname.split('/');
        segments[1] = newLocale;
        const newPath = segments.join('/');
        router.push(newPath);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="group p-1 rounded-md glass hover:bg-white/30 dark:hover:bg-white/10 transition-colors flex items-center gap-2"
                aria-label="Switch Language"
            >
                <RollingIcon icon={<Languages className="w-5 h-5" />} />
                <RollingText text={locale} className="text-sm font-medium uppercase" />
            </motion.button>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full mt-2 right-0 glass rounded-md overflow-hidden shadow-lg min-w-[100px]"
                >
                    <button
                        onClick={() => switchLocale('en')}
                        className="w-full px-4 py-2 text-left hover:bg-white/20 dark:hover:bg-white/10 transition-colors"
                    >
                        English
                    </button>
                    <button
                        onClick={() => switchLocale('si')}
                        className="w-full px-4 py-2 text-left hover:bg-white/20 dark:hover:bg-white/10 transition-colors"
                    >
                        සිංහල
                    </button>
                </motion.div>
            )}
        </div>
    );
}

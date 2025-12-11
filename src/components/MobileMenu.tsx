"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { RollingText } from "./RollingText";
import { X } from "lucide-react";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
    const t = useTranslations('HomePage');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const handleNavClick = (sectionId: string) => {
        const currentPath = pathname?.split('#')[0];
        const isHomePage = currentPath === `/${locale}` || currentPath === `/${locale}/`;

        if (isHomePage) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                onClose();
            }
        } else {
            router.push(`/${locale}/#${sectionId}`);
            onClose();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                        onClick={onClose}
                    />

                    {/* Menu Panel */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed top-0 right-0 bottom-0 w-[280px] bg-light-background dark:bg-dark-background border-l border-light-accent/20 dark:border-dark-primary/20 z-50 md:hidden"
                    >
                        <div className="flex flex-col h-full p-6">
                            {/* Header with close button on left */}
                            <div className="flex items-center justify-between mb-8">
                                {/* Close Button on the left */}
                                <button
                                    onClick={onClose}
                                    className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-light-accent/10 dark:hover:bg-dark-primary/10 transition-colors"
                                    aria-label="Close menu"
                                >
                                    <X className="w-6 h-6 text-light-accent dark:text-dark-text" />
                                </button>

                                {/* Theme and Language toggles on the right */}
                                <div className="flex items-center gap-2">
                                    <ThemeToggle />
                                    <LanguageSwitcher />
                                </div>
                            </div>

                            {/* Navigation Links */}
                            <nav className="flex-1 flex flex-col gap-2">
                                {[
                                    { label: t('education'), id: 'education' },
                                    { label: t('projects'), id: 'projects' },
                                    { label: t('contact'), id: 'contact' }
                                ].map((item, index) => (
                                    <motion.button
                                        key={item.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 + 0.2 }}
                                        onClick={() => handleNavClick(item.id)}
                                        className="group text-left text-lg font-medium text-light-accent dark:text-dark-text py-4 px-4 rounded-md hover:bg-light-accent/10 dark:hover:bg-dark-primary/10 transition-colors min-h-[44px] flex items-center"
                                    >
                                        <RollingText text={item.label} />
                                    </motion.button>
                                ))}
                            </nav>

                            {/* Footer - CV Download */}
                            <motion.a
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                href="/cv.pdf"
                                download="Pamindu_Costa_CV.pdf"
                                className="w-full py-4 px-6 bg-linear-to-r from-light-secondary to-light-primary dark:from-dark-primary dark:to-dark-text text-white rounded-md font-medium text-center shadow-lg min-h-[44px] flex items-center justify-center gap-2"
                                onClick={onClose}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" x2="12" y1="15" y2="3" />
                                </svg>
                                {t('download_cv')}
                            </motion.a>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from 'next/navigation';
import { RollingText } from "./RollingText";
import { HamburgerButton } from "./HamburgerButton";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
    const t = useTranslations('HomePage');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="glass rounded-md px-4 md:px-6 py-3 flex items-center justify-between">
                        {/* Logo */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="text-xl md:text-2xl font-bold bg-linear-to-r from-light-secondary to-light-primary dark:from-dark-primary dark:to-dark-text bg-clip-text text-transparent cursor-pointer"
                            onClick={() => router.push(`/${locale}/#hero`)}
                        >
                            Pamindu Costa
                        </motion.div>

                        {/* Desktop Navigation Links */}
                        <div className="hidden md:flex items-center gap-8">
                            {[t('education'), t('projects'), t('contact')].map((item, index) => {
                                const sectionId = item === t('education') ? 'education' : item === t('projects') ? 'projects' : 'contact';

                                return (
                                    <motion.div
                                        key={item}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 + 0.2 }}
                                        className="group text-sm font-medium hover:text-light-secondary dark:hover:text-dark-primary transition-colors cursor-pointer"
                                        onClick={() => {
                                            // Check if we are on home page (ignoring hash)
                                            const currentPath = pathname?.split('#')[0];
                                            const isHomePage = currentPath === `/${locale}` || currentPath === `/${locale}/`;

                                            if (isHomePage) {
                                                const element = document.getElementById(sectionId);
                                                if (element) {
                                                    element.scrollIntoView({ behavior: 'smooth' });
                                                }
                                            } else {
                                                router.push(`/${locale}/#${sectionId}`);
                                            }
                                        }}
                                    >
                                        <RollingText text={item} />
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Desktop Theme Toggle & Language Switcher */}
                        <div className="hidden md:flex items-center gap-3">
                            <ThemeToggle />
                            <LanguageSwitcher />
                        </div>

                        {/* Mobile Hamburger Button */}
                        <div className="md:hidden">
                            <HamburgerButton
                                isOpen={isMobileMenuOpen}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            />
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
            />
        </>
    );
}

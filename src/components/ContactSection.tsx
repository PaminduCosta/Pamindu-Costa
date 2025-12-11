"use client";

import { useState } from "react";
import { SiGithub, SiLinkedin, SiFacebook, SiWhatsapp } from "react-icons/si";
import { HiMail, HiPhone } from "react-icons/hi";
import { useTranslations } from "next-intl";

import { RollingText } from "./RollingText";

export const ContactSection = () => {
    const t = useTranslations("HomePage");
    const [copied, setCopied] = useState(false);
    const phoneNumber = "+94760408817";

    const handlePhoneClick = () => {
        // Detect if mobile device
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        if (isMobile) {
            // On mobile, open dialer
            window.location.href = `tel:${phoneNumber}`;
        } else {
            // On desktop, copy to clipboard
            navigator.clipboard.writeText(phoneNumber).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            });
        }
    };

    return (
        <section className="relative py-24 px-8 md:px-16">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-5xl md:text-7xl font-bold text-light-text dark:text-dark-text mb-6">
                    {t("contact_me")}
                </h2>
                <p className="text-xl text-light-text/70 dark:text-dark-text/70 max-w-2xl mx-auto mb-12">
                    {t("contact_description")}
                </p>

                <div className="flex flex-col items-center gap-8">
                    {/* Buttons Container - Side by side on desktop, stacked on mobile */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=costapamindu7@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-light-accent dark:bg-dark-primary text-white text-lg font-medium rounded-md shadow-xl hover:scale-105 transition-transform duration-300"
                            style={{ perspective: "1000px" }} // Add perspective to parent just in case
                        >
                            <HiMail className="w-6 h-6" />
                            <RollingText text={t("say_hello")} className="text-white font-medium" />
                        </a>

                        <button
                            onClick={handlePhoneClick}
                            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-light-accent dark:bg-dark-primary text-white text-lg font-medium rounded-md shadow-xl hover:scale-105 transition-transform duration-300"
                            style={{ perspective: "1000px" }}
                        >
                            <HiPhone className="w-6 h-6" />
                            <RollingText
                                text={copied ? "Copied!" : phoneNumber}
                                className="text-white font-medium"
                            />
                        </button>
                    </div>

                    <div className="flex items-center gap-6 mt-4">
                        <a
                            href="https://www.linkedin.com/in/pamindu-bhanuka-costa-559586346/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-light-text/90 dark:text-dark-text/60 hover:text-light-accent dark:hover:text-dark-primary transition-colors duration-300"
                            aria-label="LinkedIn"
                        >
                            <SiLinkedin className="w-8 h-8" />
                        </a>
                        <a
                            href="https://web.facebook.com/profile.php?id=61584767612299"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-light-text/90 dark:text-dark-text/60 hover:text-light-accent dark:hover:text-dark-primary transition-colors duration-300"
                            aria-label="Twitter"
                        >
                            <SiFacebook className="w-8 h-8" />
                        </a>
                        <a
                            href="https://wa.me/94760408817"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-light-text/90 dark:text-dark-text/60 hover:text-light-accent dark:hover:text-dark-primary transition-colors duration-300"
                            aria-label="WhatsApp"
                        >
                            <SiWhatsapp className="w-8 h-8" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

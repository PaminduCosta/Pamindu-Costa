"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";
import { useTranslations } from "next-intl";

interface TimelineItem {
    id: number;
    title: string;
    institution: string;
    date: string;
    description: string;
    achievements?: string[];
}
export const Timeline = () => {
    const t = useTranslations("HomePage");

    const educationData: TimelineItem[] = [
        {
            id: 1,
            title: t("Education_list.0.title"),
            institution: t("Education_list.0.institution"),
            date: t("Education_list.0.date"),
            description: t("Education_list.0.description"),
        },
        {
            id: 2,
            title: t("Education_list.1.title"),
            institution: t("Education_list.1.institution"),
            date: t("Education_list.1.date"),
            description: t("Education_list.1.description"),
        },
        {
            id: 3,
            title: t("Education_list.2.title"),
            institution: t("Education_list.2.institution"),
            date: t("Education_list.2.date"),
            description: t("Education_list.2.description"),
        },
        {
            id: 4,
            title: t("Education_list.3.title"),
            institution: t("Education_list.3.institution"),
            date: t("Education_list.3.date"),
            description: t("Education_list.3.description"),
        }
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 relative pb-20">
            {/* Extended Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-light-primary/50 dark:via-dark-primary/50 to-transparent"></div>

            <div className="space-y-16">
                {educationData.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                    >
                        {/* Center Node */}
                        <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                            <div className="w-10 h-10 rounded-full bg-light-background dark:bg-dark-background border-4 border-light-primary dark:border-dark-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)] flex items-center justify-center">
                                <GraduationCap size={18} className="text-light-primary dark:text-dark-primary" />
                            </div>
                        </div>

                        {/* Content Card */}
                        <div className="ml-20 md:ml-0 md:w-1/2 md:px-12 group">
                            <div className="relative p-4 md:p-6 rounded-xl md:rounded-2xl bg-white/5 dark:bg-black/20 backdrop-blur-md border border-white/10 dark:border-white/5 shadow-lg hover:shadow-xl hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300 group-hover:-translate-y-1">
                                {/* Date Badge */}
                                <div className="absolute -top-4 left-6 bg-light-primary dark:bg-dark-primary text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md flex items-center gap-2">
                                    <Calendar size={12} />
                                    {item.date}
                                </div>

                                <div className="mt-4">
                                    <h3 className="text-xl md:text-2xl font-bold text-light-text dark:text-dark-text mb-1">
                                        {item.title}
                                    </h3>
                                    <div className="text-light-secondary dark:text-dark-primary font-medium mb-4 flex items-center gap-2">
                                        <BookOpen size={16} />
                                        {item.institution}
                                    </div>
                                    <p className="text-light-text/70 dark:text-dark-text/70 text-xs md:text-sm leading-relaxed mb-4">
                                        {item.description}
                                    </p>

                                    {/* Achievements */}
                                    {item.achievements && (
                                        <div className="border-t border-light-text/10 dark:border-dark-text/10 pt-4 mt-4">
                                            <h4 className="text-xs font-semibold text-light-text/50 dark:text-dark-text/50 uppercase tracking-wider mb-3 flex items-center gap-2">
                                                <Award size={14} />
                                                Key Achievements
                                            </h4>
                                            <ul className="space-y-2">
                                                {item.achievements.map((achievement, i) => (
                                                    <li key={i} className="text-sm text-light-text/80 dark:text-dark-text/80 flex items-start gap-2">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-light-secondary dark:bg-dark-primary mt-1.5 shrink-0"></span>
                                                        {achievement}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

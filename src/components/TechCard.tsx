import React from "react";

interface TechCardProps {
    name: string;
    icon?: React.ReactNode;
}

export const TechCard = ({ name, icon }: TechCardProps) => {
    return (
        <div className="group relative w-full aspect-square rounded-2xl bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:border-light-primary/50 dark:hover:border-dark-primary/50 hover:shadow-xl hover:shadow-light-primary/10 dark:hover:shadow-dark-primary/10">
            {/* Subtle Gradient Background on Hover */}
            <div className="absolute inset-0 bg-linear-to-br from-light-secondary/10 to-light-primary/10 dark:from-dark-primary/10 dark:to-dark-text/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                {/* Icon */}
                {icon && (
                    <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                        {icon}
                    </div>
                )}

                {/* Technology Name */}
                <h3 className="text-lg font-medium text-light-accent dark:text-dark-text text-center group-hover:text-light-primary dark:group-hover:text-dark-primary transition-colors duration-300">
                    {name}
                </h3>
            </div>
        </div>
    );
};

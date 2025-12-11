"use client";

import React from "react";

interface RollingIconProps {
    icon: React.ReactNode;
    className?: string; // Additional classes
}

export const RollingIcon = ({ icon, className }: RollingIconProps) => {
    return (
        <div className={`relative inline-block ${className}`} style={{ perspective: "1000px" }}>
            <div
                className="block transition-transform duration-500 will-change-transform transform-style-3d group-hover:rotate-x-90"
                style={{
                    transformStyle: "preserve-3d",
                    height: "1.25rem", // Approx 5 (w-5 h-5 is 1.25rem)
                    width: "1.25rem",
                }}
            >
                {/* Front Face */}
                <div
                    className="absolute inset-0 backface-hidden"
                    style={{ transform: "translateZ(0.625rem)" }} // Half of 1.25rem
                >
                    {icon}
                </div>

                {/* Bottom Face */}
                <div
                    className="absolute inset-0 backface-hidden flex items-center justify-center"
                    style={{
                        transform: "rotateX(-90deg) translateZ(0.625rem)",
                    }}
                >
                    {icon}
                </div>
            </div>
        </div>
    );
};

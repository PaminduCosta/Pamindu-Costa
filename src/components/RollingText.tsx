"use client";

import React from "react";

interface RollingTextProps {
    text: string;
    className?: string; // For text styling (font, color)
}

export const RollingText = ({ text, className }: RollingTextProps) => {
    // Use Intl.Segmenter to correctly split text into graphemes (important for Sinhala/complex scripts)
    const characters = React.useMemo(() => {
        if (typeof Intl !== 'undefined' && 'Segmenter' in Intl) {
            const segmenter = new Intl.Segmenter('si', { granularity: 'grapheme' });
            return Array.from(segmenter.segment(text)).map(segment => segment.segment);
        }
        return text.split("");
    }, [text]);

    return (
        <div className="relative flex items-center justify-center p-1 px-2">
            <span className="sr-only">{text}</span>
            {characters.map((char, index) => (
                <span
                    key={index}
                    className="group/letter relative inline-block text-center"
                    style={{
                        perspective: "1000px",
                        width: char === " " ? "0.3em" : "auto"
                    }}
                >
                    <span
                        className="block transition-transform duration-500 will-change-transform transform-style-3d group-hover:rotate-x-90"
                        style={{
                            transitionDelay: `${index * 30}ms`,
                            transformStyle: "preserve-3d",
                            height: "1.2em", // Defines the 'size' of the cube face roughly
                        }}
                    >
                        {/* Front Face (Initial) */}
                        <span
                            className={`block ${className} backface-hidden`}
                            style={{
                                transform: "translateZ(0.6em)",
                            }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </span>

                        {/* Bottom Face (Revealed on Hover) */}
                        {/* We position it 'below' in 3D space so when we rotate X by 90deg, it comes to front */}
                        <span
                            className={`absolute inset-0 block ${className} backface-hidden flex items-center justify-center`}
                            style={{
                                transform: "rotateX(-90deg) translateZ(0.6em)",
                            }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </span>
                    </span>
                </span>
            ))}
        </div>
    );
};

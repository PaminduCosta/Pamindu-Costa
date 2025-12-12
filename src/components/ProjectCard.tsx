"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

interface ProjectCardProps {
    title: string;
    status?: string;
    description: string;
    imageUrl: string;
    mobileImageUrl?: string;
}

export const ProjectCard = ({ title, status, description, imageUrl, mobileImageUrl }: ProjectCardProps) => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Detect if device supports touch
        setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    }, []);

    const handleCardClick = () => {
        if (isTouchDevice) {
            setShowOverlay(!showOverlay);
        }
    };
    return (
        <div className="w-full md:shrink-0 md:w-screen md:h-screen flex items-center justify-center px-6 md:px-12 py-8 md:py-0">
            <div
                className="group relative w-full max-w-5xl h-[70vh] md:h-[80vh] rounded-xl md:rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 hover:shadow-3xl"
                onClick={handleCardClick}
            >
                {/* Hero Image - Clean and unobstructed */}
                <div className="absolute inset-0">
                    {/* Mobile Image */}
                    <img
                        src={mobileImageUrl || imageUrl}
                        alt={description}
                        className="w-full h-full object-cover md:hidden"
                    />
                    {/* Desktop Image */}
                    <img
                        src={imageUrl}
                        alt={description}
                        className="hidden md:block w-full h-full object-cover transition-transform duration-1000 ease-out md:group-hover:scale-105"
                    />
                </div>
                {/* Description overlay - slides up on hover (desktop) or tap (mobile) */}
                <div className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-transform duration-700 ease-out flex items-center justify-center p-6 md:p-8 lg:p-12 ${isTouchDevice
                    ? (showOverlay ? 'translate-y-0' : 'translate-y-full')
                    : 'translate-y-full md:group-hover:translate-y-0'
                    }`}>
                    <div className="max-w-3xl text-center space-y-4 md:space-y-6 relative">
                        {/* Close button for mobile */}
                        {mounted && isTouchDevice && showOverlay && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowOverlay(false);
                                }}
                                className="mx-auto mb-4 w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                                aria-label="Close details"
                            >
                                <X className="w-5 h-5 text-white" />
                            </button>
                        )}

                        <h3 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white">
                            {title}
                        </h3>
                        <div className="w-16 md:w-20 h-1 bg-white/40 mx-auto"></div>
                        <p className="text-white/80 uppercase tracking-widest text-sm font-medium">{status}</p>
                        <p className="text-base md:text-lg lg:text-2xl text-white/90 leading-relaxed">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

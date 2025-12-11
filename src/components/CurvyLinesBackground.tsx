"use client";

import React, { useEffect, useRef } from "react";

export const CurvyLinesBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size to window size
        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();

        // Detect theme
        const getTheme = (): "light" | "dark" => {
            return document.documentElement.classList.contains("dark") ? "dark" : "light";
        };

        let theme: "light" | "dark" = getTheme();

        // Theme colors
        const colors = {
            light: {
                lines: [
                    "rgba(59, 130, 246, 0.15)",  // Blue
                    "rgba(147, 51, 234, 0.12)",  // Purple
                    "rgba(236, 72, 153, 0.1)",   // Pink
                    "rgba(14, 165, 233, 0.13)",  // Sky
                ],
            },
            dark: {
                lines: [
                    "rgba(96, 165, 250, 0.2)",   // Lighter Blue
                    "rgba(168, 85, 247, 0.18)",  // Lighter Purple
                    "rgba(244, 114, 182, 0.15)", // Lighter Pink
                    "rgba(56, 189, 248, 0.17)",  // Lighter Sky
                ],
            },
        };

        // Wave configuration
        interface Wave {
            amplitude: number;
            frequency: number;
            phase: number;
            speed: number;
            yOffset: number;
            color: string;
        }

        const waves: Wave[] = [
            { amplitude: 130, frequency: 0.002, phase: 0, speed: 0.0015, yOffset: 0.2, color: "" },
            { amplitude: 100, frequency: 0.0025, phase: Math.PI / 2, speed: 0.002, yOffset: 0.4, color: "" },
            { amplitude: 160, frequency: 0.0015, phase: Math.PI, speed: 0.0012, yOffset: 0.6, color: "" },
            { amplitude: 115, frequency: 0.003, phase: Math.PI * 1.5, speed: 0.0018, yOffset: 0.8, color: "" },
        ];

        // Assign colors based on theme
        const updateWaveColors = () => {
            const currentColors = colors[theme].lines;
            waves.forEach((wave, index) => {
                wave.color = currentColors[index % currentColors.length];
            });
        };
        updateWaveColors();

        // Animation
        let animationFrameId: number;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            waves.forEach((wave) => {
                ctx.beginPath();
                ctx.strokeStyle = wave.color;
                ctx.lineWidth = 3;

                for (let x = 0; x < canvas.width; x++) {
                    const y =
                        canvas.height * wave.yOffset +
                        Math.sin(x * wave.frequency + wave.phase) * wave.amplitude;

                    if (x === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }

                ctx.stroke();
                wave.phase += wave.speed;
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        // Handle window resize
        const handleResize = () => {
            setCanvasSize();
        };

        // Observe theme changes
        const observer = new MutationObserver(() => {
            const newTheme = getTheme();
            if (newTheme !== theme) {
                theme = newTheme;
                updateWaveColors();
            }
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", handleResize);
            observer.disconnect();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="w-full h-full"
            style={{ display: "block" }}
        />
    );
};

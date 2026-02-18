"use client";

import { useRef, useEffect, useMemo } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useCanvasImages } from "@/hooks/useCanvasImages";

const TOTAL_FRAMES = 120;

export default function ScrollyCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { images, loading, progress } = useCanvasImages(TOTAL_FRAMES);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Smooth out the scroll progress for less "jumpy" frame transitions
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 300,
        damping: 30,
        restDelta: 0.001
    });

    const frameIndex = useTransform(
        smoothProgress,
        [0, 1],
        [0, TOTAL_FRAMES - 1]
    );

    const renderCanvas = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || !images[index]) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = images[index];

        // Object-fit: cover logic
        const canvasAspect = canvas.width / canvas.height;
        const imgAspect = img.width / img.height;

        let drawWidth = canvas.width;
        let drawHeight = canvas.height;
        let offsetX = 0;
        let offsetY = 0;

        if (canvasAspect > imgAspect) {
            drawHeight = canvas.width / imgAspect;
            offsetY = (canvas.height - drawHeight) / 2;
        } else {
            drawWidth = canvas.height * imgAspect;
            offsetX = (canvas.width - drawWidth) / 2;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    useEffect(() => {
        const handleResize = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const dpr = window.devicePixelRatio || 1;
            // Set physical pixels
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;

            // Re-render current frame on resize
            const currentIndex = Math.floor(frameIndex.get());
            renderCanvas(currentIndex);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [images, frameIndex]);

    useEffect(() => {
        return frameIndex.onChange((v) => {
            renderCanvas(Math.floor(v));
        });
    }, [images, frameIndex]);

    return (
        <div ref={containerRef} className="relative h-[500vh] bg-background">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {loading ? (
                    <div className="flex h-full w-full items-center justify-center bg-background text-foreground">
                        <div className="text-center">
                            <div className="mb-4 text-4xl font-bold tracking-tighter">LOADING</div>
                            <div className="h-1 w-64 bg-white/10 overflow-hidden rounded-full">
                                <motion.div
                                    className="h-full bg-accent"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                />
                            </div>
                            <div className="mt-2 text-xs opacity-50 uppercase tracking-widest">{progress}%</div>
                        </div>
                    </div>
                ) : (
                    <canvas
                        ref={canvasRef}
                        className="block h-full w-full"
                        style={{ width: "100%", height: "100%" }}
                    />
                )}
            </div>
        </div>
    );
}

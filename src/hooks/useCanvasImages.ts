"use client";

import { useEffect, useState, useRef } from "react";

export function useCanvasImages(totalFrames: number) {
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const loadingStarted = useRef(false);

    useEffect(() => {
        if (loadingStarted.current) return;
        loadingStarted.current = true;

        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        const loadImage = (index: number) => {
            const img = new Image();
            const frameNum = index.toString().padStart(3, "0");
            // Filename: frame_000_delay-0.05s.webp
            img.src = `/sequence/frame_${frameNum}_delay-0.05s.webp`;
            img.onload = () => {
                loadedImages[index] = img;
                loadedCount++;
                setProgress(Math.floor((loadedCount / totalFrames) * 100));

                if (loadedCount === totalFrames) {
                    setImages(loadedImages);
                    setLoading(false);
                }
            };
            img.onerror = () => {
                console.error(`Failed to load image at index ${index}`);
                loadedCount++; // Still increment to avoid stuck loading
                if (loadedCount === totalFrames) {
                    setImages(loadedImages);
                    setLoading(false);
                }
            };
        };

        for (let i = 0; i < totalFrames; i++) {
            loadImage(i);
        }
    }, [totalFrames]);

    return { images, loading, progress };
}

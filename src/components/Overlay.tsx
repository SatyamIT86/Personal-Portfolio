"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

    const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45], [0, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.25, 0.45], [50, -50]);

    const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.75], [0, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.55, 0.75], [50, -50]);

    const opacity4 = useTransform(scrollYProgress, [0.8, 0.9, 0.98], [0, 1, 0]);
    const y4 = useTransform(scrollYProgress, [0.8, 0.98], [50, -50]);

    return (
        <div ref={containerRef} className="pointer-events-none absolute inset-0 z-10 h-[500vh]">
            <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center px-10 text-white">

                {/* Intro */}
                <motion.section
                    style={{ opacity: opacity1, y: y1 }}
                    className="absolute inset-x-0 flex flex-col items-center text-center px-6"
                >
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-4 uppercase">
                        Satyam Pandey.
                    </h1>
                    <p className="text-lg md:text-2xl opacity-60 font-light tracking-widest uppercase">
                        Building Products that scale.
                    </p>
                </motion.section>

                {/* Beat 1 */}
                <motion.section
                    style={{ opacity: opacity2, y: y2 }}
                    className="absolute inset-x-0 md:inset-auto md:left-20 max-w-2xl px-8 md:px-0 text-center md:text-left"
                >
                    <h2 className="text-xl md:text-4xl font-medium tracking-tight leading-tight">
                        Crafting <span className="text-accent uppercase">production-ready</span> <br />
                        <span className="italic uppercase">Flutter & Node.js</span> experiences.
                    </h2>
                </motion.section>

                {/* Beat 2 */}
                <motion.section
                    style={{ opacity: opacity3, y: y3 }}
                    className="absolute inset-x-0 md:inset-auto md:right-20 max-w-2xl px-8 md:px-0 text-center md:text-right"
                >
                    <h2 className="text-2xl md:text-5xl font-medium tracking-tight leading-tight">
                        Real-time systems <br />
                        at <span className="text-accent uppercase">production scale.</span>
                    </h2>
                </motion.section>

                {/* Beat 3 (Final) */}
                <motion.section
                    style={{ opacity: opacity4, y: y4 }}
                    className="absolute inset-x-0 md:inset-auto md:left-20 max-w-2xl px-8 md:px-0 text-center md:text-left"
                >
                    <h2 className="text-2xl md:text-5xl font-medium tracking-tight leading-tight">
                        Systems built for the future. <br />
                        Engineered for <span className="text-accent uppercase italic">Impact.</span>
                    </h2>
                </motion.section>

            </div>
        </div>
    );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

interface ProjectModalProps {
    project: any;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    // Prevent scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md"
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-8 pointer-events-none">
                        <motion.div
                            layoutId={`card-${project.title}`}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto pointer-events-auto bg-background border border-border rounded-3xl p-8 md:p-12 shadow-2xl custom-scrollbar"
                        >
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors"
                                aria-label="Close modal"
                            >
                                <X size={20} className="text-foreground" />
                            </button>

                            <div className="space-y-12">
                                {/* Header */}
                                <div>
                                    <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-accent mb-4">Case Study</h3>
                                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">{project.title}</h2>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t: string) => (
                                            <span key={t} className="px-3 py-1 text-xs font-medium rounded-full bg-foreground/5 border border-border">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Overview */}
                                <section className="space-y-4">
                                    <h4 className="text-xl font-semibold">Overview</h4>
                                    <p className="text-lg text-foreground/60 font-light leading-relaxed">
                                        {project.fullDescription || project.description}
                                    </p>
                                </section>

                                <div className="grid gap-12 md:grid-cols-2">
                                    {/* Features */}
                                    <section className="space-y-6">
                                        <h4 className="text-xl font-semibold">Key Features</h4>
                                        <ul className="space-y-3">
                                            {project.features.map((f: string, i: number) => (
                                                <li key={i} className="flex items-start gap-3 text-foreground/60 font-light">
                                                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </section>

                                    {/* Challenges */}
                                    <section className="space-y-6">
                                        <h4 className="text-xl font-semibold">Technical Challenges</h4>
                                        <div className="space-y-4">
                                            {project.challenges.map((c: any, i: number) => (
                                                <div key={i} className="space-y-1">
                                                    <p className="font-medium text-foreground/90">{c.title}</p>
                                                    <p className="text-sm text-foreground/50 font-light leading-relaxed">{c.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                </div>

                                {/* Takeaway */}
                                <footer className="pt-10 border-t border-border">
                                    <div className="rounded-2xl bg-accent/[0.03] border border-accent/10 p-6">
                                        <h4 className="text-sm font-bold uppercase tracking-widest text-accent mb-2">Production Mindset</h4>
                                        <p className="text-foreground/70 font-light leading-relaxed">
                                            {project.takeaway}
                                        </p>
                                    </div>

                                    <div className="mt-8 flex justify-end">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-bold tracking-tight hover:bg-accent transition-colors"
                                        >
                                            View Repository
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l10-10M17 17V7H7" /></svg>
                                        </a>
                                    </div>
                                </footer>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}

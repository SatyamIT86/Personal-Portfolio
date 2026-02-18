"use client";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section id="contact" className="relative z-20 bg-background px-6 py-20 md:px-20 border-t border-white/5">
            <div className="mx-auto max-w-7xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                        Ready to build something?
                    </h2>
                    <p className="text-xl text-foreground/60 max-w-2xl mx-auto font-light leading-relaxed">
                        I’m always open to discussing product design, engineering, or partnership opportunities.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-6 pt-8">
                        <a
                            href="mailto:pandeysatyam9833@gmail.com"
                            className="px-8 py-4 rounded-full bg-accent text-background font-bold hover:bg-white transition-colors"
                        >
                            Email Me
                        </a>

                        <a
                            href="/resume.pdf"
                            download="Satyam_Pandey_Resume.pdf"
                            className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 transition-colors font-medium flex items-center gap-2 group"
                        >
                            <span>Download Resume</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="group-hover:translate-y-1 transition-transform"
                            >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                        </a>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-8 pt-12 opacity-60">
                        <a
                            href="https://www.linkedin.com/in/-satyam-pandey"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent transition-colors uppercase tracking-widest text-sm font-medium"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/SatyamIT86"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent transition-colors uppercase tracking-widest text-sm font-medium"
                        >
                            GitHub
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

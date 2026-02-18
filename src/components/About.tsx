"use client";

import { motion } from "framer-motion";

const SKILLS = [
    "Flutter", "Dart", "Node.js", "Express.js",
    "MongoDB", "Docker", "Firebase", "FastAPI",
    "REST APIs", "WebSockets", "Postman", "Next.js",
    "CI/CD", "Github Actions"
];

export default function About() {
    return (
        <section id="about" className="relative z-20 bg-background px-6 py-20 md:px-20 border-t border-white/5">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-20 md:grid-cols-2 items-start">

                    {/* About Me */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">About Me</h2>
                        <p className="text-xl md:text-2xl text-foreground font-light leading-relaxed">
                            I’m a Full Stack Developer with a strong focus on Flutter and backend development, building cross-platform applications and real-time systems.
                        </p>
                        <p className="text-lg text-foreground/60 leading-relaxed font-light">
                            I have a solid understanding of production environments and user-impacting systems. I’ve worked on video conferencing apps and Docker-based monitoring tools. I’m driven by learning, ownership, and building software that scales beyond demos.
                        </p>

                        <div className="pt-10">
                            <h3 className="text-sm font-semibold uppercase tracking-widest text-accent mb-6">Primary Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {SKILLS.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 rounded-full border border-border bg-foreground/[0.02] text-sm font-medium hover:border-accent/50 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Why Hire Me */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl border border-border bg-foreground/[0.01] p-8 md:p-12 backdrop-blur-sm"
                    >
                        <h2 className="text-3xl font-bold mb-8">Why Hire Me</h2>
                        <div className="space-y-6">
                            <HirePoint
                                title="Beyond Features & UI"
                                description="I think beyond features and UI. I design systems with real users, edge cases, and long-term scalability in mind — from API design to deployment."
                            />
                            <HirePoint
                                title="Production Mindset"
                                description="I understand stability, user impact, and edge cases — not just code that works in demos."
                            />
                            <HirePoint
                                title="Adaptable & Deep"
                                description="Comfortable in fast-moving startup environments. Quick to adapt and deeply invested in learning systems end-to-end."
                            />
                        </div>

                        <div className="mt-12 rounded-2xl bg-accent/[0.03] border border-accent/10 p-6">
                            <p className="text-sm text-accent font-medium leading-relaxed italic">
                                "I don’t just build features — I aim to build products that hold up in the real world."
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

function HirePoint({ title, description }: { title: string, description: string }) {
    return (
        <div className="space-y-2">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-foreground/60 font-light leading-relaxed">
                {description}
            </p>
        </div>
    );
}

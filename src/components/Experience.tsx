"use client";

import { motion } from "framer-motion";

const EXPERIENCE = [
    {
        company: "Filament AI",
        role: "App Developer",
        duration: "Nov 2025 – Present",
        points: [
            "Built and maintained Flutter-based cross-platform applications.",
            "Integrated backend APIs and handled authentication and data flow.",
            "Collaborated in debugging, testing, and feature implementation.",
            "Gained hands-on experience with production code in agile workflows."
        ]
    },
    {
        company: "Allied Digital Services Limited",
        role: "Desktop Support Engineer (CSD)",
        duration: "July 2024 – Present",
        points: [
            "Provided L1/L2 technical support for enterprise users.",
            "Troubleshot Windows OS, networking, and Microsoft products.",
            "Supported software installations and ITSM incident management.",
            "Developed a strong troubleshooting mindset in enterprise environments."
        ]
    }
];

const EDUCATION = [
    {
        school: "Thakur College of Science & Commerce, Mumbai",
        degree: "Bachelor of Science in Information Technology (BSc IT)",
        duration: "2021 – 2024",
        subtitle: "Affiliated to the University of Mumbai",
        detail: "CGPA: 7.20",
        description: "Completed a comprehensive undergraduate program in Information Technology with a strong focus on software development, databases, and core computing concepts."
    },
    {
        school: "Maharashtra State Board",
        degree: "Higher Secondary Certificate (HSC) – Science",
        duration: "2021",
        detail: "Result: 80.67%",
        description: "Studied Physics, Chemistry, Mathematics, and Information Technology, building a solid foundation in logical reasoning and technical fundamentals."
    },
    {
        school: "Maharashtra State Board, Mumbai Division",
        degree: "Secondary School Certificate (SSC)",
        duration: "2019",
        detail: "Result: 60.60%",
        description: "Completed secondary education with core subjects, developing academic discipline and problem-solving skills."
    }
];

export default function Experience() {
    return (
        <section id="experience" className="relative z-20 bg-background px-6 py-20 md:px-20 border-t border-white/5">
            <div className="mx-auto max-w-7xl">
                <div className="space-y-20">

                    {/* Work Experience */}
                    <div className="grid gap-12 md:grid-cols-3">
                        <div className="md:sticky md:top-32 h-fit">
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Work Experience</h2>
                            <p className="mt-4 text-foreground/40 text-lg">Building through internship and enterprise support.</p>
                        </div>

                        <div className="md:col-span-2 space-y-12">
                            {EXPERIENCE.map((job, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group relative border-l border-white/10 pl-8 pb-12"
                                >
                                    <div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
                                        <div>
                                            <h3 className="text-2xl font-bold">{job.role}</h3>
                                            <p className="text-accent/80 font-medium">{job.company}</p>
                                        </div>
                                        <span className="text-sm font-mono opacity-40 uppercase tracking-widest">{job.duration}</span>
                                    </div>
                                    <ul className="space-y-3">
                                        {job.points.map((point, j) => (
                                            <li key={j} className="text-foreground/60 font-light leading-relaxed relative pl-5">
                                                <span className="absolute left-0 top-3 h-1 w-1 bg-white/20 rounded-full" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div id="education" className="grid gap-12 md:grid-cols-3">
                        <div className="md:sticky md:top-32 h-fit">
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Education</h2>
                        </div>

                        <div className="md:col-span-2 space-y-8">
                            {EDUCATION.map((edu, i) => (
                                <div key={i} className="border border-border bg-foreground/[0.01] p-8 rounded-2xl backdrop-blur-sm">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                                        Riverside: Theme-aware education.
                                        <h3 className="text-2xl font-bold">{edu.degree}</h3>
                                        <span className="text-sm font-mono opacity-40 uppercase tracking-widest">{edu.duration}</span>
                                    </div>
                                    <p className="text-accent/80 font-medium">{edu.school}</p>
                                    {edu.subtitle && <p className="text-sm text-foreground/40 mt-1">{edu.subtitle}</p>}
                                    <p className="mt-2 text-foreground/80 font-semibold">{edu.detail}</p>
                                    <p className="mt-4 text-foreground/60 font-light leading-relaxed">{edu.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

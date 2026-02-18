"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
];

import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll lock
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "circOut" }}
                className="fixed top-8 left-0 right-0 z-[100] flex justify-center px-6 pointer-events-none"
            >
                <div className={cn(
                    "flex items-center gap-1 p-1.5 rounded-full border border-border bg-background/5 backdrop-blur-xl pointer-events-auto transition-all duration-500 shadow-lg",
                    scrolled ? "bg-background/40 shadow-2xl" : ""
                )}>
                    {/* Desktop Items */}
                    <div className="hidden md:flex items-center gap-1">
                        {NAV_ITEMS.map((item, i) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className={cn(
                                    "px-5 py-2 rounded-full text-xs font-medium tracking-widest uppercase transition-all duration-300",
                                    i === 0
                                        ? "bg-foreground/5 text-foreground"
                                        : "text-foreground/40 hover:text-foreground hover:bg-foreground/5"
                                )}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex md:hidden h-9 w-9 items-center justify-center rounded-full hover:bg-foreground/5 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>

                    <div className="ml-1 pl-2 border-l border-border h-6 flex items-center">
                        <ThemeToggle />
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        className="fixed inset-0 z-[90] bg-background/60 md:hidden flex flex-col items-center justify-center p-8 space-y-8"
                    >
                        {NAV_ITEMS.map((item, i) => (
                            <motion.a
                                key={item.label}
                                href={item.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                onClick={() => setIsOpen(false)}
                                className="text-3xl font-bold tracking-tight text-foreground hover:text-accent transition-colors"
                            >
                                {item.label}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

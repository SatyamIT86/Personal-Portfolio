"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import ProjectModal from "@/components/ProjectModal";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <main className="relative min-h-screen selection:bg-accent selection:text-background">
      <Navbar />

      {/* Hero Scrollytelling Section */}
      <section className="relative">
        <ScrollyCanvas />
        <Overlay />
      </section>

      {/* Narrative & Profile */}
      <About />

      {/* Projects Section */}
      <Projects onSelectProject={setSelectedProject} />

      {/* Career & Education */}
      <Experience />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/5 bg-background">
        <p className="opacity-30 text-sm tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Satyam Pandey. Built with speed.
        </p>
      </footer>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}

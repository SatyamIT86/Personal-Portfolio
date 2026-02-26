"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

const PROJECTS = [
  {
    title: "Face KYC Web App",
    description: "Production-ready Face Recognition system with real-time AI validation, liveness detection, and automated image storage.",
    fullDescription: "Enterprise-grade Face Recognition system using a modern monolithic architecture. Captures multi-angle face data with real-time AI validation to ensure high-quality registration and spoof prevention.",
    tech: ["FastAPI", "React", "TypeScript", "MediaPipe", "Docker", "Cloudinary"],
    features: [
      "Real-time AI validation for blur, lighting, and alignment.",
      "Liveness detection via multi-angle consistency analysis.",
      "Super Admin approval workflow for manual verification.",
      "Scalable multi-use registration links (up to 1000 users).",
      "Secure automated storage using Cloudinary integration."
    ],
    challenges: [
      {
        title: "Edge AI Optimization",
        description: "Implementing MediaPipe/OpenCV logic to provide sub-second latency feedback for face alignment on both web and backend."
      },
      {
        title: "Large-Scale Biometric Security",
        description: "Designing a secure pipeline for encrypting sensitive face data across FastAPI and MongoDB Atlas."
      }
    ],
    takeaway: "Prioritizes data integrity and security, utilizing AI to automate and secure the onboarding process for large-scale organizations.",
    link: "https://github.com/SatyamIT86",
  },
  {
    title: "YouTube Backend API",
    description: "Production-ready RESTful backend system with secure JWT authentication, modular MVC architecture, and file upload handling.",
    fullDescription: "Production-ready RESTful backend system built using Node.js and Express, designed with modular architecture. Implements secure authentication, structured routing, database modeling, and file upload handling to simulate a scalable real-world backend platform.",
    tech: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Multer"],
    features: [
      "JWT-based user authentication & authorization.",
      "Secure password hashing and token validation.",
      "RESTful CRUD APIs for users and resources.",
      "File upload handling using Multer integration.",
      "Protected routes with middleware-based access control."
    ],
    challenges: [
      {
        title: "Authentication & Token Security",
        description: "Designing a secure JWT authentication flow including login, protected routes, and middleware-based token validation to prevent unauthorized access."
      },
      {
        title: "Scalable Backend Architecture",
        description: "Structuring the application into routes, controllers, models, and middlewares to maintain separation of concerns and production-level maintainability."
      }
    ],
    takeaway: "Prioritizes clean architecture, secure authentication, and scalable backend structure — simulating real-world API development practices used in modern SaaS platforms.",
    link: "https://github.com/SatyamIT86/Backend-with-javascript",
  },
  {
    title: "Docker Alert System",
    description: "Production-ready container monitoring delivering real-time push notifications for container lifecycle events.",
    fullDescription: "Production-ready container monitoring system delivering real-time push notifications. Tracks container lifecycles and resource usage (CPU/Memory) with smart thresholding and anti-spam logic.",
    tech: ["FastAPI", "Python", "FCM", "Flutter", "Docker API"],
    features: [
      "Real-time Docker socket event detection (Start/Stop/Kill).",
      "CPU and Memory resource usage auditing.",
      "FCM mobile push notifications with severity levels.",
      "Anti-spam logic preventing duplicate notification flood.",
      "Windows 'Monitor Mode' for live dashboard viewing."
    ],
    challenges: [
      {
        title: "Docker API Safety",
        description: "Implementing low-overhead listeners for the Docker socket while ensuring security and resource isolation."
      },
      {
        title: "Notification Management",
        description: "Developing custom cooldown and deduplication algorithms to manage noisy container state transitions."
      }
    ],
    takeaway: "Engineered for reliability and noise reduction, providing a clear window into infrastructure health without drowning in data.",
    link: "https://github.com/SatyamIT86/Docker-Monitoring-System",
  },
  {
    title: "Zoom Clone",
    description: "A complete video conferencing solution with Google Sign-In, screen sharing, real-time chat, and history tracking.",
    fullDescription: "A high-performance video conferencing solution built for seamless real-time communication. Combines Flutter's cross-platform power with Jitsi Meet's robust media engine and Firebase's scalable infrastructure.",
    tech: ["Flutter", "Firebase", "Jitsi Meet SDK", "Cloud Firestore"],
    features: [
      "Real-time video/audio calling with Jitsi Meet engine.",
      "Screen sharing and interactive real-time chat.",
      "Firebase Google Sign-In and persistence.",
      "Meeting history tracking and participant management.",
      "Picture-in-Picture and tile view support."
    ],
    challenges: [
      {
        title: "SDK Synchronization",
        description: "Managing the complex internal state of Jitsi Meet SDK with Flutter's reactive UI layer."
      },
      {
        title: "Presence Consistency",
        description: "Implementing reliable join/leave detection across unstable mobile network connections."
      }
    ],
    takeaway: "Designed with a focus on high availability and intuitive UX, moving beyond simple RTC implementations to a complete, user-ready product.",
    link: "https://github.com/SatyamIT86/Zoom-Clone",
  },
];

export default function Projects({ onSelectProject }: { onSelectProject: (p: any) => void }) {
  return (
    <section id="projects" className="relative z-20 min-h-screen bg-background px-6 py-20 md:px-20">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-4xl font-bold tracking-tight md:text-6xl"
        >
          Projects
        </motion.h2>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              index={i}
              onClick={() => onSelectProject(project)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, onClick }: { project: any; index: number; onClick: () => void }) {
  return (
    <motion.div
      layoutId={`card-${project.title}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-foreground/[0.02] p-6 md:p-8 backdrop-blur-md transition-shadow hover:shadow-2xl hover:shadow-accent/10"
    >
      <div className="flex flex-col justify-between h-full">
        <div>
          <h3 className="mb-4 text-2xl font-semibold md:text-3xl">
            {project.title}
          </h3>
          <p className="mb-8 text-lg opacity-60 leading-relaxed font-light">
            {project.description}
          </p>
        </div>

        <div className="flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-sm font-medium uppercase tracking-widest">Read Case Study</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:translate-x-1 transition-transform"
          >
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  GraduationCap,
  ArrowRight,
  Code2,
  Layers,
  Database,
  PenTool,
} from "lucide-react";

const colors = {
  bg: "#090d16",
  panel: "#0f172a",
  panelSoft: "#131b2e",
  border: "#1e293b",
  text: "#e2e8f0",
  textDim: "#94a3b8",
  cyan: "#22d3ee",
  teal: "#2dd4bf",
};

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle both ways so the animation replays every time the
        // section crosses into or out of view, not just once.
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease-out ${delay}ms, transform 0.7s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function PageBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" style={{ backgroundColor: colors.bg }}>
      <div
        className="absolute inset-0 opacity-[0.19]"
        style={{
          backgroundImage: "url(/images/african-pattern-color.jpg)",
          backgroundSize: "400px",
          backgroundRepeat: "repeat",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, rgba(9,13,22,0.25) 0%, rgba(9,13,22,0.55) 40%, ${colors.bg} 100%)`,
        }}
      />
    </div>
  );
}

function Divider() {
  return (
    <div className="relative w-full h-6 md:h-8 overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url(/images/african-pattern-dark.jpg)",
          backgroundSize: "auto 100%",
          backgroundRepeat: "repeat-x",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, ${colors.bg} 0%, transparent 12%, transparent 88%, ${colors.bg} 100%)`,
        }}
      />
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="h-px w-8" style={{ backgroundColor: colors.teal }} />
      <span className="text-xs tracking-[0.2em] uppercase" style={{ color: colors.teal }}>
        {children}
      </span>
    </div>
  );
}

function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`relative rounded-xl border backdrop-blur-md p-6 ${className}`}
      style={{ backgroundColor: "rgba(19,27,46,0.55)", borderColor: colors.border }}
    >
      {children}
    </div>
  );
}

const projects = [
  {
    name: "Smart University Academic System (SUAS)",
    desc: "A JavaFX desktop application built from the ground up for university academic management — student records, scheduling, and administration in one interface.",
    features: [
      "Collapsible sidebar navigation with a custom ThemeManager for dark/light mode",
      "Office-hours conflict detection to prevent scheduling overlaps",
      "Sequential ID renumbering for consistent record-keeping",
    ],
    stack: ["Java", "MySQL"],
    role: "Led development within a 3-person team",
  },
  {
    name: "Student ID Card Generation Platform",
    desc: "A web platform built for PKFokam to generate and manage student ID cards, developed as a supervised group project.",
    features: [
      "End-to-end ID card generation and data integration",
      "Clean, structured UI/UX for administrative use",
      "Form handling and bulk data import",
    ],
    stack: ["Next.js", "JavaScript", "MySQL"],
    role: "Group 3 Web Design project, supervised by Dr. Severin KAKEU",
  },
];

const skillGroups = [
  { title: "Languages", icon: Code2, items: ["Java", "JavaScript", "Python", "SQL"] },
  { title: "Frameworks", icon: Layers, items: ["Next.js", "JavaFX", "React"] },
  { title: "Databases & Tools", icon: Database, items: ["MySQL", "Git", "Jira", "Confluence"] },
  { title: "Design", icon: PenTool, items: ["Figma", "UI/UX Design"] },
];

export default function JasonPortfolio() {
  return (
    <div className="relative min-h-screen" style={{ color: colors.text }}>
      <PageBackground />

      <div className="relative z-10">
        <header className="sticky top-0 z-20 backdrop-blur border-b" style={{ borderColor: colors.border, backgroundColor: "rgba(9,13,22,0.8)" }}>
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <span className="font-semibold tracking-wide">Jason Kuate</span>
            <nav className="hidden sm:flex gap-6 text-sm" style={{ color: colors.textDim }}>
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              <a href="#skills" className="hover:text-white transition-colors">Skills</a>
              <a href="#education" className="hover:text-white transition-colors">Education</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </nav>
          </div>
        </header>

        <section className="max-w-6xl mx-auto px-6 pt-16 pb-12 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div>
              <p className="text-sm tracking-[0.2em] uppercase mb-4" style={{ color: colors.cyan }}>
                QA Intern · PKFokam Research Center
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Building Full-Stack Solutions with{" "}
                <span style={{ color: colors.teal }}>Rhythm &amp; Precision</span>
              </h1>
              <p className="text-base leading-relaxed mb-8" style={{ color: colors.textDim }}>
                B.Sc. Computing &amp; Software Engineering student at PKFokam Institute
                of Excellence, currently a QA Intern at PKFokam Research Center on the
                KFA e-learning platform. I build full-stack academic tools with the
                same discipline I bring to testing them.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-transform hover:scale-[1.02]" style={{ backgroundColor: colors.teal, color: colors.bg }}>
                  View Projects <ArrowRight size={16} />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium border transition-colors hover:bg-white/5" style={{ borderColor: colors.border, color: colors.text }}>
                  Get in Touch
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div
              className="group relative mx-auto w-full max-w-sm aspect-[7/10] rounded-2xl overflow-hidden cursor-pointer"
              style={{ transition: "transform 0.5s ease" }}
            >
              <div
                className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
                style={{
                  backgroundImage: "url(/images/jason-photo.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center top",
                }}
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 mix-blend-overlay"
                style={{
                  backgroundImage: "url(/images/african-pattern-dark.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(180deg, transparent 70%, rgba(9,13,22,0.5) 100%)`,
                }}
              />
              <div
                className="absolute -inset-px rounded-2xl border-2 border-transparent transition-all duration-500 group-hover:border-[rgba(45,212,191,0.7)] pointer-events-none"
              />
            </div>
          </Reveal>
        </section>

        <Divider />

        <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
          <Reveal>
            <SectionLabel>Academic Projects</SectionLabel>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={i * 120}>
                <GlassCard>
                  <h3 className="text-lg font-semibold mb-2">{p.name}</h3>
                  <p className="text-xs mb-4" style={{ color: colors.cyan }}>{p.role}</p>
                  <p className="text-sm mb-4" style={{ color: colors.textDim }}>{p.desc}</p>
                  <ul className="space-y-2 mb-5">
                    {p.features.map((f) => (
                      <li key={f} className="text-sm flex gap-2" style={{ color: colors.text }}>
                        <span style={{ color: colors.teal }}>—</span> {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-2.5 py-1 rounded-full border"
                        style={{ borderColor: colors.border, color: colors.teal }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </section>

        <Divider />

        <section id="skills" className="max-w-6xl mx-auto px-6 py-16">
          <Reveal>
            <SectionLabel>Technical Skills</SectionLabel>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {skillGroups.map((g, i) => {
              const Icon = g.icon;
              return (
                <Reveal key={g.title} delay={i * 100}>
                  <GlassCard className="!p-5">
                    <Icon size={18} style={{ color: colors.cyan }} className="mb-3" />
                    <h4 className="text-sm font-semibold mb-3">{g.title}</h4>
                    <ul className="space-y-1.5">
                      {g.items.map((it) => (
                        <li key={it} className="text-sm" style={{ color: colors.textDim }}>
                          {it}
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </Reveal>
              );
            })}
          </div>
        </section>

        <Divider />

        <section id="education" className="max-w-6xl mx-auto px-6 py-16">
          <Reveal>
            <SectionLabel>Education</SectionLabel>
          </Reveal>
          <Reveal delay={100}>
            <GlassCard className="flex gap-5">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "rgba(45,212,191,0.12)" }}
              >
                <GraduationCap size={20} style={{ color: colors.teal }} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">B.Sc. Computing &amp; Software Engineering</h4>
                <p className="text-sm mb-2" style={{ color: colors.cyan }}>
                  PKFokam Institute of Excellence — Expected 2028
                </p>
                <p className="text-sm" style={{ color: colors.textDim }}>
                  Coursework and academic projects spanning desktop application
                  development, database design, and full-stack web platforms.
                </p>
              </div>
            </GlassCard>
          </Reveal>
        </section>

        <Divider />

        <footer id="contact" className="max-w-6xl mx-auto px-6 py-16">
          <Reveal>
            <SectionLabel>Get in Touch</SectionLabel>
            <div className="flex flex-wrap gap-x-10 gap-y-4">
              <a href="mailto:kuatejason1@gmail.com" className="flex items-center gap-2 text-sm hover:text-white transition-colors" style={{ color: colors.textDim }}>
                <Mail size={16} style={{ color: colors.teal }} /> kuatejason1@gmail.com
              </a>
              <a href="https://github.com/JK-codify" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-white transition-colors" style={{ color: colors.textDim }}>
                <Github s ize={16} style={{ color: colors.teal }} /> JK-codify
              </a>
              <a href="https://linkedin.com/in/jason-kuate-a61577356" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-white transition-colors" style={{ color: colors.textDim }}>
                <Linkedin size={16} style={{ color: colors.teal }} /> jason-kuate
              </a>
              <span className="flex items-center gap-2 text-sm" style={{ color: colors.textDim }}>
                <MapPin size={16} style={{ color: colors.teal }} /> Yaoundé, Centre
              </span>
            </div>
            <p className="text-xs mt-10" style={{ color: colors.border }}>
              © {new Date().getFullYear()} Jason Kuate
            </p>
          </Reveal>
        </footer>
      </div>
    </div>
  );
}
"use client";

import { useEffect, useState } from "react";

const CODE_LINES = [
  "import { createPortfolio } from '@rohit/dev'",
  "const skills = ['Next.js', 'TypeScript', 'React']",
  "await loadProjects({ featured: true })",
  "compiling... ████████████ 100%",
  "hydrating components...",
  "const experience = fetchWorkHistory()",
  "bundle size optimized ✓",
  "rendering UI...",
  "done. welcome.",
];

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";

function scramble(text: string, progress: number): string {
  return text
    .split("")
    .map((char, i) => {
      if (char === " ") return " ";
      if (i < Math.floor(text.length * progress)) return char;
      return CHARS[Math.floor(Math.random() * CHARS.length)];
    })
    .join("");
}

function ScrambleLine({ text, delay }: { text: string; delay: number }) {
  const [displayed, setDisplayed] = useState("");
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setVisible(true);
      let frame = 0;
      const totalFrames = 30;
      const interval = setInterval(() => {
        frame++;
        const p = frame / totalFrames;
        setProgress(p);
        setDisplayed(scramble(text, p));
        if (frame >= totalFrames) {
          clearInterval(interval);
          setDisplayed(text);
        }
      }, 30);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(showTimer);
  }, [text, delay]);

  if (!visible) return null;

  return (
    <div className="font-mono text-[11px] sm:text-xs text-zinc-400 leading-relaxed tracking-wider opacity-0 animate-[fadeIn_0.2s_ease-in_forwards]">
      <span className="text-zinc-600 mr-3 select-none">›</span>
      {displayed}
    </div>
  );
}

export default function Loading() {
  const [fillPercent, setFillPercent] = useState(0);
  const [phase, setPhase] = useState<"loading" | "done">("loading");

  // Progress bar
  useEffect(() => {
    const duration = 2800;
    const fps = 60;
    const increment = 100 / (duration / (1000 / fps));
    let current = 0;

    const interval = setInterval(() => {
      current += increment + Math.random() * 0.5;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => setPhase("done"), 300);
      }
      setFillPercent(current);
    }, 1000 / fps);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`
        fixed inset-0 z-[9999] flex flex-col items-center justify-center
        bg-background
        transition-opacity duration-700 ease-out
        ${phase === "done" ? "opacity-0 pointer-events-none" : "opacity-100"}
      `}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, oklch(0.488 0.243 264.376 / 0.07) 0%, transparent 70%)",
        }}
      />

      {/* Grid dots background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Content */}
      <div className="relative w-full max-w-sm sm:max-w-md px-6 space-y-8">
        {/* Brand mark */}
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 flex-shrink-0">
            <div
              className="absolute inset-0 rounded-full animate-pulse"
              style={{
                background: "#0019ff",
                filter: "blur(6px)",
                opacity: 0.4,
              }}
            />
            <div
              className="relative w-full h-full rounded-full"
              style={{ background: "#0019ff" }}
            />
          </div>
          <div className="font-mono">
            <p className="text-sm font-semibold tracking-widest text-foreground">
              ROHIT MONDAL
            </p>
            <p className="text-[10px] text-zinc-500 tracking-[0.2em]">
              PORTFOLIO_v2025
            </p>
          </div>
        </div>

        {/* Terminal code lines */}
        <div className="space-y-1.5 border-l border-zinc-800 pl-4">
          {CODE_LINES.map((line, i) => (
            <ScrambleLine key={i} text={line} delay={i * 200} />
          ))}
        </div>

        {/* Progress bar */}
        <div className="space-y-2">
          <div className="flex justify-between items-center font-mono">
            <span className="text-[10px] tracking-widest text-zinc-600">
              INITIALIZING
            </span>
            <span className="text-[10px] tracking-widest text-zinc-500">
              {Math.round(fillPercent)}%
            </span>
          </div>
          <div className="h-[2px] w-full bg-zinc-800/50 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all ease-out"
              style={{
                width: `${fillPercent}%`,
                background:
                  "linear-gradient(90deg, #0019ff 0%, oklch(0.627 0.265 303.9) 100%)",
                boxShadow: "0 0 12px 2px #0019ff88",
                transitionDuration: "80ms",
              }}
            />
          </div>
        </div>

        {/* Blinking cursor line */}
        <div className="font-mono text-[11px] text-zinc-600 flex items-center gap-1">
          <span>$</span>
          <span className="text-foreground/80">_</span>
          <span
            className="inline-block w-[7px] h-[13px] bg-foreground/70 ml-0.5"
            style={{
              animation: "blink 1s step-end infinite",
            }}
          />
        </div>
      </div>

      {/* Bottom stamp */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <p className="font-mono text-[9px] text-zinc-700 tracking-[0.3em] uppercase">
          crafted with next.js · typescript · tailwind
        </p>
      </div>

    </div>
  );
}

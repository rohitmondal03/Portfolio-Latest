import type { PersonalLinkType, ProjectType } from "./types"
import { GitHubDark, GitHubLight, Hashnode, Instagram, LinkedIn, XDark, XLight } from "developer-icons";
import { ArrowDown, ArrowUpRight, FileTextIcon } from 'lucide-react'


export const NAV_LINKS = [
  { path: "/", title: "about" },
  { path: "/work-ex", title: "work-ex" },
  { path: "/projects", title: "projects" },
  { path: "/tech", title: "tech" },
  // { path: "/#links", title: "links" },
]

export const projects: ProjectType[] = [
  {
    title: "URLab",
    link: "https://urlab-live.vercel.app",
    description: "A minimalistic link management SaaS — shorten, track, and organise your URLs in one clean dashboard.",
    emoji: "🔗",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind", "shadcn", "Tanstack Query"],
    githubLink: "https://github.com/rohitmondal03/urlab",
  },
  {
    title: "Konfig",
    link: "https://github.com/rohitmondal03/konfig",
    description: "Configuration management for modern apps. Define, validate, and share config schemas across your entire team.",
    emoji: "⚙️",
    tags: ["Turborepo/Monorepo", "TypeScript", "Node.js", "Express.js", "CLI", "Next.js"],
    githubLink: "https://github.com/rohitmondal03/konfig",
  },
]
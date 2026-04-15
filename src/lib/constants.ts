import type { PersonalLinkType, ProjectType } from "./types"
import { FileTextIcon } from "lucide-react";
import {
  GitHubDark as GitHubDarkIcon,
  GitHubLight as GitHubLightIcon,
  Hashnode as HashnodeIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  XDark as XDarkIcon,
  XLight as XLightIcon,
} from "developer-icons";


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

export const PERSONAL_LINKS: PersonalLinkType[] = [
  {
    title: "Resume/CV",
    href: "https://flowcv.com/resume/vgsaaqno90",
    icon: FileTextIcon,
  },
  {
    title: "Github",
    href: "https://github.com/rohitmondal03",
    darkThemeIcon: GitHubDarkIcon,
    icon: GitHubLightIcon,
  },
  {
    title: "Twitter",
    href: "https://twitter.com/rohitmondal03",
    darkThemeIcon: XDarkIcon,
    icon: XLightIcon,
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/rohitmondal03/",
    icon: LinkedInIcon,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/rohitmondal03/",
    icon: InstagramIcon,
  },
  {
    title: "Hashnode",
    href: "",
    icon: HashnodeIcon,
  },
]

export const APP_URL = "https://rohit-og-portfolio.vercel.app"

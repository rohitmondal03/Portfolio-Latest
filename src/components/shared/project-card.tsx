"use client"

import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { GitHubLight as GitHubLightIcon, GitHubDark as GitHubDarkIcon } from "developer-icons"
import { ProjectType } from '@/lib/types'
import { cn } from '@/lib/utils'
import { Badge } from "@/components/ui/badge"
import { useTheme } from 'next-themes'
import { buttonVariants } from '../ui/button'

// Unique per-project gradient accents (index-based)
const CARD_ACCENTS = [
  "from-violet-500/20 via-purple-500/10 to-transparent",
  "from-cyan-500/20 via-sky-500/10 to-transparent",
  "from-emerald-500/20 via-teal-500/10 to-transparent",
  "from-rose-500/20 via-pink-500/10 to-transparent",
  "from-amber-500/20 via-orange-500/10 to-transparent",
]

const CARD_BORDERS = [
  "hover:border-violet-500/50",
  "hover:border-cyan-500/50",
  "hover:border-emerald-500/50",
  "hover:border-rose-500/50",
  "hover:border-amber-500/50",
]

const GLOW_COLORS = [
  "group-hover:shadow-violet-500/10",
  "group-hover:shadow-cyan-500/10",
  "group-hover:shadow-emerald-500/10",
  "group-hover:shadow-rose-500/10",
  "group-hover:shadow-amber-500/10",
]

interface ProjectCardProps extends ProjectType {
  index: number
}

export function ProjectCard({ title, link, description, tags, githubLink, emoji, index }: ProjectCardProps) {
  const accent = CARD_ACCENTS[index % CARD_ACCENTS.length]
  const border = CARD_BORDERS[index % CARD_BORDERS.length]
  const glow = GLOW_COLORS[index % GLOW_COLORS.length]
  const isGithubOnly = link.includes("github.com") && !githubLink

  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
      className="group relative"
    >
      <div
        className={cn(
          "relative flex flex-col h-full overflow-hidden rounded-2xl border-2 border-zinc-300 bg-card",
          "transition-all duration-300 ease-out",
          border,
          "hover:shadow-2xl",
          glow,
        )}
      >
        {/* Gradient accent background */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          accent
        )} />

        {/* Decorative top orb */}
        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-white/5 to-transparent blur-2xl group-hover:scale-150 transition-transform duration-700" />

        {/* Card body */}
        <div className="relative z-10 flex flex-col h-full p-6 gap-5">

          {/* Header row */}
          <div className="flex items-start justify-between gap-3">
            {/* Emoji icon */}
            <div className="flex items-center justify-center size-12 rounded-xl text-2xl shrink-0 group-hover:scale-110 transition-transform duration-300 border border-zinc-400 bg-white">
              {emoji ?? "🚀"}
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {githubLink && (
                <Link
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${title} source code on GitHub`}
                  className="flex items-center justify-center size-8 rounded-lg bg-muted hover:bg-muted/80 transition-colors border border-zinc-300"
                >
                  {theme === "dark"
                    ? <GitHubLightIcon className="size-4" />
                    : <GitHubDarkIcon className="size-4" />}
                </Link>
              )}
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${title}`}
                className="flex items-center justify-center size-8 rounded-lg bg-muted hover:bg-muted/80 transition-colors border border-zinc-300"
              >
                <ExternalLink className="size-4" />
              </Link>
            </div>
          </div>

          {/* Title */}
          <div className="space-y-2">
            <h2 className="text-xl font-bold tracking-tight leading-tight group-hover:translate-x-0.5 transition-transform duration-300">
              {title}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <Badge key={tag} variant={"secondary"} className='text-[11px] border border-zinc-400 dark:border-zinc-600'>
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {/* CTA */}
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "default" })
            )}
          >
            <span>{isGithubOnly ? "View on GitHub" : "View Project"}</span>
            <ArrowUpRight className="size-4 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

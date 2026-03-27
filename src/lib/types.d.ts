import { type ReactNode } from "react"

export interface ProjectType {
  title: string
  link: string
  description: string
  tags?: string[]
  githubLink?: string
  emoji?: string
}

export interface PersonalLinkType {
  title: string
  href: string
  icon: ReactNode
  darkThemeIcon?: ReactNode
}


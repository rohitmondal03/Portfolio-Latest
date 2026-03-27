import { DeveloperIconProps } from "developer-icons/dist/icon"
import { LucideIcon } from "lucide-react"
import React from "react"

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
  icon: React.ReactNode
  darkThemeIcon?: React.ReactNode
}


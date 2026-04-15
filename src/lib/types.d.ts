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
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
  darkThemeIcon?: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
}


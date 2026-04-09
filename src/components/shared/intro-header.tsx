"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { ArrowUpRight, FileTextIcon } from 'lucide-react'
import { GitHubDark, GitHubLight, Hashnode, Instagram, LinkedIn, XDark, XLight } from "developer-icons";
import { cn } from '@/lib/utils'
import { NAV_LINKS } from '@/lib/constants'
import type { PersonalLinkType } from '@/lib/types'
import { buttonVariants } from '../ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'
import { TextLoop } from '../ui/text-loop'
import { TextRoll } from '../ui/text-roll'
import { InView } from '../ui/in-view'

function IntroHeader() {
  const pathname = usePathname();
  const { theme } = useTheme();

  const PERSONAL_LINKS: PersonalLinkType[] = [
    {
      title: "Resume/CV",
      href: "https://flowcv.com/resume/vgsaaqno90",
      icon: <FileTextIcon />,
    },
    {
      title: "Github",
      href: "https://github.com/rohitmondal03",
      darkThemeIcon: <GitHubDark />,
      icon: <GitHubLight />,
    },
    {
      title: "Twitter",
      href: "https://twitter.com/rohitmondal03",
      darkThemeIcon: <XDark />,
      icon: <XLight />,
    },
    {
      title: "Linkedin",
      href: "https://www.linkedin.com/in/rohitmondal03/",
      icon: <LinkedIn />,
    },
    {
      title: "Instagram",
      href: "https://www.instagram.com/rohitmondal03/",
      icon: <Instagram />,
    },
    {
      title: "Hashnode",
      href: "",
      icon: <Hashnode />,
    },
  ]

  return (
    <InView
      transition={{ delay: 0.3, duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 15, filter: 'blur(0px)' },
        hidden: { opacity: 0, y: 0, filter: 'blur(10px)' }
      }}
      once={true}
    >
      <header className="w-full space-y-6 md:space-y-10 border-b-2 pb-4 md:pb-2">
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-center gap-4 md:gap-0">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <Link
              href={"/"}
              className='hover:scale-[1.05] transition-all ease-out hover:-rotate-12 duration-500'
            >
              <Image
                src={"/profile.jpg"}
                height={75}
                width={75}
                alt='profile pic'
                className='rounded-full w-16 h-16 sm:w-[75px] sm:h-[75px]'
              />
            </Link>
            <div className='font-mono space-y-3 text-center sm:text-left'>
              <TextRoll className='text-2xl sm:text-3xl font-semibold'>
                Rohit Mondal
              </TextRoll>
              <div className='flex items-center justify-center sm:justify-start gap-1 flex-wrap'>
                <p className="text-zinc-500 text-base sm:text-lg">
                  Developer-
                </p>
                <TextLoop
                  transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 19,
                    mass: 1.2,
                  }}
                  interval={1.5}
                  className='underline underline-offset-4 text-base sm:text-lg font-semibold'
                >
                  <p>UI</p>
                  <p>Frontend</p>
                  <p>Full Stack</p>
                </TextLoop>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Links */}
        <div id='links' className="grid grid-cols-3 sm:grid-cols-6 gap-5 w-fit mx-auto">
          {/* <div id='links' className="flex items-center justify-center md:justify-center flex-1 flex-wrap gap-5"> */}
          {PERSONAL_LINKS.map((link, idx) => (
            <Tooltip disableHoverableContent key={link.href}>
              <TooltipTrigger>
                <Link
                  href={link.href}
                  target="_blank"
                  className={cn(
                    buttonVariants({ variant: "default", size: "lg" }),
                    "flex items-center gap-2",
                    "hover:scale-[1.02] transition-all ease-out duration-300",
                    idx % 2 === 0 ? "hover:rotate-12" : "hover:-rotate-12"
                  )}
                >
                  {theme === "dark" && link.darkThemeIcon ? link.darkThemeIcon : link.icon}
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                {link.title}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>

        {/* Navigation */}
        <nav className="flex items-center justify-center md:justify-center flex-wrap flex-1 gap-1 sm:gap-1.5">
          {NAV_LINKS.map((link) =>
            <Link
              key={link.path}
              href={link.path}
              className={cn(
                buttonVariants({ variant: pathname === link.path ? "secondary" : "ghost" }),
                "text-sm sm:text-base gap-1 px-2 sm:px-4",
                pathname === link.path && "border border-zinc-500",
              )}
            >
              {link.title}
              <ArrowUpRight className='opacity-50 size-4' />
            </Link>
          )}
          {/* <Link
            href={"/#links"}
            className={cn(
              buttonVariants({ variant: "link" }),
              "text-sm sm:text-base gap-1 px-2 sm:px-4"
            )}
          >
            links
            <ArrowDown className='opacity-50 size-4' />
          </Link> */}
        </nav>
      </header>
    </InView>
  )
}

export default IntroHeader
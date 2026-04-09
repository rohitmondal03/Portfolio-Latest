"use client"

import Link from "next/link";
import { useTheme } from "next-themes";
import { type UseInViewOptions, type Transition } from "framer-motion";
import { GitHubDark, GitHubLight, Hashnode, Instagram, LinkedIn, XDark, XLight } from "developer-icons";
import { FileText } from "lucide-react"
import { Separator } from "@/components/ui/separator";
import { InView } from "@/components/ui/in-view";
import { PersonalLinkType } from "@/lib/types";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// interface TextHighlighter {
//   transition: Transition;
//   highlightClass: string;
//   inViewOptions: UseInViewOptions;
//   highlightColor: string;
// }

export default function HomePage() {
  const { theme } = useTheme();

  const PERSONAL_LINKS: PersonalLinkType[] = [
    {
      title: "Resume/CV",
      href: "https://flowcv.com/resume/vgsaaqno90",
      icon: <FileText />,
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
      variants={{
        hidden: { opacity: 0, y: 15, filter: 'blur(20px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
      }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      viewOptions={{ margin: '0px 0px -200px 0px' }}
    >
      <section>
        <div className='space-y-10 text-lg'>
          <h1 className='text-3xl font-semibold'>
            <span className='text-5xl'>✌️</span>
            <span>About Me</span>.
          </h1>
          <p>As a {" "}
            <span className={cn(
              "font-semibold underline decoration-double underline-offset-2 text-orange-400",
              theme === "dark" ? "text-pink-400" : "text-pink-600",
            )}>
              Frontend focused Full-Stack Developer
            </span>
            , I specialize in building applications that combine performance, scalability, and modern design. My work often bridges frontend logic with backend workflows, reflecting my ability to create seamless, reliable, and user-friendly experiences.
          </p>
          <Separator className='bg-zinc-700 dark:bg-zinc-500' />
          <div className="space-y-8">
            <p>
              Passionate about modern web technologies, I thrive on using tools like{" "}
              <span className={cn(
                "font-semibold underline decoration-double underline-offset-2 text-orange-400",
                theme === "dark" ? "text-pink-400" : "text-pink-600",
              )}>
                Next.js, TypeScript, TailwindCSS, Monorepo
              </span>
              {" "}and{" "}
              <Link
                href={"/tech"}
                className={cn(
                  "font-bold underline decoration-wavy underline-offset-2",
                  "hover:scale-[1.03] transition ease-out duration-200",
                  theme === "dark" ? "text-orange-400" : "text-orange-600",
                )}
              >
                other modern tools
              </Link>
              {" "}to deliver optimized solutions. I enjoy translating complex problems into simple, efficient workflows that improve usability and elevate product impact.
            </p>
            <p>
              Beyond internships and projects, I love experimenting with ideas that simplify the web development process. From reusable UI components to automation tools, I aim to craft digital solutions that not only solve real-world challenges but also inspire creativity in everyday development.
            </p>
          </div>
          <Separator className='bg-zinc-700 dark:bg-zinc-500' />
          {/* <div className="space-y-8">
            <p className="text-xl font-medium">
              You can connect with me through the links below 😀😁
            </p>
            <div id='links' className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {PERSONAL_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "flex items-center gap-2",
                    "hover:scale-[1.02] transition-all ease-out duration-300"
                  )}
                >
                  {theme === "dark" && link.darkThemeIcon ? link.darkThemeIcon : link.icon}
                  {link.title}
                </Link>
              ))}
            </div>
          </div> */}
        </div>
      </section>
    </InView>
  );
}

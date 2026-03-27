"use client"

import React, { forwardRef, useMemo, useState } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { SiSupabase, SiTailwindcss, SiMongodb, SiNextdotjs, SiBetterauth, SiFirebase, SiRedux, SiPrisma, SiReactquery, SiTypescript, } from "@icons-pack/react-simple-icons"
import { InView } from '@/components/ui/in-view'
import { TransitionPanel } from '@/components/ui/transition-panel'
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils'
import { AnimatedBeam } from '@/components/ui/animated-beam'

const TECH_STACKS_ITEMS = [
  {
    title: "💻 Frontend",
    subtitle: "React/Next.js, TailwindCSS and UI/Component Libraries",
    content:
      "I specialize in building modern, scalable frontends using React and Next.js. With TypeScript and powerful styling tools like TailwindCSS, I create responsive and accessible interfaces that deliver smooth user experiences. I also leverage UI libraries such as Material UI and shadcnUI to speed up development and maintain design consistency. Beyond just aesthetics, I focus on performance optimization, SEO, and reusability by crafting modular components, ensuring that applications are fast, reliable, and easy to scale across different projects.",
  },
  {
    title: "⚙️ State Management",
    subtitle: "Recoil, Jotai, TanStack Query, Redux & More",
    content:
      "Managing application state effectively is key to creating seamless user experiences. I use modern libraries such as Recoil, Jotai, TanStack Query, and Redux to handle both local and global state. These tools help me reduce prop drilling, manage asynchronous data fetching, and ensure predictable state updates across complex applications. By choosing the right state management solution for each project, I focus on building apps that are not only efficient but also scalable, maintainable, and easy to debug.",
  },
  {
    title: "⚡ Backend",
    subtitle: "Firebase, Supabase, NeonDB, MongoDB",
    content:
      "On the backend, I work with both Backend-as-a-Service (BaaS) solutions like Firebase and Supabase, and modern databases such as NeonDB and MongoDB. These tools allow me to build applications that support real-time updates, serverless functions, authentication, and secure data storage. I focus on integrating backends seamlessly with frontend apps, reducing complexity while improving performance and scalability. Whether it’s a lightweight project or a full-scale application, I use these technologies to ensure that data handling, APIs, and server actions are smooth and production-ready.",
  },
  {
    title: "🗄️ Databases",
    subtitle: "PostgreSQL, NoSQL, ORMs and Cloud Databases",
    content:
      "I have strong experience with both SQL and NoSQL databases, including PostgreSQL and MongoDB, which allows me to choose the right data model for each project. To simplify development and reduce errors, I use ORMs like Prisma and Mongoose, which bring type safety and clean query structures. I'm also comfortable working with cloud-hosted databases, ensuring scalability and reliability in production environments. My database approach focuses on efficient schema design, performance optimization, and secure data transactions to support robust and high-performing applications.",
  },
  {
    title: "🔐 Authentication",
    subtitle: "Auth.js/NextAuth, BetterAuth, Lucia-auth & More",
    content:
      "Authentication is a critical part of modern applications, and I specialize in building secure and scalable auth systems. I’ve worked with Auth.js, BetterAuth, and Lucia-auth, along with token-based solutions like JWT. From email/password logins to OAuth and third-party providers, I can implement flexible authentication flows tailored to project needs. My focus is not only on security but also on developer experience and user convenience, ensuring smooth onboarding, role-based access control, and session management. This makes applications both trustworthy and user-friendly.",
  },
];

function LinksPage() {
  const { theme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const supabaseLogoRef = React.useRef<HTMLDivElement>(null);
  const tailwindcssLogoRef = React.useRef<HTMLDivElement>(null);
  const mongodbLogoRef = React.useRef<HTMLDivElement>(null);
  const nextjsLogoRef = React.useRef<HTMLDivElement>(null);
  const betterAuthLogoRef = React.useRef<HTMLDivElement>(null);
  const firebaseLogoRef = React.useRef<HTMLDivElement>(null);
  const reduxLogoRef = React.useRef<HTMLDivElement>(null);
  const prismaLogoRef = React.useRef<HTMLDivElement>(null);
  const reactqueryLogoRef = React.useRef<HTMLDivElement>(null);
  const typescriptLogoRef = React.useRef<HTMLDivElement>(null);
  const profilePicRef = React.useRef<HTMLDivElement>(null);

  const pathColor = useMemo(() => theme === "dark" ? "white" : "black", [theme]);

  return (
    <InView
      variants={{
        hidden: { opacity: 0, y: 15, filter: 'blur(20px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
      }}
      viewOptions={{ margin: '0px 0px -200px 0px' }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <section>
        <div className='space-y-12'>
          <div className='space-y-6'>
            <h1 className='text-2xl font-semibold'>
              <span className='text-4xl'>🛠️</span> Tech stacks.
            </h1>
            <p className='text-muted-foreground'>
              A collection of technologies I work with to create seamless interfaces, reliable backends, and secure, scalable applications.
            </p>
          </div>
          <div className='relative' ref={containerRef}>
            <div className="flex flex-col size-full items-stretch justify-between gap-8">
              <div className='flex items-center justify-between'>
                <Circle ref={nextjsLogoRef}>
                  <SiNextdotjs />
                </Circle>
                <Circle ref={typescriptLogoRef}>
                  <SiTypescript />
                </Circle>
              </div>
              <div className='flex items-center justify-between'>
                <Circle ref={reduxLogoRef}>
                  <SiRedux />
                </Circle>
                <Circle ref={tailwindcssLogoRef}>
                  <SiTailwindcss />
                </Circle>
              </div>
              <div className='flex items-center justify-between'>
                <Circle ref={reactqueryLogoRef}>
                  <SiReactquery />
                </Circle>
                <Circle ref={profilePicRef} className='size-24 p-1 border-amber-500 shadow-[0px_0px_20px] shadow-amber-400' >
                  <Image
                    src={"https://avatars.githubusercontent.com/u/107113353?v=4"}
                    height={100}
                    width={100}
                    alt='profile-pic'
                    className='rounded-full'
                    fetchPriority='low'
                  />
                </Circle>
                <Circle ref={firebaseLogoRef}>
                  <SiFirebase />
                </Circle>
              </div>
              <div className="flex items-center justify-between">
                <Circle ref={supabaseLogoRef}>
                  <SiSupabase />
                </Circle>
                <Circle ref={mongodbLogoRef}>
                  <SiMongodb />
                </Circle>
              </div>
              <div className="flex items-center justify-between">
                <Circle ref={prismaLogoRef}>
                  <SiPrisma />
                </Circle>
                <Circle ref={betterAuthLogoRef}>
                  <SiBetterauth />
                </Circle>
              </div>
            </div>
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={nextjsLogoRef}
              toRef={profilePicRef}
              curvature={20}
              endYOffset={-10}
              pathColor={pathColor}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={typescriptLogoRef}
              toRef={profilePicRef}
              curvature={20}
              endYOffset={-10}
              reverse
              pathColor={pathColor}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={reduxLogoRef}
              toRef={profilePicRef}
              curvature={10}
              endYOffset={-5}
              pathColor={pathColor}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={tailwindcssLogoRef}
              toRef={profilePicRef}
              curvature={10}
              endYOffset={-5}
              reverse
              pathColor={pathColor}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={reactqueryLogoRef}
              toRef={profilePicRef}
              pathColor={pathColor}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={firebaseLogoRef}
              toRef={profilePicRef}
              reverse
              pathColor={pathColor}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={supabaseLogoRef}
              toRef={profilePicRef}
              curvature={-10}
              endYOffset={5}
              pathColor={pathColor}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={mongodbLogoRef}
              toRef={profilePicRef}
              curvature={-10}
              endYOffset={5}
              reverse
              pathColor={pathColor}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={prismaLogoRef}
              toRef={profilePicRef}
              curvature={-20}
              endYOffset={10}
              pathColor={pathColor}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={betterAuthLogoRef}
              toRef={profilePicRef}
              curvature={-20}
              endYOffset={10}
              reverse
              pathColor={pathColor}
            />
          </div>
          <div className='p-4 border-2 dark:border-zinc-400 border-zinc-600 rounded-2xl'>
            <div className='mb-4 flex flex-wrap gap-2'>
              {TECH_STACKS_ITEMS.map((item, index) => (
                <div key={index} className='flex items-center gap-x-2 w-fit'>
                  <Button
                    variant={activeIndex === index ? "secondary" : "ghost"}
                    onClick={() => setActiveIndex(index)}
                    className='text-base font-medium'
                  >
                    {item.title}
                  </Button>
                  {index !== TECH_STACKS_ITEMS.length - 1 && <Separator orientation='vertical' />}
                </div>
              ))}
            </div>
            <div className='overflow-hidden border-t-2 border-zinc-200 dark:border-zinc-700'>
              <TransitionPanel
                activeIndex={activeIndex}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                variants={{
                  enter: { opacity: 0, y: -50, filter: 'blur(4px)' },
                  center: { opacity: 1, y: 0, filter: 'blur(0px)' },
                  exit: { opacity: 0, y: 50, filter: 'blur(4px)' },
                }}
                className='mt-4'
              >
                {TECH_STACKS_ITEMS.map((item, index) => (
                  <div key={index} className='py-2'>
                    <h3 className='text-lg underline underline-offset-4 mb-2 font-medium text-zinc-800 dark:text-zinc-100'>
                      {item.subtitle}
                    </h3>
                    <p className='text-zinc-600 dark:text-zinc-400'>{item.content}</p>
                  </div>
                ))}
              </TransitionPanel>
            </div>
          </div>
        </div>
      </section>
    </InView>
  )
}

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  const { theme } = useTheme()

  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-16 items-center justify-center rounded-full border-2 p-3",
        theme === "dark" || !theme ? "bg-black shadow-[0_0_30px] shadow-white/20" : "bg-white shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  )
})


export default LinksPage
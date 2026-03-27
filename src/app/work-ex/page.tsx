import React from 'react'
import { Timeline, type TimelineItem } from '@/components/ui/timeline'
import { Card, CardContent } from '@/components/ui/card'
import { InView } from '@/components/ui/in-view'

const workExperienceList: TimelineItem[] = [
  // {
  //   id: "1",
  //   title: "Leap Finance – Software Developer Intern",
  //   description: "Jan 2025 – May 2025 | Bengaluru",
  //   status: "completed",
  //   content: (
  //     <Card>
  //       <CardContent className='list-disc list-inside'>
  //         <li>Revamped UI with Next.js, TypeScript & TailwindCSS, speeding up dev cycles by 22%.</li>
  //         <li>Optimized performance (lazy loading, image compression), improving load speed by 20%.</li>
  //         <li>Built a scalable design system, boosting brand consistency and collaboration.</li>
  //       </CardContent>
  //     </Card>
  //   )
  // },
  {
    id: "2",
    title: "EzyEV – Full-stack Developer Intern",
    description: "Sep 2024 – Present | Remote",
    status: "completed",
    content: (
      <Card>
        <CardContent className='list-disc list-inside text-sm sm:text-base space-y-1'>
          <li>Developed an internal web app with Next.js, Supabase, improving tracking by 35%.</li>
          <li>Implemented server actions & revalidation, enabling 45% faster real-time updates.</li>
          <li>Optimized data workflows, increasing team productivity by 28%.</li>
        </CardContent>
      </Card>
    )
  },
  {
    id: "3",
    title: "Snipeit.ai – Software Engineer Intern",
    description: "May 2024 – Jul 2024 | Remote",
    status: "completed",
    content: (
      <Card>
        <CardContent className='list-disc list-inside text-sm sm:text-base space-y-1'>
          <li>Led Arthnirmiti project for 10K+ student users using Next.js & Firebase.</li>
          <li>Enhanced frontend UX, driving 20% more user interaction.</li>
        </CardContent>
      </Card>
    )
  },
  {
    id: "4",
    title: "SauvantAI – Frontend Developer Intern",
    description: "Mar 2024 – May 2024 | Remote",
    status: "completed",
    content: (
      <Card>
        <CardContent className='list-disc list-inside text-sm sm:text-base space-y-1'>
          <li>Designed responsive features, increasing user satisfaction by 25%.</li>
          <li>Improved performance, cutting load times by 30% and bounce rates by 15%.</li>
          <li>Built reusable UI components, boosting engagement and conversions.</li>
        </CardContent>
      </Card>
    )
  },
  {
    id: "5",
    title: "Grainkart Pvt. Ltd. – Frontend Developer Intern",
    description: "Mar 2024 – Apr 2024 | Remote",
    status: "completed",
    content: (
      <Card>
        <CardContent className='list-disc list-inside text-sm sm:text-base space-y-1'>
          <li>Built frontend MVP with Next.js & TailwindCSS, attracting 5,000+ users.</li>
          <li>Implemented server-side data handling with MongoDB, improving reliability by 30%.</li>
          <li>Optimized SEO & security, enhancing performance and visibility.</li>
        </CardContent>
      </Card>
    )
  },
  {
    id: "6",
    title: "Mugs – Software Engineer (Frontend) Intern",
    description: "Oct 2023 – Mar 2024 | Remote",
    status: "completed",
    content: (
      <Card>
        <CardContent className='list-disc list-inside text-sm sm:text-base space-y-1'>
          <li>Boosted website speed by 20%, driving higher engagement & SEO rankings.</li>
          <li>Developed a scalable design system with shadcnUI, reducing dev time by 22%.</li>
          <li>Optimized frontend code, improving user interaction by 18%.</li>
        </CardContent>
      </Card>
    )
  }
]

function WorkExPage() {
  return (
    <InView
      variants={{
        hidden: { opacity: 0, y: 15, filter: 'blur(4px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
      }}
      viewOptions={{ margin: '0px 0px -200px 0px' }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <section>
        <ul className='space-y-16'>
          <h1 className='text-2xl font-semibold'><span className='text-5xl'>💼</span> Work Experience.</h1>
          <ul className='ml-4'>
            <Timeline variant={"spacious"} items={workExperienceList} />
          </ul>
        </ul>
      </section>
    </InView>
  )
}

export default WorkExPage
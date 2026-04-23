import { PROJECTS } from '@/lib/constants'
import { InView } from '@/components/ui/in-view'
import { ProjectCard } from '@/components/shared/project-card'

export default async function ProjectsPage() {
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
        <div className='space-y-10'>
          {/* Page Header */}
          <div className='space-y-2'>
            <h1 className='text-2xl font-semibold flex items-center gap-2'>
              <span className='text-4xl'>📽️</span>
              Projects.
            </h1>
            <p className='text-muted-foreground'>
              A selection of things I&apos;ve built — hover over the cards to get the links !!
            </p>
          </div>

          {/* Project grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {PROJECTS.map((project, index) => (
              <ProjectCard
                key={project.link}
                {...project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </InView>
  )
}
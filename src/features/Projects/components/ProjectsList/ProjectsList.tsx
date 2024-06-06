import { ProjectCard, ProjectTitle } from '@/components'
import { icons } from '@/components/Icon/Icons'
import { tv } from 'tailwind-variants'

export interface ProjectsListProps {
  projects: {
    title: string
    image: string
    description: string
    icon: keyof typeof icons
    url: string
    onClick?: () => void
  }[]
}

const main = tv({
  base: 'flex flex-col items-start justify-center gap-6 sm:flex-row sm:gap-10',
})

const div = tv({
  base: 'flex flex-col justify-start gap-4',
})

export function ProjectsList({ projects }: ProjectsListProps) {
  return (
    <main className={main()}>
      {projects.map(
        ({ title, image, description, icon, url, onClick }, index) => (
          <div className={div()} key={index}>
            <ProjectTitle number={index + 1} title={title} />
            <ProjectCard
              image={image}
              description={description}
              icon={icon}
              url={url}
              onClick={onClick}
            />
          </div>
        ),
      )}
    </main>
  )
}

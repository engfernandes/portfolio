import { ProjectCard, ProjectTitle } from '@/components'
import { icons } from '@/components/Icon/Icons'
import { tv } from 'tailwind-variants'

interface ProjectsListProps {
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
  base: 'flex flex-col w-full pb-8 items-center justify-start gap-6 sm:flex-row sm:flex-wrap sm:gap-10',
})

const div = tv({
  base: 'flex flex-col justify-start gap-4',
})

export function ProjectsList() {
  const projectsList: ProjectsListProps = {
    projects: [
      {
        title: 'ui-animations',
        image: 'img/example.png',
        description:
          'Duis aute irure dolor in velit esse cillum incididunt ut labore.',
        icon: 'react',
        url: 'https://google.com',
        onClick: () => console.log('clicked'),
      },
      {
        title: 'ui-animations',
        image: 'img/example.png',
        description:
          'Duis aute irure dolor in velit esse cillum incididunt ut labore.',
        icon: 'react',
        url: 'https://google.com',
        onClick: () => console.log('clicked'),
      },
      {
        title: 'ui-animations',
        image: 'img/example.png',
        description:
          'Duis aute irure dolor in velit esse cillum incididunt ut labore.',
        icon: 'react',
        url: 'https://google.com',
        onClick: () => console.log('clicked'),
      },
      {
        title: 'ui-animations',
        image: 'img/example.png',
        description:
          'Duis aute irure dolor in velit esse cillum incididunt ut labore.',
        icon: 'react',
        url: 'https://google.com',
        onClick: () => console.log('clicked'),
      },
      {
        title: 'ui-animations',
        image: 'img/example.png',
        description:
          'Duis aute irure dolor in velit esse cillum incididunt ut labore.',
        icon: 'react',
        url: 'https://google.com',
        onClick: () => console.log('clicked'),
      },
      {
        title: 'ui-animations',
        image: 'img/example.png',
        description:
          'Duis aute irure dolor in velit esse cillum incididunt ut labore.',
        icon: 'react',
        url: 'https://google.com',
        onClick: () => console.log('clicked'),
      },
    ],
  }

  return (
    <main className={main()}>
      {projectsList.projects.map(
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

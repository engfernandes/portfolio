import { tv } from 'tailwind-variants'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { Typography } from '../Typography'
import { icons } from '../Icon/Icons'

interface ProjectCardProps {
  icon: keyof typeof icons
  description: string
  image: string
  url: string
}

const article = tv({
  base: 'relative flex flex-col w-[290px] h-[330px] border border-slate-800 rounded-2xl sm:w-[370px] sm:h-[425px]',
})

const framworkIcon = tv({
  base: 'absolute top-4 right-4 fill-slate-500',
})

const main = tv({
  base: 'flex flex-col justify-between gap-4 w-full h-full p-8',
})

const buttonsDiv = tv({
  base: 'flex items-center justify-start w-full',
})

export function ProjectCard({
  icon,
  description,
  image,
  url,
}: ProjectCardProps) {
  return (
    <article className={article()}>
      <header>
        <img
          src={image}
          style={{
            objectFit: 'cover',
            borderRadius: '16px 16px 0 0',
            borderBottom: '1px solid #1e293b',
            width: '100%',
          }}
        />
        <Icon name={icon} className={framworkIcon()} />
      </header>
      <main className={main()}>
        <Typography
          text={description}
          variant='p'
          color='gray'
          className='truncate-multiline max-h-22'
        />
        <div className={buttonsDiv()}>
          <a href={url} target='_blank' rel='noreferrer'>
            <Button variant='tertiary' text='view-project' />
          </a>
        </div>
      </main>
    </article>
  )
}

import { tv } from 'tailwind-variants'
import { Typography } from '../Typography'

interface ProjectTitleProps {
  number: number
  title: string
}

const div = tv({
  base: 'flex items-center justify-start gap-2',
})

export function ProjectTitle({ number, title }: ProjectTitleProps) {
  return (
    <div className={div()}>
      <Typography
        text={`Project ${number}`}
        variant='h3'
        color='blue'
        className='text-base font-bold'
      />
      <Typography text='//' variant='p' color='gray' />
      <Typography text={title} variant='p' color='gray' />
    </div>
  )
}

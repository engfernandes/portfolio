import { tv } from 'tailwind-variants'
import { Typography } from '../Typography'

interface BreadcrumbProps {
  title: string
  items: string[]
}

export function Breadcrumb({ title, items }: BreadcrumbProps) {
  const div = tv({
    base: 'flex items-center gap-2',
  })

  return (
    <div className={div()}>
      <Typography text={`// ${title}`} variant='p' color='white' />
      {items.map((item) => (
        <>
          <Typography text='/' variant='p' color='gray' />
          <Typography text={item} variant='p' color='gray' />
        </>
      ))}
    </div>
  )
}

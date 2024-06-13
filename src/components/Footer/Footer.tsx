import { tv } from 'tailwind-variants'
import { Icon } from '../Icon'
import { Typography } from '../Typography'

export function Footer() {
  const footer = tv({
    base: 'absolute flex items-center space-between bottom-0 left-0 w-full h-[55px] bg-slate-900 rounded-b-lg border-t border-slate-800',
  })

  const leftContent = tv({
    base: 'flex items-center justify-start h-full',
  })

  const typographyDiv = tv({
    base: 'flex items-center p-[18px] w-full h-full sm:w-fit',
  })

  const iconsSection = tv({
    base: 'flex items-center h-full',
  })

  const iconDiv = tv({
    base: 'flex items-center gap-2 px-[14px] h-full border-l border-slate-800 cursor-pointer [&>p]:xs:hidden [&>p]:sm:inline-block',
  })

  return (
    <footer className={footer()}>
      <div className={leftContent()}>
        <div className={typographyDiv()}>
          <Typography text='Find me in:' variant='p' color='gray' />
        </div>
        <a
          className={iconDiv()}
          href='https://www.linkedin.com/in/engfernandes/'
          target='_blank'
          rel='noreferrer'
        >
          <Icon name='linkedin' />
        </a>
      </div>
      <section className={iconsSection()}>
        <a
          className={iconDiv()}
          href='https://github.com/engfernandes'
          target='_blank'
          rel='noreferrer'
        >
          <Typography text='@engfernandes' variant='p' color='gray' />
          <Icon name='github' />
        </a>
      </section>
    </footer>
  )
}

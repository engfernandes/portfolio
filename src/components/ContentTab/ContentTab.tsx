import { ReactNode } from 'react'
import { Icon } from '../Icon'
import { Typography } from '../Typography'
import { tv } from 'tailwind-variants'

interface ContentTabProps {
  tabTitle: string
  children: ReactNode
  isOpen?: boolean
  onClose?: () => void
  withBorder?: boolean
}

const mainDiv = tv({
  base: 'flex w-full flex-col h-full',
  variants: {
    withBorder: {
      true: 'sm:border-l sm:border-slate-800',
    },
  },
})

const tabWrapper = tv({
  base: 'hidden sm:flex sm:w-52 sm:items-center sm:justify-between sm:px-4 sm:py-1.5 sm:border-r border-slate-800',
})

const childrenWrapper = tv({
  base: 'flex-grow w-full p-[18px] sm:p-16 sm:border-t sm:border-slate-800 overflow-y-auto',
})

const icon = tv({
  base: 'cursor-pointer hover:[&>path]:fill-slate-300 hover:[&>path]:transition hover:[&>path]:duration-300',
})

export function ContentTab({
  tabTitle,
  children,
  isOpen = true,
  onClose,
  withBorder = false,
}: ContentTabProps) {
  return (
    <div className={mainDiv({ withBorder: withBorder })}>
      <div className={tabWrapper()}>
        <Typography text={tabTitle} variant='p' color='gray' />
        <Icon
          name='x'
          width='12'
          height='12'
          onClick={onClose}
          className={icon()}
        />
      </div>
      <div className={childrenWrapper()}>{isOpen && children}</div>
    </div>
  )
}

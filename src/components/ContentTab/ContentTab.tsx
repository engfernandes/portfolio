import { ReactNode } from 'react'
import { Icon } from '../Icon'
import { Typography } from '../Typography'
import { tv } from 'tailwind-variants'

interface ContentTabProps {
  tabTitle: string
  children: ReactNode
  isOpen?: boolean
  onClose?: () => void
  styleProps?: {
    withBorder?: boolean
    layout?: 'base' | 'twoCols'
  }
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
  base: 'w-full sm:p-16 sm:border-t sm:border-slate-800 overflow-y-auto',
  variants: {
    layout: {
      base: 'flex-grow',
      twoCols:
        'flex-grow sm:grid sm:grid-cols-[1fr_1fr] sm:grid-rows-auto xl:gap-20 sm:h-full sm:items-center',
    },
  },
  defaultVariants: {
    layout: 'base',
  },
})

const icon = tv({
  base: 'cursor-pointer hover:[&>path]:fill-slate-300 hover:[&>path]:transition hover:[&>path]:duration-300',
})

export function ContentTab({
  tabTitle,
  children,
  isOpen = true,
  onClose,
  styleProps,
}: ContentTabProps) {
  return (
    <div className={mainDiv({ withBorder: styleProps?.withBorder })}>
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
      <div className={childrenWrapper({ layout: styleProps?.layout })}>
        {isOpen && children}
      </div>
    </div>
  )
}

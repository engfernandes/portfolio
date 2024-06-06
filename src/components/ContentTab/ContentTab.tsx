import { ReactNode, useState } from 'react'
import { Icon } from '../Icon'
import { Typography } from '../Typography'
import { tv } from 'tailwind-variants'

interface ContentTabProps {
  tabTitle: string
  children: ReactNode
}

const mainDiv = tv({
  base: 'flex h-full w-full flex-col items-start border border-slate-800',
})

const tabWrapper = tv({
  base: 'hidden sm:flex sm:w-52 sm:items-center sm:justify-between sm:border-r sm:border-slate-800 sm:px-4 sm:py-3',
})

const childrenWrapper = tv({
  base: 'flex h-full w-full overflow-y-auto border-t border-slate-800',
})

export function ContentTab({ tabTitle, children }: ContentTabProps) {
  const [isOpen, setIsOpen] = useState(true)

  function handleClickClose() {
    setIsOpen(false)
  }

  return (
    <div className={mainDiv()}>
      <div className={tabWrapper()}>
        <Typography text={tabTitle} variant='p' color='gray' />
        <Icon
          name='x'
          width='12'
          height='12'
          onClick={handleClickClose}
          className='cursor-pointer hover:[&>path]:fill-slate-300 hover:[&>path]:transition hover:[&>path]:duration-300'
        />
      </div>
      <div className={childrenWrapper()}>{isOpen && children}</div>
    </div>
  )
}

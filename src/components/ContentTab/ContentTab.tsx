import { ReactNode } from 'react'
import { Icon } from '../Icon'
import { Typography } from '../Typography'
import { ContentTabText } from '../ContentTabText/ContentTabText'

interface ContentTabProps {
  tabTitle: string
  children: ReactNode
}

export function ContentTab({ tabTitle, children }: ContentTabProps) {
  return (
    <div className='flex h-full w-full flex-col items-start border border-slate-800'>
      <div className='hidden sm:flex sm:w-52 sm:items-center sm:justify-between sm:border-r sm:border-slate-800 sm:px-4 sm:py-3'>
        <Typography text={tabTitle} variant='p' color='gray' />
        <Icon name='x' width='12' height='12' />
      </div>
      <div className='h-full w-full overflow-y-auto border-t border-slate-800 p-9'>
        {typeof children === 'string' && <ContentTabText text={children} />}
        {typeof children !== 'string' && children}
      </div>
    </div>
  )
}

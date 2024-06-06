import { ReactNode } from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { tv } from 'tailwind-variants'

interface LayoutProps {
  children: ReactNode
}

const background = tv({
  base: 'fixed flex h-full w-full items-center justify-center bg-gray-950 p-4 sm:p-6',
})

const overlay = tv({
  base: 'relative flex h-full w-full flex-col justify-center rounded-lg border-l border-r border-slate-800 bg-slate-900 p-4',
})

const contentWrapper = tv({
  base: 'mb-[55px] mt-[55px] flex h-full w-full items-center justify-center',
})

export function Layout({ children }: LayoutProps) {
  return (
    <div className={background()}>
      <div className={overlay()}>
        <Header />
        <div className={contentWrapper()}>{children}</div>
        <Footer />
      </div>
    </div>
  )
}

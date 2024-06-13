import { ReactNode } from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { tv } from 'tailwind-variants'
import { SideBar, SideBarProps } from '../SideBar'

interface LayoutProps {
  children: ReactNode
  sideBarProps?: SideBarProps
}

const background = tv({
  base: 'fixed flex h-full w-full items-center justify-center bg-gray-950 p-4 sm:p-6',
})

const overlay = tv({
  base: 'relative flex h-full w-full flex-col justify-center rounded-lg border border-slate-800 bg-slate-900',
})

const contentWrapper = tv({
  base: 'mb-[55px] mt-[55px] flex h-full w-full items-center justify-center overflow-y-auto',
})

const childrenWrapper = tv({
  base: 'flex h-full w-full items-center justify-center border-b-0 border-t border-slate-800 sm:ml-[265px] sm:border-l',
})

export function Layout({ children, sideBarProps }: LayoutProps) {
  return (
    <div className={background()}>
      <div className={overlay()}>
        <Header />
        <div className={contentWrapper()}>
          {sideBarProps && <SideBar {...sideBarProps} />}
          <div className={childrenWrapper()}>{children}</div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

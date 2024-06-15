import { ReactNode } from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { tv } from 'tailwind-variants'
import { SideBar, SideBarProps } from '../SideBar'

interface LayoutProps {
  children: ReactNode
  sideBarProps?: SideBarProps
  variant: 'grid' | 'flex'
}

const background = tv({
  base: 'fixed flex h-full w-full items-center justify-center bg-gray-950 p-4 sm:p-6',
})

const overlay = tv({
  base: 'grid grid-cols-1 grid-rows-[auto_1fr_auto] h-full w-full place-items-start rounded-lg border border-slate-800 bg-slate-900',
})

const contentWrapper = tv({
  base: 'h-full w-full overflow-hidden',
  variants: {
    display: {
      grid: 'grid grid-cols-1 sm:grid sm:grid-cols-[auto_1fr] h-full',
      flex: 'flex items-center justify-center',
    },
  },
})

const childrenWrapper = tv({
  base: 'flex w-full h-full items-center justify-center overflow-y-auto sm:p-[18px] sm:p-0',
})

export function Layout({ children, sideBarProps, variant }: LayoutProps) {
  return (
    <div className={background()}>
      <div className={overlay()}>
        <Header />
        <div className={contentWrapper({ display: variant })}>
          {sideBarProps && <SideBar {...sideBarProps} />}
          <div className={childrenWrapper()}>{children}</div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

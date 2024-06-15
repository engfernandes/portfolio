import { useLocation } from 'react-router-dom'
import { tv } from 'tailwind-variants'

interface TabsProps {
  isOpen: boolean
  tabs: { name: string; link: string; onClick?: () => void }[]
  className?: string
}

const tabsGroup = tv({
  base: `absolute z-10 w-full h-[55px] justify-start items-center border-b border-slate-800 animate-slide-down sm:static sm:animate-none`,
  variants: {
    isOpen: {
      true: 'flex flex-col sm:flex-row',
      false: 'hidden',
    },
  },
})

const tabsStyle = tv({
  base: 'relative flex w-full h-full items-center p-[18px] cursor-pointer text-nowrap text-base text-white border-b border-slate-800 bg-slate-900 transition duration-200 first:border-l hover:text-white sm:w-fit sm:px-8 sm:py-0 sm:text-slate-500 sm:border-r sm:border-b-0',
  variants: {
    active: {
      true: 'sm:text-white',
      false: 'sm:text-slate-500',
    },
  },
})

const activeIndicator = tv({
  base: 'absolute bottom-0 left-0 w-full h-[3px] bg-primary xs:invisible sm:visible',
  variants: {
    animation: {
      'slide-from-left': 'animate-slide-from-left',
    },
  },
})

export function Tabs({ isOpen, tabs, className }: TabsProps) {
  const location = useLocation()

  return (
    <div className={tabsGroup({ isOpen, className: className })}>
      {tabs.map(({ name, link, onClick }, index) => (
        <div
          key={index}
          className={tabsStyle({
            active: link === location.pathname,
          })}
          onClick={onClick}
        >
          <p>{name}</p>
          {link === location.pathname && (
            <div
              className={activeIndicator({
                animation: 'slide-from-left',
              })}
            />
          )}
        </div>
      ))}
    </div>
  )
}

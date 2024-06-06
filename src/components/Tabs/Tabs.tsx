import { tv } from 'tailwind-variants'

interface TabsProps {
  activeTab: number
  tabs: { name: string; onClick?: () => void }[]
  className?: string
}

const tabsGroup = tv({
  base: `flex flex-col items-center h-[55px] justify-start w-full animate-slide-down sm:animate-none sm:flex-row`,
})

const tabsStyle = tv({
  base: 'relative flex items-center p-[18px] w-full h-full cursor-pointer text-nowrap text-base text-white border border-slate-800 bg-slate-900 transition duration-200 hover:text-white sm:w-fit sm:text-slate-500 sm:px-8 sm:py-0',
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

export function Tabs({ activeTab, tabs, className }: TabsProps) {
  return (
    <div className={tabsGroup({ className: className })}>
      {tabs.map(({ name, onClick }, index) => (
        <div
          key={index}
          className={tabsStyle({
            active: index === activeTab,
          })}
          onClick={onClick}
        >
          <p>{name}</p>
          {index === activeTab && (
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

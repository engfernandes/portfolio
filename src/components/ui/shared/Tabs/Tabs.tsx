import { useState } from 'react'
import { tv } from 'tailwind-variants'

interface TabsProps {
  tabsNames: string[]
}

const tabsGroup = tv({
  base: `flex flex-col items-center h-[55px] justify-start w-full sm:grid sm:grid-cols-4`,
})

const tabs = tv({
  base: 'relative flex items-center p-2 h-full w-full cursor-pointer text-base text-white border border-slate-800 transition duration-200 hover:text-white sm:text-slate-500 sm:px-8',
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

export function Tabs({ tabsNames }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0)

  const handleClickTab = (index: number) => {
    setActiveTab(index)
  }

  return (
    <div className={tabsGroup()}>
      {tabsNames.map((tabName, index) => (
        <div
          key={index}
          className={tabs({
            active: index === activeTab,
          })}
          onClick={() => handleClickTab(index)}
        >
          <p>{tabName}</p>
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

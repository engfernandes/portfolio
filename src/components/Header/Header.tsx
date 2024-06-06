import { tv } from 'tailwind-variants'
import { Tabs } from '../Tabs'
import { Typography } from '../Typography/Typography'
import { Icon } from '../Icon'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const header = tv({
  base: 'absolute flex flex-col top-0 left-0 w-full h-[55px] bg-slate-900 border border-slate-800 rounded-t-lg sm:flex-row sm:h-[55px]',
})

const nameDiv = tv({
  base: 'flex justify-between items-center space-x-2 w-full h-full p-[18px] text-nowrap sm:w-fit',
})

const iconDiv = tv({
  base: 'cursor-pointer transition duration-300',
})

const closeButton = tv({
  base: 'sm:invisible transition duration-300',
})

export function Header() {
  const [isOpen, setIsOpen] = useState(true)
  const [activeTab, setActiveTab] = useState(0)

  const navigate = useNavigate()

  const handleClickIconButton = () => {
    setIsOpen(!isOpen)
  }

  const handleClickTab = (index: number, link: string) => {
    setActiveTab(index)
    navigate(`${link}`)
  }

  const tabs = [
    {
      name: '_hello',
      onClick: () => handleClickTab(0, ''),
    },
    {
      name: '_about-me',
      onClick: () => handleClickTab(1, 'about-me'),
    },
    {
      name: '_projects',
      onClick: () => handleClickTab(2, 'projects'),
    },
    {
      name: '_contact-me',
      onClick: () => handleClickTab(3, 'contact-me'),
    },
  ]

  return (
    <header className={header()}>
      <div className={nameDiv()}>
        <Typography text='gabriel-fernandes' variant='p' color='gray' />
        <div className={iconDiv()}>
          <Icon
            name={isOpen ? 'x' : 'menu'}
            className={closeButton()}
            onClick={handleClickIconButton}
          />
        </div>
      </div>
      {isOpen && <Tabs activeTab={activeTab} tabs={tabs} className='w-full' />}
    </header>
  )
}

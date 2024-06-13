import { tv } from 'tailwind-variants'
import { Tabs } from '../Tabs'
import { Typography } from '../Typography/Typography'
import { Icon } from '../Icon'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const header = tv({
  base: 'absolute flex flex-col top-0 left-0 w-full h-[55px] bg-slate-900 rounded-t-lg sm:flex-row',
})

const nameDiv = tv({
  base: 'flex justify-between items-center space-x-2 w-full h-full px-[18px] text-nowrap sm:w-[265px]',
})

const iconDiv = tv({
  base: 'block cursor-pointer transition duration-300 sm:hidden',
})

const closeButton = tv({
  base: 'block transition duration-300 sm:hidden ',
})

export function Header() {
  const [isOpen, setIsOpen] = useState(true)

  const navigate = useNavigate()

  const handleClickIconButton = () => {
    setIsOpen(!isOpen)
  }

  const handleClickTab = (link: string) => {
    navigate(`${link}`)
  }

  const tabs = [
    {
      name: '_hello',
      link: '/',
      onClick: () => handleClickTab('/'),
    },
    {
      name: '_about-me',
      link: '/about-me',
      onClick: () => handleClickTab('/about-me'),
    },
    {
      name: '_projects',
      link: '/projects',
      onClick: () => handleClickTab('/projects'),
    },
    {
      name: '_contact-me',
      link: '/contact-me',
      onClick: () => handleClickTab('/contact-me'),
    },
  ]

  useEffect(() => {
    if (window.screen.width < 768) {
      setIsOpen(false)
    }
  }, [])

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
      <div>
        {isOpen && <Tabs isOpen={isOpen} tabs={tabs} className='w-full' />}
      </div>
    </header>
  )
}

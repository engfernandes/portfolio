import { tv } from 'tailwind-variants'
import { Tabs } from '../Tabs'
import { Typography } from '../Typography/Typography'
import { Icon } from '../Icon'
import { useState } from 'react'

const header = tv({
  base: 'flex flex-col w-full h-[55px] border border-slate-800 rounded-t-lg sm:flex-row',
})

const nameDiv = tv({
  base: 'flex justify-start items-center space-x-2 w-full h-full p-[18px]',
})

const iconDiv = tv({
  base: 'cursor-pointer transition duration-300',
})

const closeButton = tv({
  base: 'sm:invisible transition duration-300',
})

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClickIconButton = () => {
    setIsOpen(!isOpen)
  }

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
      <Tabs
        tabsNames={['_hello', '_about-me', '_projects', '_contact-me']}
        className='w-full'
      />
    </header>
  )
}

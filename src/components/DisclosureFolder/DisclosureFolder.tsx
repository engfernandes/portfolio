import {
  Disclosure as HeadlessDisclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { useState } from 'react'
import { tv } from 'tailwind-variants'
import { Icon } from '../Icon'
import { icons } from '../Icon/Icons'

export interface DisclosureFolderProps {
  folderColor: 'red' | 'green' | 'blue' | 'yellow'
  buttonText: string
  items: { icon: keyof typeof icons; title: string; onClick?: () => void }[]
  defaultOpen?: boolean
}

const disclosureButton = tv({
  base: 'flex items-center justify-start gap-4 text-slate-500',
  variants: {
    active: {
      true: 'text-white',
    },
  },
})

const disclosureButtonFolder = tv({
  base: 'flex items-center justify-start gap-2 text-slate-500',
  variants: {
    active: {
      true: 'text-white',
    },
  },
})

const disclosurePanel = tv({
  base: 'px-7 py-1 animate-slide-down',
})

const folderIcon = tv({
  base: '[&>path]:fill-rose-400',
  variants: {
    color: {
      red: '[&>path]:fill-rose-400',
      green: '[&>path]:fill-emerald-400',
      blue: '[&>path]:fill-indigo-800',
      yellow: '[&>path]:fill-amber-400',
    },
  },
})

const disclosureItem = tv({
  base: 'flex cursor-pointer gap-2',
})

const disclosureItemText = tv({
  base: 'text-slate-500',
})

export function DisclosureFolder({
  folderColor,
  buttonText,
  items,
  defaultOpen = false,
}: DisclosureFolderProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const [activeItem, setActiveItem] = useState(0)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleClickItem = (index: number, onClick?: () => void) => {
    setActiveItem(index)

    if (onClick) {
      onClick()
    }
  }

  return (
    <HeadlessDisclosure defaultOpen={defaultOpen}>
      <DisclosureButton onClick={handleClick} className={disclosureButton()}>
        <Icon
          name={isOpen ? 'caretDown' : 'caretRight'}
          className='[&>path]:fill-slate-500'
        />
        <div className={disclosureButtonFolder({ active: isOpen })}>
          <Icon name='folder' className={folderIcon({ color: folderColor })} />
          <p>{buttonText}</p>
        </div>
      </DisclosureButton>
      <DisclosurePanel className={disclosurePanel()}>
        {items.map(({ icon, title, onClick }, index) => (
          <div
            className={disclosureItem()}
            onClick={() => handleClickItem(index, onClick)}
            key={index}
          >
            <Icon name={icon} color={activeItem === index ? 'white' : 'gray'} />
            <p className={disclosureItemText()}>{title}</p>
          </div>
        ))}
      </DisclosurePanel>
    </HeadlessDisclosure>
  )
}

import {
  Disclosure as HeadlessDisclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { useState } from 'react'
import { tv } from 'tailwind-variants'
import { Icon } from '../Icon'
import { icons } from '../Icon/Icons'

interface DisclosureFolderProps {
  folderColor: 'red' | 'green' | 'blue'
  buttonText: string
  items: { icon: keyof typeof icons; title: string; onClick?: () => void }[]
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
    },
  },
})

export function DisclosureFolder({
  folderColor,
  buttonText,
  items,
}: DisclosureFolderProps) {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <HeadlessDisclosure>
      <DisclosureButton onClick={handleClick} className={disclosureButton()}>
        <Icon
          name={isActive ? 'caretDown' : 'caretRight'}
          className='[&>path]:fill-slate-500'
        />
        <div className={disclosureButtonFolder({ active: isActive })}>
          <Icon name='folder' className={folderIcon({ color: folderColor })} />
          <p>{buttonText}</p>
        </div>
      </DisclosureButton>
      <DisclosurePanel className={disclosurePanel()}>
        {items.map(({ icon, title, onClick }) => (
          <div className='flex gap-2' onClick={onClick}>
            <Icon name={icon} />
            <p className='text-slate-500'>{title}</p>
          </div>
        ))}
      </DisclosurePanel>
    </HeadlessDisclosure>
  )
}

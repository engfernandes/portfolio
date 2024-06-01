import {
  Disclosure as HeadlessDisclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { ReactNode, useState } from 'react'
import { tv } from 'tailwind-variants'
import { Icon } from '../Icon'
import { FolderColor } from '@/enums'

interface DisclosureFolderProps {
  folderColor: 'red' | 'green' | 'blue'
  buttonText: string
  children: ReactNode
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
  base: 'px-7 py-1',
})

export function DisclosureFolder({
  folderColor,
  buttonText,
  children,
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
          className={`[&>path]:text-${FolderColor[folderColor]}`}
        />
        <div className={disclosureButtonFolder({ active: isActive })}>
          <Icon
            name='folder'
            className={`[&>path]:text-${FolderColor[folderColor]}`}
          />
          <p>{buttonText}</p>
        </div>
      </DisclosureButton>
      <DisclosurePanel className={disclosurePanel()}>
        {children}
      </DisclosurePanel>
    </HeadlessDisclosure>
  )
}

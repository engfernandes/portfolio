import {
  Disclosure as HeadlessDisclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { ReactNode, useState } from 'react'
import { tv } from 'tailwind-variants'
import { Icon } from '../Icon'

interface DisclosureProps {
  buttonText: string
  children: ReactNode
}

const disclosureButton = tv({
  base: 'flex items-center justify-start gap-3.5 w-full text-white border-b border-slate-800 px-[18px] py-1.5',
})

const disclosurePanel = tv({
  base: 'flex flex-col items-start justify-start w-full px-[18px] py-4 text-base text-slate-500 border-b border-slate-800 animate-slide-down',
})

export function Disclosure({ buttonText, children }: DisclosureProps) {
  const [isOpen, setIsOpen] = useState(true)

  const handleClickOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <HeadlessDisclosure defaultOpen>
      <DisclosureButton
        className={disclosureButton()}
        onClick={handleClickOpen}
      >
        <Icon name={isOpen ? 'arrowDown' : 'arrowRight'} />
        <p>{buttonText}</p>
      </DisclosureButton>
      <DisclosurePanel className={disclosurePanel()}>
        {children}
      </DisclosurePanel>
    </HeadlessDisclosure>
  )
}

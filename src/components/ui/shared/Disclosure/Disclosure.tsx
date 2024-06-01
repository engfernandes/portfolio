import {
  Disclosure as HeadlessDisclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { ReactNode } from 'react'
import { tv } from 'tailwind-variants'
import { Icon } from '../Icon'

interface DisclosureProps {
  buttonText: string
  children: ReactNode
}

const disclosureButton = tv({
  base: 'flex items-center justify-start gap-3.5 w-full p-2 text-white border-b border-slate-800',
})

const disclosurePanel = tv({
  base: 'flex flex-col items-start justify-start w-full p-2 text-base text-slate-500 border-b border-slate-800',
})

export function Disclosure({ buttonText, children }: DisclosureProps) {
  return (
    <HeadlessDisclosure>
      <DisclosureButton className={disclosureButton()}>
        /* TODO: Adicionar funcionalidade de expandir e fechar no icone */
        <Icon name='arrowDown' />
        <p>{buttonText}</p>
      </DisclosureButton>
      <DisclosurePanel className={disclosurePanel()}>
        {children}
      </DisclosurePanel>
    </HeadlessDisclosure>
  )
}

import { Checkbox as HeadlessCheckbox } from '@headlessui/react'
import { Icon } from '../Icon'
import { useState } from 'react'
import { tv } from 'tailwind-variants'

const checkbox = tv({
  base: 'flex items-center justify-center size-4 h-5 w-5 rounded border border-slate-500 bg-slate-900 data-[checked]:bg-slate-500 outline-none',
})

const checkmark = tv({
  variants: {
    checked: {
      true: 'block',
      false: 'hidden',
    },
  },
})

export function Checkbox() {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <HeadlessCheckbox
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
      className={checkbox()}
    >
      <Icon name='checkmark' className={checkmark({ checked: isChecked })} />
    </HeadlessCheckbox>
  )
}

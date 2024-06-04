import {
  Checkbox as HeadlessCheckbox,
  CheckboxProps as HeadlessCheckboxProps,
} from '@headlessui/react'
import { Icon } from '../Icon'
import { tv } from 'tailwind-variants'
import { icons } from '../Icon/Icons'
import { Typography } from '../Typography'

interface CheckboxProps extends HeadlessCheckboxProps {
  checked: boolean
  label?: string
  icon?: keyof typeof icons
}

const div = tv({
  base: 'flex items-center gap-6',
})

const checkbox = tv({
  base: 'flex items-center justify-center size-4 h-5 w-5 rounded border border-slate-500 bg-slate-900 data-[checked]:bg-slate-500 outline-none cursor-pointer',
})

const labelDiv = tv({
  base: 'flex items-center gap-2 cursor-pointer',
})

const checkmark = tv({
  variants: {
    checked: {
      true: 'block',
      false: 'hidden',
    },
  },
})

export function Checkbox({ checked, label, icon, ...props }: CheckboxProps) {
  return (
    <div className={div()}>
      <HeadlessCheckbox checked={checked} className={checkbox()} {...props}>
        <Icon name='checkmark' className={checkmark({ checked: checked })} />
      </HeadlessCheckbox>
      <div className={labelDiv()}>
        {icon && <Icon name={icon} />}
        {label && <Typography text={label} variant='p' color='white' />}
      </div>
    </div>
  )
}

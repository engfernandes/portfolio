import { Button as HeadlessButton } from '@headlessui/react'
import { HTMLAttributes } from 'react'
import { tv } from 'tailwind-variants'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string
  variant?: 'primary' | 'secondary' | 'tertiary'
  className?: string
}

const button = tv({
  base: 'items-center justify-center inline-flex px-3.5 py-2.5 font-medium text-sm rounded-lg w-fit h-fit gap-2.5',
  variants: {
    color: {
      primary:
        'bg-primary text-gray-950 hover:bg-primary-hover transition duration-300',
      secondary:
        'bg-none text-white border-white border hover:border-opacity-80 hover:text-opacity-80 transition duration-300',
      tertiary:
        'bg-slate-800 text-white hover:bg-slate-700 transition duration-300',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
})

export function Button({ text, variant, className, ...props }: ButtonProps) {
  return (
    <HeadlessButton
      className={button({ color: variant, className })}
      {...props}
    >
      {text}
    </HeadlessButton>
  )
}

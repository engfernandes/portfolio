import { HTMLAttributes } from 'react'
import { tv } from 'tailwind-variants'

interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {
  text: string
  variant: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  color: 'white' | 'blue' | 'green' | 'red' | 'gray'
}

const typography = tv({
  variants: {
    size: {
      h1: 'font-light text-6xl sm:text-[62px]',
      h2: 'font-regular text-xl sm:text-[32px]',
      h3: 'font-regular text-lg',
      p: 'text-base',
      span: 'text-base',
    },
    color: {
      white: 'text-slate-200',
      blue: 'text-indigo-500',
      green: 'text-emerald-400',
      red: 'text-rose-400',
      gray: 'text-slate-500',
    },
  },
  defaultVariants: {
    size: 'p',
    color: 'white',
  },
})

export function Typography({
  text,
  variant,
  color,
  className,
  ...props
}: TypographyProps) {
  const Component = variant

  return (
    <Component
      className={typography({
        size: variant,
        color: color,
        className: className,
      })}
      {...props}
    >
      {text}
    </Component>
  )
}

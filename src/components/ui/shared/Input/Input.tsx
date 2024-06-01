import { tv } from 'tailwind-variants'
import { Typography } from '../Typography'
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  className?: string
}

const div = tv({
  base: 'flex flex-col justify-start gap-2',
})

const input = tv({
  base: 'h-10 rounded-lg border border-slate-800 bg-slate-950 p-2.5 text-slate-600 shadow outline-none focus:border-slate-500 placeholder:text-slate-800',
})

export function Input({ label, className, ...props }: InputProps) {
  return (
    <div className={div()}>
      {label && (
        <Typography
          text={`_${label.includes(':') ? label : `${label}:`}`}
          variant='p'
          color='gray'
          className='lowercase'
        />
      )}
      <input className={input({ className })} {...props} />
    </div>
  )
}

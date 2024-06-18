import { InputHTMLAttributes } from 'react'
import { tv } from 'tailwind-variants'

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string
  type?: 'email' | 'text' | 'textarea'
}

const input = tv({
  base: 'rounded-lg border border-slate-800 bg-slate-950 p-3 text-base text-slate-600 outline-none placeholder:text-slate-700 focus:border-slate-500',
  variants: {
    type: {
      textarea:
        'relative resize-none h-36 text-base placeholder:absolute placeholder:left-3 placeholder:top-3',
      text: '',
      email: '',
    },
  },
})

export function Input({ label, type = 'text', ...props }: InputProps) {
  return (
    <div className='flex flex-col gap-2'>
      {label && (
        <label className='text-base text-slate-500'>{`_${label.replace(':', '').replace('_', '')}:`}</label>
      )}
      {type !== 'textarea' && (
        <input type={type} className={input({ type: type })} {...props} />
      )}
      {type === 'textarea' && (
        <textarea className={input({ type: type })} {...props}></textarea>
      )}
    </div>
  )
}

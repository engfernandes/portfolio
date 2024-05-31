import { HTMLAttributes } from 'react'
import { icons } from './Icons'
import { tv } from 'tailwind-variants'

interface IconProps extends HTMLAttributes<SVGElement> {
  name: keyof typeof icons
  label?: string
  width?: string
  height?: string
  className?: string
}

const iconDiv = tv({
  base: 'flex items-center justify-center gap-2',
})

const labelText = tv({
  base: 'text-sm text-slate-500',
})

export function Icon({
  name,
  label,
  width,
  height,
  className,
  ...props
}: IconProps) {
  const Icon = icons[name]

  if (!Icon) {
    return null
  }

  return (
    <div className={iconDiv()}>
      {label && <p className={labelText()}>{label}</p>}
      <Icon width={width} height={height} className={className} {...props} />
    </div>
  )
}

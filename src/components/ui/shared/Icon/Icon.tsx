import { HTMLAttributes } from 'react'
import { icons } from './Icons'

interface IconProps extends HTMLAttributes<SVGElement> {
  name: keyof typeof icons
  width?: string
  height?: string
  className?: string
}

export function Icon({ name, width, height, className, ...props }: IconProps) {
  const Icon = icons[name]

  if (!Icon) {
    return null
  }

  return <Icon width={width} height={height} className={className} {...props} />
}

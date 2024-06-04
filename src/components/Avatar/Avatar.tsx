import { HTMLAttributes } from 'react'
import { tv } from 'tailwind-variants'

interface AvatarProps extends HTMLAttributes<HTMLImageElement> {
  src: string
  size?: 'small' | 'medium' | 'large'
}

const avatar = tv({
  base: 'rounded-full object-cover',
})

export function Avatar({ src, size = 'medium', ...props }: AvatarProps) {
  let sizeInPx = '36px'
  if (size === 'small') {
    sizeInPx = '24px'
  } else if (size === 'large') {
    sizeInPx = '48px'
  }

  return (
    <img
      src={src}
      width={sizeInPx}
      height={sizeInPx}
      className={avatar()}
      {...props}
    />
  )
}

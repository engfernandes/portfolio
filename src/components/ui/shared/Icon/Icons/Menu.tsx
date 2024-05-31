import { HTMLAttributes } from 'react'

interface MenuProps extends HTMLAttributes<SVGElement> {
  width?: string
  height?: string
  className?: string
}

export function Menu({ width, height, className, ...props }: MenuProps) {
  return (
    <svg
      width={width || '18'}
      height={height || '16'}
      viewBox='0 0 18 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <path d='M0 0H18V2H0V0ZM0 7H18V9H0V7ZM0 14H18V16H0V14Z' fill='#607B96' />
    </svg>
  )
}

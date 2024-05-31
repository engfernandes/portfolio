import { HTMLAttributes } from 'react'

interface XProps extends HTMLAttributes<SVGElement> {
  width?: string
  height?: string
  className?: string
}

export function X({ width, height, className, ...props }: XProps) {
  return (
    <svg
      width={width || '16'}
      height={height || '16'}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <path
        d='M8 6.2225L14.2225 0L16 1.7775L9.7775 8L16 14.2225L14.2225 16L8 9.7775L1.7775 16L0 14.2225L6.2225 8L0 1.7775L1.7775 0L8 6.2225Z'
        fill='#607B96'
      />
    </svg>
  )
}

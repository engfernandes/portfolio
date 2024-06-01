import { IconProps } from '.'

export function ArrowRight({ width, height, className, ...props }: IconProps) {
  return (
    <svg
      width={width || '6'}
      height={height || '9'}
      viewBox='0 0 6 9'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <path
        d='M6 4.37245L-3.71548e-07 8.62247L0 0.122436L6 4.37245Z'
        fill='white'
      />
    </svg>
  )
}

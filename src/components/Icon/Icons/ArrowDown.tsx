import { IconProps } from '.'

export function ArrowDown({ width, height, className, ...props }: IconProps) {
  return (
    <svg
      width={width || '9'}
      height={height || '7'}
      viewBox='0 0 9 7'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <path
        d='M4.24998 6.58521L-3.10421e-05 0.585206L8.5 0.585205L4.24998 6.58521Z'
        fill='white'
      />
    </svg>
  )
}

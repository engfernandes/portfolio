import { IconProps } from '.'

export function CaretDown({ width, height, className, ...props }: IconProps) {
  return (
    <svg
      width={width || '13'}
      height={height || '9'}
      viewBox='0 0 13 9'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <path
        d='M6.364 5.27715L11.314 0.327148L12.728 1.74115L6.364 8.10515L0 1.74115L1.414 0.327148L6.364 5.27715Z'
        fill='#607B96'
      />
    </svg>
  )
}

import { IconProps } from '.'

export function SimpleVueLogo({
  width,
  height,
  className,
  ...props
}: IconProps) {
  return (
    <svg
      width={width || '23'}
      height={height || '20'}
      viewBox='0 0 23 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <path
        d='M0.311523 0.5H4.31152L11.3115 12.5L18.3115 0.5H22.3115L11.3115 19.5L0.311523 0.5ZM8.97852 0.5L11.3115 4.5L13.6445 0.5H17.6795L11.3115 11.5L4.94352 0.5H8.97852Z'
        fill='#607B96'
      />
    </svg>
  )
}

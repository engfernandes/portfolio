import { IconProps } from '.'

export function SimpleAngularLogo({
  width,
  height,
  className,
  ...props
}: IconProps) {
  return (
    <svg
      width={width || '19'}
      height={height || '20'}
      viewBox='0 0 19 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <path
        d='M9.31172 0L18.6117 3.32L17.1937 15.63L9.31172 20L1.42972 15.63L0.0117188 3.32L9.31172 0ZM9.31172 2.21L3.49772 15.26H5.66572L6.83472 12.34H11.7687L12.9387 15.26H15.1057L9.31172 2.21ZM11.0097 10.54H7.61372L9.31172 6.45L11.0097 10.54Z'
        fill='#607B96'
      />
    </svg>
  )
}

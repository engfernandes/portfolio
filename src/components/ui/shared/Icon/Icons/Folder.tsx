import { IconProps } from '.'

export function Folder({ width, height, className, ...props }: IconProps) {
  return (
    <svg
      width={width || '16'}
      height={height || '21'}
      viewBox='0 0 16 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <path
        d='M1 18.6519H15V20.6519H1V18.6519ZM8 16.6519C5.87827 16.6519 3.84344 15.809 2.34315 14.3087C0.842855 12.8084 0 10.7736 0 8.65186C0 6.53012 0.842855 4.49529 2.34315 2.995C3.84344 1.49471 5.87827 0.651855 8 0.651855C10.1217 0.651855 12.1566 1.49471 13.6569 2.995C15.1571 4.49529 16 6.53012 16 8.65186C16 10.7736 15.1571 12.8084 13.6569 14.3087C12.1566 15.809 10.1217 16.6519 8 16.6519Z'
        fill='#607B96'
      />
    </svg>
  )
}

import { IconProps } from '.'

export function SimpleReactLogo({
  width,
  height,
  className,
  ...props
}: IconProps) {
  return (
    <svg
      width={width || '22'}
      height={height || '20'}
      viewBox='0 0 22 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <path
        d='M11.3115 11.5C10.9137 11.5 10.5322 11.342 10.2509 11.0607C9.96956 10.7793 9.81152 10.3978 9.81152 9.99999C9.81152 9.60217 9.96956 9.22064 10.2509 8.93933C10.5322 8.65803 10.9137 8.49999 11.3115 8.49999C11.7093 8.49999 12.0909 8.65803 12.3722 8.93933C12.6535 9.22064 12.8115 9.60217 12.8115 9.99999C12.8115 10.3978 12.6535 10.7793 12.3722 11.0607C12.0909 11.342 11.7093 11.5 11.3115 11.5ZM10.7835 14.494C10.9585 14.704 11.1345 14.908 11.3115 15.103C11.4885 14.908 11.6645 14.705 11.8395 14.494C11.4876 14.5015 11.1355 14.5015 10.7835 14.494ZM8.78852 14.369C8.02058 14.2891 7.25772 14.1662 6.50352 14.001C6.42852 14.351 6.37152 14.691 6.33352 15.017C6.14352 16.6 6.40852 17.562 6.81152 17.794C7.21452 18.027 8.17952 17.775 9.45652 16.82C9.71952 16.623 9.98452 16.404 10.2505 16.165C9.73002 15.5941 9.24192 14.9945 8.78852 14.369ZM16.1195 14.001C15.4025 14.161 14.6365 14.285 13.8345 14.369C13.3811 14.9945 12.893 15.5941 12.3725 16.165C12.6385 16.405 12.9035 16.623 13.1665 16.82C14.4435 17.775 15.4085 18.027 15.8115 17.794C16.2145 17.562 16.4785 16.6 16.2905 15.017C16.2492 14.6759 16.1925 14.3369 16.1205 14.001H16.1195ZM17.5695 13.614C18.1465 16.253 17.8435 18.354 16.5615 19.094C15.2795 19.834 13.3085 19.046 11.3115 17.227C9.31452 19.046 7.34352 19.833 6.06152 19.093C4.77952 18.353 4.47652 16.253 5.05252 13.613C2.47852 12.794 0.811523 11.48 0.811523 9.99999C0.811523 8.51999 2.47852 7.20699 5.05252 6.38599C4.47652 3.74699 4.77952 1.64599 6.06152 0.905992C7.34352 0.165992 9.31452 0.953992 11.3115 2.77299C13.3085 0.953992 15.2795 0.166992 16.5615 0.906992C17.8435 1.64699 18.1465 3.74699 17.5705 6.38699C20.1445 7.20599 21.8115 8.51999 21.8115 9.99999C21.8115 11.48 20.1445 12.793 17.5705 13.614H17.5695ZM10.2495 3.83499C9.99521 3.6048 9.73061 3.38624 9.45652 3.17999C8.17952 2.22499 7.21452 1.97299 6.81152 2.20599C6.40852 2.43799 6.14452 3.39999 6.33252 4.98299C6.37252 5.30999 6.42852 5.64899 6.50252 5.99899C7.25705 5.83373 8.02025 5.71087 8.78852 5.63099C9.26352 4.97799 9.75352 4.37699 10.2505 3.83499H10.2495ZM13.8345 5.63099C14.6365 5.71499 15.4025 5.83999 16.1195 5.99899C16.1945 5.64899 16.2515 5.30899 16.2895 4.98299C16.4795 3.39999 16.2145 2.43799 15.8115 2.20599C15.4085 1.97299 14.4435 2.22499 13.1665 3.17999C12.8921 3.38622 12.6272 3.60477 12.3725 3.83499C12.8695 4.37699 13.3595 4.97799 13.8345 5.63099ZM11.8395 5.50599C11.6645 5.29599 11.4885 5.09199 11.3115 4.89699C11.1345 5.09199 10.9585 5.29499 10.7835 5.50599C11.1355 5.49852 11.4876 5.49852 11.8395 5.50599ZM7.68352 12.704C7.50108 12.4031 7.32504 12.0984 7.15552 11.79C7.06052 12.047 6.97252 12.3 6.89252 12.551C7.14952 12.607 7.41352 12.658 7.68252 12.704H7.68352ZM9.61552 12.938C10.7446 13.0219 11.8784 13.0219 13.0075 12.938C13.6447 12.0019 14.2116 11.0199 14.7035 9.99999C14.2116 8.98007 13.6447 7.99804 13.0075 7.06199C11.8784 6.97813 10.7446 6.97813 9.61552 7.06199C8.97832 7.99804 8.41143 8.98007 7.91952 9.99999C8.41143 11.0199 8.97832 12.0019 9.61552 12.938ZM15.4675 8.20999C15.5625 7.95299 15.6505 7.69999 15.7305 7.44899C15.4684 7.3921 15.205 7.34109 14.9405 7.29599C15.1226 7.5969 15.2983 7.90164 15.4675 8.20999ZM5.44152 7.83699C5.10152 7.94699 4.77952 8.06699 4.47752 8.19699C3.01252 8.82499 2.31152 9.53499 2.31152 9.99999C2.31152 10.465 3.01152 11.175 4.47752 11.803C4.77952 11.933 5.10152 12.053 5.44152 12.163C5.66352 11.463 5.93852 10.737 6.26652 9.99999C5.95135 9.29496 5.67592 8.57283 5.44152 7.83699ZM6.89152 7.44899C6.97252 7.69899 7.06052 7.95299 7.15552 8.20899C7.32505 7.90096 7.50109 7.59656 7.68352 7.29599C7.41352 7.34199 7.14952 7.39299 6.89252 7.44899H6.89152ZM17.1815 12.163C17.5215 12.053 17.8435 11.933 18.1455 11.803C19.6105 11.175 20.3115 10.465 20.3115 9.99999C20.3115 9.53499 19.6115 8.82499 18.1455 8.19699C17.8298 8.06249 17.5081 7.94237 17.1815 7.83699C16.9595 8.53699 16.6845 9.26299 16.3565 9.99999C16.6845 10.737 16.9595 11.462 17.1815 12.163ZM15.7315 12.551C15.6505 12.301 15.5625 12.047 15.4675 11.791C15.298 12.099 15.122 12.4034 14.9395 12.704C15.2095 12.658 15.4735 12.607 15.7305 12.551H15.7315Z'
        fill='#607B96'
      />
    </svg>
  )
}
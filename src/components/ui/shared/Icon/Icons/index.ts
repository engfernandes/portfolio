import { HTMLAttributes } from 'react'
import { Menu } from './Menu'
import { X } from './X'
import { GitHub } from './GitHub'
import { Linkedin } from './Linkedin'

export interface IconProps extends HTMLAttributes<SVGElement> {
  width?: string
  height?: string
  className?: string
}

export const icons = {
  x: X,
  menu: Menu,
  github: GitHub,
  linkedin: Linkedin,
}

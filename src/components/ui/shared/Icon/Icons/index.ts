import { HTMLAttributes } from 'react'
import { Menu } from './Menu'
import { X } from './X'
import { GitHub } from './GitHub'
import { Linkedin } from './Linkedin'
import { Comment } from './Comment'
import { Star } from './Star'
import { Terminal } from './Terminal'
import { Joystick } from './Joystick'
import { Trophy } from './Trophy'
import { Folder } from './Folder'
import { Markdown } from './Markdown'
import { Email } from './Email'
import { Phone } from './Phone'
import { React } from './React'

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
  comment: Comment,
  star: Star,
  terminal: Terminal,
  joystick: Joystick,
  trophy: Trophy,
  folder: Folder,
  markdown: Markdown,
  email: Email,
  phone: Phone,
  react: React,
}
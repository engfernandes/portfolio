import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'UI/Shared/Avatar',
  component: Avatar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    src: {
      type: 'string',
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Small: Story = {
  args: {
    src: 'https://avatars.githubusercontent.com/u/102419427?s=400&u=03b538eaf95e106af2ad83b436394bc4f17cedb3&v=4',
    size: 'small',
  },
}

export const Medium: Story = {
  args: {
    src: 'https://avatars.githubusercontent.com/u/102419427?s=400&u=03b538eaf95e106af2ad83b436394bc4f17cedb3&v=4',
    size: 'medium',
  },
}

export const Large: Story = {
  args: {
    src: 'https://avatars.githubusercontent.com/u/102419427?s=400&u=03b538eaf95e106af2ad83b436394bc4f17cedb3&v=4',
    size: 'large',
  },
}

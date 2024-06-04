import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Typography } from './Typography'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Typography',
  component: Typography,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      options: ['h1', 'h2', 'h3', 'p', 'span'],
    },
    color: {
      options: ['white', 'blue', 'green', 'red', 'gray'],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const H1: Story = {
  args: {
    variant: 'h1',
    color: 'white',
    text: 'Text',
  },
}

export const H2: Story = {
  args: {
    variant: 'h2',
    color: 'blue',
    text: 'Text',
  },
}

export const H3: Story = {
  args: {
    variant: 'h3',
    color: 'white',
    text: 'Text',
  },
}

export const PGray: Story = {
  args: {
    variant: 'p',
    color: 'gray',
    text: 'Text',
  },
}

export const SpanGreen: Story = {
  args: {
    variant: 'span',
    color: 'green',
    text: 'Text',
  },
}

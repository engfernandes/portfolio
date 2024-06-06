import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    type: {
      options: ['text', 'number', 'password', 'email'],
      control: {
        type: 'select',
      },
    },
    label: {
      type: 'string',
    },
    placeholder: {
      type: 'string',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Text: Story = {
  args: {
    type: 'text',
    label: '_name:',
  },
}

export const Email: Story = {
  args: {
    type: 'email',
    label: '_email:',
  },
}

export const TextArea: Story = {
  args: {
    type: 'textarea',
    label: '_message:',
  },
}

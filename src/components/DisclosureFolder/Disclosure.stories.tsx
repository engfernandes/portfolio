import type { Meta, StoryObj } from '@storybook/react'
import { DisclosureFolder } from './DisclosureFolder'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'DisclosureFolder',
  component: DisclosureFolder,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    items: {},
    buttonText: {
      type: 'string',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof DisclosureFolder>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Main: Story = {
  args: {
    buttonText: 'education',
    folderColor: 'red',
    items: [
      {
        title: 'high-school',
        icon: 'markdown',
        onClick: () => {},
      },
    ],
  },
}

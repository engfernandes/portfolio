import type { Meta, StoryObj } from '@storybook/react'
import { ProjectCard } from './ProjectCard'
import { icons } from '../Icon/Icons'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'UI/Shared/ProjectCard',
  component: ProjectCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    icon: {
      options: Object.keys(icons),
      control: {
        type: 'select',
      },
    },
    description: {
      type: 'string',
    },
    image: {
      type: 'string',
    },
    url: {
      type: 'string',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof ProjectCard>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Main: Story = {
  args: {
    icon: 'react',
    description:
      'Duis aute irure dolor in velit esse cillum incididunt ut labore.',
    image: 'img/example.png',
    url: 'https://google.com',
  },
}

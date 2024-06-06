import type { Meta, StoryObj } from '@storybook/react'
import { ProjectsList } from './ProjectsList'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pages/Projects/ProjectsList',
  component: ProjectsList,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    projects: {},
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof ProjectsList>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Main: Story = {
  args: {
    projects: [
      {
        title: 'ui-animations',
        description: 'Animations that make your work more beautiful',
        icon: 'react',
        image: 'img/example.png',
        url: 'https://google.com',
      },
      {
        title: 'ui-animations',
        description: 'Animations that make your work more beautiful',
        icon: 'react',
        image: 'img/example.png',
        url: 'https://google.com',
      },
    ],
  },
}

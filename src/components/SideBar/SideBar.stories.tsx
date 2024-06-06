import type { Meta, StoryObj } from '@storybook/react'
import { SideBar } from './SideBar'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'SideBar',
  component: SideBar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    disclosures: {},
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof SideBar>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const WithDisclosureFolders: Story = {
  args: {
    disclosures: [
      {
        buttonText: 'personal-info',
        disclosureFolders: [
          {
            buttonText: 'bio',
            folderColor: 'red',
            items: [
              {
                icon: 'markdown',
                title: 'resume',
                onClick: () => {},
              },
            ],
          },
          {
            buttonText: 'interests',
            folderColor: 'green',
            items: [
              {
                icon: 'markdown',
                title: 'jesus',
                onClick: () => {},
              },
            ],
          },
          {
            buttonText: 'education',
            folderColor: 'blue',
            items: [
              {
                icon: 'markdown',
                title: 'university',
                onClick: () => {},
              },
              {
                icon: 'markdown',
                title: 'courses',
                onClick: () => {},
              },
            ],
          },
        ],
      },
    ],
  },
}

export const WithCheckboxes: Story = {
  args: {
    disclosures: [
      {
        buttonText: 'projects',
        checkboxes: [
          {
            checked: true,
            label: 'React',
            icon: 'simpleReactLogo',
            onClick: () => {},
          },
          {
            checked: false,
            label: 'Angular',
            icon: 'simpleAngularLogo',
            onClick: () => {},
          },
          {
            checked: false,
            label: 'Vue',
            icon: 'simpleVueLogo',
            onClick: () => {},
          },
        ],
      },
    ],
  },
}

import type { Meta, StoryObj } from '@storybook/react'
import { ContentTab } from './ContentTab'
import {
  ProjectsList,
  ProjectsListProps,
} from '@/features/Projects/components/ProjectsList/ProjectsList'
import { ContentTabText } from '../ContentTabText/ContentTabText'
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'ContentTab',
  component: ContentTab,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    tabTitle: {
      type: 'string',
    },
    children: {},
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof ContentTab>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const WithText: Story = {
  args: {
    tabTitle: 'personal-info',
    children: (
      <>
        <ContentTabText
          text='/**
 * About me
 * I have 5 years of еxperience in web
 * development lorem ipsum dolor sit amet, 
 * consectetur adipiscing elit, sed do eiusmod
 * tempor incididunt ut labore et dolore
 * magna aliqua. Ut enim ad minim veniam,
 * quis nostrud exercitation ullamco laboris
 * nisi ut aliquip ex ea commodo consequat.
 * Duis aute irure dolor in reprehenderit in
 *
 * Duis aute irure dolor in reprehenderit in
 * voluptate velit esse cillum dolore eu fugiat 
 * nulla pariatur. Excepteur sint occaecat 
 * officia deserunt mollit anim id est laborum.
 */'
        />
        <ContentTabText
          text='/**
 * About me
 * I have 5 years of еxperience in web
 * development lorem ipsum dolor sit amet, 
 * consectetur adipiscing elit, sed do eiusmod
 * tempor incididunt ut labore et dolore
 * magna aliqua. Ut enim ad minim veniam,
 * quis nostrud exercitation ullamco laboris
 * nisi ut aliquip ex ea commodo consequat.
 * Duis aute irure dolor in reprehenderit in
 *
 * Duis aute irure dolor in reprehenderit in
 * voluptate velit esse cillum dolore eu fugiat 
 * nulla pariatur. Excepteur sint occaecat 
 * officia deserunt mollit anim id est laborum.
 */'
        />
      </>
    ),
  },
}

const projectsList: ProjectsListProps = {
  projects: [
    {
      title: 'ui-animations',
      image: 'img/example.png',
      description:
        'Duis aute irure dolor in velit esse cillum incididunt ut labore.',
      icon: 'react',
      url: 'https://google.com',
    },
    {
      title: 'ui-animations',
      image: 'img/example.png',
      description:
        'Duis aute irure dolor in velit esse cillum incididunt ut labore.',
      icon: 'react',
      url: 'https://google.com',
    },
  ],
}

export const WithProjectsList: Story = {
  args: {
    tabTitle: 'personal-info',
    children: (
      <div className='p-9'>
        <ProjectsList projects={projectsList.projects} />
      </div>
    ),
  },
}

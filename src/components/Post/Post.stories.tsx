import type { Meta, StoryObj } from '@storybook/react'
import { Post } from './Post'
import { Languages } from '@/enums'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Post',
  component: Post,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    avatar: {
      type: 'string',
    },
    username: {
      type: 'string',
    },
    code: {
      type: 'string',
    },
    stars: {
      type: 'number',
    },
    language: {
      options: Object.keys(Languages),
      control: {
        type: 'select',
      },
    },
    createdAt: {
      type: 'string',
    },
    updatedAt: {
      type: 'string',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof Post>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Main: Story = {
  args: {
    avatar:
      'https://avatars.githubusercontent.com/u/102419427?s=400&u=03b538eaf95e106af2ad83b436394bc4f17cedb3&v=4',
    username: 'engfernandes',
    stars: 3,
    language: Languages.typescript,
    code: `
function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
  const value: T = parseModel(chunk._response, chunk._value);
  const initializedChunk: InitializedChunk<T> = (chunk: any);
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;
}
    `,
    createdAt: '2024-06-01T00:00:00.000Z',
    updatedAt: '2024-06-01T00:00:00.000Z',
  },
}

import type { Meta, StoryObj } from '@storybook/react'
import { CodeBlock } from './CodeBlock'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'UI/Shared/CodeBlock',
  component: CodeBlock,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    language: {
      type: 'string',
    },
    children: {},
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof CodeBlock>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Main: Story = {
  args: {
    language: 'typescript',
    children: `
    function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
      const value: T = parseModel(chunk._response, chunk._value);
      const initializedChunk: InitializedChunk<T> = (chunk: any);
      initializedChunk._status = INITIALIZED;
      initializedChunk._value = value;
      return value;
    }
    `,
  },
}

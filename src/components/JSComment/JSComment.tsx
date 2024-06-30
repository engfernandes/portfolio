import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface JSCommentProps {
  text: string
}

export function JSComment({ text }: JSCommentProps) {
  return (
    <SyntaxHighlighter
      language='markdown'
      style={nightOwl}
      customStyle={{ background: 'transparent', fontSize: '18px' }}
    >
      {text}
    </SyntaxHighlighter>
  )
}

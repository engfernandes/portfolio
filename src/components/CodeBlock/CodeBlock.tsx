import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { tv } from 'tailwind-variants'

interface CodeBlockProps {
  language: string
  children: string
  className?: string
}

const codeBlockDiv = tv({
  base: 'flex h-fit max-h-[215px] max-w-[664px] items-center justify-center overflow-none rounded-[15px] border border-slate-800 bg-slate-950',
})

export function CodeBlock({ language, children, className }: CodeBlockProps) {
  return (
    <div className={codeBlockDiv({ className: className })}>
      <SyntaxHighlighter
        language={language}
        style={nightOwl}
        PreTag='div'
        customStyle={{
          background: 'transparent',
          padding: 16,
          margin: 0,
          overflowX: 'auto',
          maxWidth: '400px',
          overflowY: 'auto',
          maxHeight: '500px',
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  )
}

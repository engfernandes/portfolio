import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { tv } from 'tailwind-variants'

interface CodeBlockProps {
  language: string
  children: string
}

const codeBlockDiv = tv({
  base: 'scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-slate-950 flex h-fit max-h-[215px] w-[664px] items-center justify-center overflow-y-auto rounded-[15px] border border-slate-800 bg-slate-950',
})

export function CodeBlock({ language, children }: CodeBlockProps) {
  return (
    <div className={codeBlockDiv()}>
      <SyntaxHighlighter
        language={language}
        style={nightOwl}
        PreTag='div'
        customStyle={{
          background: 'transparent',
          padding: 0,
          margin: 0,
          width: 'fit-content',
          overflow: 'hidden',
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  )
}

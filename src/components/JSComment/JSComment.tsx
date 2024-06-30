import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface JSCommentProps {
  text: string
}

export function JSComment({ text }: JSCommentProps) {
  // const textSplitted = text.split('\n')

  return (
    <SyntaxHighlighter
      language='markdown'
      style={nightOwl}
      customStyle={{ background: 'transparent', fontSize: '18px' }}
    >
      {text}
    </SyntaxHighlighter>
    // <section>
    //   {textSplitted.map((text, index) => (
    //     <div key={index} className='flex gap-8'>
    //       <span className='w-4 text-slate-500'>{index}</span>
    //       <span className='text-slate-500'>{text}</span>
    //     </div>
    //   ))}
    // </section>
  )
}

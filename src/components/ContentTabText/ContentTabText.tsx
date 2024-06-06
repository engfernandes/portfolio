interface ContentTabTextProps {
  text: string
}

export function ContentTabText({ text }: ContentTabTextProps) {
  return (
    <>
      <p className='block text-wrap border-r border-slate-800 p-9 text-base text-slate-500'>
        /*
        {text.split('*').map((item, index) => (
          <>
            {item.trim() !== '' &&
              index !== 0 &&
              index < text.split('*').length - 1 &&
              '* ' + item.trim().replace('/', '')}
            {item.trim() !== '' && index < text.split('*').length - 1 && (
              <br key={index} />
            )}
          </>
        ))}
        */
      </p>
    </>
  )
}

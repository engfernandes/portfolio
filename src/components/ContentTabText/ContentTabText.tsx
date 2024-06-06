interface ContentTabTextProps {
  text: string
}

export function ContentTabText({ text }: ContentTabTextProps) {
  return (
    <>
      <p className='block text-wrap text-base text-slate-500'>
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

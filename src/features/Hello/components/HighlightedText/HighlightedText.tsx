import { Typography } from '@/components'

export function HighlightedText() {
  return (
    <main className='flex flex-col gap-20'>
      <div className='flex flex-col flex-wrap gap-2'>
        <Typography text='Hi all. I am' variant='h3' color='white' />
        <Typography text='Gabriel Fernandes' variant='h1' color='white' />
        <Typography text='> Full-stack developer' variant='h2' color='blue' />
      </div>
      <div className='flex flex-col gap-2'>
        <Typography
          text='// find my profile on Github:'
          variant='p'
          color='gray'
        />
        <div className='flex flex-wrap gap-3'>
          <Typography text='const' variant='p' color='blue' />
          <Typography text='githubLink' variant='p' color='green' />
          <Typography text='=' variant='p' color='white' />
          <a
            href='https://github.com/engfernandes'
            target='_blank'
            rel='noreferrer'
          >
            <Typography
              text='https://github.com/engfernandes'
              variant='p'
              color='red'
              className='flex flex-wrap underline'
            />
          </a>
        </div>
      </div>
    </main>
  )
}

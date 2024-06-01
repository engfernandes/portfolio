import { tv } from 'tailwind-variants'
import { Avatar } from '../Avatar'
import { Icon } from '../Icon'
import { Typography } from '../Typography'
import { CodeBlock } from '../CodeBlock'
import { Languages } from '@/enums'
import { formatDistance } from 'date-fns'
import { formatInTimeZone } from 'date-fns-tz'

interface PostProps {
  avatar: string
  username: string
  code: string
  stars: number
  language: Languages
  createdAt: string
  updatedAt?: string
}

const article = tv({
  base: 'flex flex-col w-[660px] gap-2.5',
})

const header = tv({
  base: 'flex items-center justify-between w-full h-fit',
})

const userDiv = tv({
  base: 'flex items-center gap-2',
})

const statsDiv = tv({
  base: 'flex items-center gap-3.5',
})

export function Post({
  avatar,
  username,
  stars,
  code,
  language,
  createdAt,
  updatedAt,
}: PostProps) {
  const formatedDifferenceDate = formatDistance(
    updatedAt || createdAt,
    formatInTimeZone(new Date(), 'America/Sao_Paulo', 'yyyy-MM-dd HH:mm:ss'),
  )

  return (
    <article className={article()}>
      <header className={header()}>
        <div className={userDiv()}>
          <Avatar src={avatar} size='medium' />
          <div>
            <Typography
              text={`@${username}`}
              variant='p'
              color='blue'
              className='text-sm font-bold'
            />
            <Typography
              text={formatedDifferenceDate}
              variant='p'
              color='gray'
              className='text-xs'
            />
          </div>
        </div>
        <div className={statsDiv()}>
          <Icon name='comment' label='details' />
          <Icon name='star' label={`${stars || 0} stars`} />
        </div>
      </header>
      <main>
        <CodeBlock language={language} children={code} />
      </main>
    </article>
  )
}

import { Layout } from '@/components'
import { HighlightText } from '@/features'
import { tv } from 'tailwind-variants'

const backgroundBlurs = tv({
  base: 'absolute object-cover right-[18px]',
})

export function HelloPage() {
  return (
    <Layout variant='flex'>
      <img
        src='img/background-blurs.png'
        alt='Background blurs'
        className={backgroundBlurs()}
      />
      <HighlightText />
    </Layout>
  )
}

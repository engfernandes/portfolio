import { Footer, Header } from '@/components'
import { HighlightText } from '@/features'

export function HomePage() {
  return (
    <div className='fixed flex h-full w-full items-center justify-center bg-gray-950 p-4 sm:p-6'>
      <div className='relative flex h-full w-full flex-col justify-center rounded-lg border-l border-r border-slate-800 bg-slate-900 p-4'>
        <Header />
        <div className='mb-[55px] mt-[55px] flex h-full w-full items-center justify-center'>
          <HighlightText />
        </div>
        <Footer />
      </div>
    </div>
  )
}

import { Layout, ContentTab, JSComment, SideBarProps } from '@/components'
import {
  bio,
  interests,
  university,
  experience,
} from '@/features/AboutMe/constants'
import { useState } from 'react'

export function AboutMePage() {
  const texts = [bio, interests, university, experience]
  const [text, setText] = useState(texts[0])

  const disclosures: SideBarProps = {
    disclosures: [
      {
        buttonText: 'personal-info',
        disclosureFolders: [
          {
            buttonText: 'bio',
            folderColor: 'red',
            defaultOpen: true,
            items: [
              {
                icon: 'markdown',
                title: 'bio',
                onClick: () => setText(texts[0]),
              },
            ],
          },
          {
            buttonText: 'interests',
            folderColor: 'green',
            items: [
              {
                icon: 'markdown',
                title: 'interests',
                onClick: () => setText(texts[1]),
              },
            ],
          },
          {
            buttonText: 'experience',
            folderColor: 'yellow',
            items: [
              {
                icon: 'markdown',
                title: 'experience',
                onClick: () => setText(texts[3]),
              },
            ],
          },
        ],
      },
    ],
  }

  return (
    <Layout sideBarProps={disclosures} variant='grid'>
      <ContentTab tabTitle='personal-info' styleProps={{ withBorder: true }}>
        <JSComment text={text} />
      </ContentTab>
    </Layout>
  )
}

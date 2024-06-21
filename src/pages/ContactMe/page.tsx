import { ContentTab, Layout, SideBarProps } from '@/components'
import { ContactForm } from '@/features'

export function ContactMePage() {
  const disclosures: SideBarProps = {
    disclosures: [
      {
        buttonText: 'contacts',
        items: [
          {
            icon: 'email',
            text: 'gabriel.fernandes.06@outlook.com',
            onClick: () => {
              navigator.clipboard.writeText('gabriel.fernandes.06@outlook.com')
            },
          },
          {
            icon: 'phone',
            text: '+55 (11)97741-5624',
            onClick: () => {
              navigator.clipboard.writeText('+55 (11)97741-5624')
            },
          },
        ],
      },
      {
        buttonText: 'find-me-also-in',
        items: [
          {
            icon: 'linkInNewTab',
            text: 'Instagram',
            onClick: () => {
              window.open('https://instagram.com/limaagabrielf')
            },
          },
        ],
      },
    ],
  }

  return (
    <Layout variant='grid' sideBarProps={disclosures}>
      <ContentTab
        tabTitle='contacts'
        isOpen
        styleProps={{ withBorder: true, layout: 'twoCols' }}
      >
        <ContactForm />
      </ContentTab>
    </Layout>
  )
}

import { ContentTab, Layout, SideBarProps } from '@/components'
import { ContactForm } from '@/features'

export function ContactMePage() {
  const disclosures: SideBarProps = {
    disclosures: [
      {
        buttonText: 'projects',
        checkboxes: [
          {
            checked: true,
            label: 'React',
            icon: 'simpleReactLogo',
          },
          {
            checked: true,
            label: 'Angular',
            icon: 'simpleAngularLogo',
          },
          {
            checked: true,
            label: 'Vue',
            icon: 'simpleVueLogo',
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

import { Layout, ContentTab, SideBarProps } from '@/components'
import { ProjectsList } from '@/features'

export function ProjectsPage() {
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
    <Layout sideBarProps={disclosures}>
      <ContentTab tabTitle='projects'>
        <ProjectsList />
      </ContentTab>
    </Layout>
  )
}

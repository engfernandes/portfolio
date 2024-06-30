import { Layout, ContentTab, SideBarProps, Typography } from '@/components'
// import { ProjectsList } from '@/features'

export function ProjectsPage() {
  const disclosures: SideBarProps = {
    disclosures: [
      {
        buttonText: 'projects',
        checkboxes: [
          {
            checked: true,
            label: 'Coming Soon...',
            icon: 'markdown',
          },
        ],
      },
    ],
  }

  return (
    <Layout sideBarProps={disclosures} variant='grid'>
      <ContentTab tabTitle='projects' styleProps={{ withBorder: true }}>
        {/* <ProjectsList /> */}
        <Typography text='Coming Soon...' color='white' variant='h3' />
      </ContentTab>
    </Layout>
  )
}

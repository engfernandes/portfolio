import { SideBarProps } from '@/components'

export const disclosures: SideBarProps = {
  disclosures: [
    {
      buttonText: 'personal-info',
      disclosureFolders: [
        {
          buttonText: 'bio',
          folderColor: 'red',
          items: [
            {
              icon: 'markdown',
              title: 'bio',
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
            },
          ],
        },
        {
          buttonText: 'education',
          folderColor: 'blue',
          items: [
            {
              icon: 'markdown',
              title: 'university',
            },
            {
              icon: 'markdown',
              title: 'courses',
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
            },
          ],
        },
      ],
    },
  ],
}

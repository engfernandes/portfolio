import { Checkbox } from '../Checkbox'
import { Disclosure } from '../Disclosure'
import { DisclosureFolder } from '../DisclosureFolder'
import { Icon } from '../Icon'
import { icons } from '../Icon/Icons'
import { Typography } from '../Typography'

export interface SideBarProps {
  disclosures: {
    buttonText: string
    disclosureFolders?: {
      buttonText: string
      folderColor: 'red' | 'green' | 'blue'
      items: { icon: keyof typeof icons; title: string; onClick?: () => void }[]
    }[]
    checkboxes?: {
      checked: boolean
      label: string
      icon: keyof typeof icons
      onClick?: () => void
    }[]
    items?: { icon?: keyof typeof icons; text: string; onClick?: () => void }[]
  }[]
}

export function SideBar({ disclosures }: SideBarProps) {
  return (
    <aside className='hidden sm:flex sm:h-full sm:w-[265px] sm:flex-col'>
      {disclosures.map(
        ({ buttonText, disclosureFolders, checkboxes, items }, index) => (
          <Disclosure key={index} buttonText={buttonText}>
            {disclosureFolders &&
              disclosureFolders.map(
                ({ buttonText, folderColor, items }, index) => (
                  <DisclosureFolder
                    key={index}
                    buttonText={buttonText}
                    folderColor={folderColor}
                    items={items}
                  />
                ),
              )}
            {checkboxes && (
              <div className='flex flex-col gap-4'>
                {checkboxes.map(({ checked, label, icon, onClick }, index) => (
                  <Checkbox
                    key={index}
                    checked={checked}
                    label={label}
                    icon={icon}
                    onClick={onClick}
                  />
                ))}
              </div>
            )}
            <div className='flex flex-col gap-4'>
              {items &&
                items.map(({ icon, text, onClick }, index) => (
                  <span
                    key={index}
                    onClick={onClick}
                    className='flex max-w-[200px] cursor-pointer items-center gap-2'
                  >
                    {icon && <Icon name={icon} />}
                    <Typography
                      text={text}
                      variant='p'
                      color='gray'
                      className='truncate break-all'
                    />
                  </span>
                ))}
            </div>
          </Disclosure>
        ),
      )}
    </aside>
  )
}

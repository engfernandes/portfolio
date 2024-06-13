import { Checkbox } from '../Checkbox'
import { Disclosure } from '../Disclosure'
import { DisclosureFolder } from '../DisclosureFolder'
import { icons } from '../Icon/Icons'

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
  }[]
}

export function SideBar({ disclosures }: SideBarProps) {
  return (
    <aside className='absolute hidden sm:left-0 sm:top-[55px] sm:flex sm:h-full sm:w-[265px] sm:flex-col sm:border-t sm:border-slate-800'>
      {disclosures.map(
        ({ buttonText, disclosureFolders, checkboxes }, index) => (
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
          </Disclosure>
        ),
      )}
    </aside>
  )
}

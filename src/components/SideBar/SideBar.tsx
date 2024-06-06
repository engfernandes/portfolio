import { Checkbox } from '../Checkbox'
import { Disclosure } from '../Disclosure'
import { DisclosureFolder } from '../DisclosureFolder'
import { icons } from '../Icon/Icons'

interface SideBarProps {
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
    <aside className='flex w-full flex-col border border-b-0 border-slate-800 sm:w-80'>
      {disclosures.map(({ buttonText, disclosureFolders, checkboxes }) => (
        <Disclosure key={buttonText} buttonText={buttonText}>
          {disclosureFolders &&
            disclosureFolders.map(({ buttonText, folderColor, items }) => (
              <DisclosureFolder
                key={buttonText}
                buttonText={buttonText}
                folderColor={folderColor}
                items={items}
              />
            ))}
          {checkboxes && (
            <div className='flex flex-col gap-4'>
              {checkboxes.map(({ checked, label, icon, onClick }) => (
                <Checkbox
                  checked={checked}
                  label={label}
                  icon={icon}
                  onClick={onClick}
                />
              ))}
            </div>
          )}
        </Disclosure>
      ))}
    </aside>
  )
}

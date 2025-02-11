import * as AriaRoles from '../AriaRoles/AriaRoles.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getSearchFieldButtonVirtualDom = (button: any): readonly any[] => {
  const { icon, checked, title } = button
  return [
    {
      type: VirtualDomElements.Div,
      className: `SearchFieldButton ${checked ? 'SearchFieldButtonChecked' : ''}`,
      title,
      role: AriaRoles.CheckBox,
      ariaChecked: checked,
      tabIndex: 0,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Div,
      className: `MaskIcon ${icon}`,
      childCount: 0,
    },
  ]
}

import * as AriaRoles from '../AriaRoles/AriaRoles.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import { InputAction } from '../InputAction/InputAction.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'

export const getSearchFieldButtonVirtualDom = (button: InputAction): readonly VirtualDomNode[] => {
  const { icon, title } = button
  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SearchField,
      title,
      role: AriaRoles.CheckBox,
      tabIndex: 0,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Div,
      className: MergeClassNames.mergeClassNames(ClassNames.MaskIcon, icon),
      childCount: 0,
    },
  ]
}

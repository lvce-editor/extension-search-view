import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import type { InputAction } from '../InputAction/InputAction.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

const getClassName = (enabled: boolean): string => {
  if (enabled) {
    return ClassNames.SearchFieldButton
  }
  return MergeClassNames.mergeClassNames(ClassNames.SearchFieldButton, ClassNames.SearchFieldDisabled)
}

export const getSearchFieldButtonVirtualDom = (button: InputAction): readonly VirtualDomNode[] => {
  const { icon, title, enabled } = button
  return [
    {
      type: VirtualDomElements.Div,
      className: getClassName(enabled),
      title,
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

import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { InputAction } from '../InputAction/InputAction.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'

const disabledClassName = MergeClassNames.mergeClassNames(ClassNames.SearchFieldButton, ClassNames.SearchFieldButtonDisabled)

const getClassName = (enabled: boolean): string => {
  if (enabled) {
    return ClassNames.SearchFieldButton
  }
  return disabledClassName
}

export const getSearchFieldButtonVirtualDom = (button: InputAction): readonly VirtualDomNode[] => {
  const { enabled, icon, onClick, title } = button
  return [
    {
      childCount: 1,
      className: getClassName(enabled),
      onClick,
      tabIndex: 0,
      title,
      type: VirtualDomElements.Button,
    },
    {
      childCount: 0,
      className: MergeClassNames.mergeClassNames(ClassNames.MaskIcon, icon),
      type: VirtualDomElements.Div,
    },
  ]
}

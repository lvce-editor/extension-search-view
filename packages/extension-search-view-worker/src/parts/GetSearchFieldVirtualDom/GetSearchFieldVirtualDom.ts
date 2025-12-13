import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { InputAction } from '../InputAction/InputAction.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as AriaRoles from '../AriaRoles/AriaRoles.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetSearchFieldButtonVirtualDom from '../GetSearchFieldButtonVirtualDom/GetSearchFieldButtonVirtualDom.ts'

export const getSearchFieldVirtualDom = (
  name: string,
  placeholder: string,
  onInput: string | number,
  insideButtons: readonly InputAction[],
  outsideButtons: readonly InputAction[],
  onFocus = '',
): readonly VirtualDomNode[] => {
  // TODO avoid mutation
  const dom = [
    {
      childCount: 2,
      className: ClassNames.SearchField,
      role: AriaRoles.None,
      type: VirtualDomElements.Div,
    },
    {
      autocapitalize: 'off',
      autocomplete: 'off',
      autocorrect: 'off',
      childCount: 0,
      className: ClassNames.MultilineInputBox,
      inputType: 'search',
      name,
      onFocus,
      onInput,
      placeholder,
      spellcheck: false,
      type: VirtualDomElements.Input,
    },
    {
      childCount: insideButtons.length,
      className: ClassNames.SearchFieldButtons,
      type: VirtualDomElements.Div,
    },
    ...insideButtons.flatMap(GetSearchFieldButtonVirtualDom.getSearchFieldButtonVirtualDom),
  ]
  if (outsideButtons.length > 0) {
    dom.unshift({
      childCount: 1 + outsideButtons.length,
      className: ClassNames.SearchFieldContainer,
      role: AriaRoles.None,
      type: VirtualDomElements.Div,
    })
    dom.push(...outsideButtons.flatMap(GetSearchFieldButtonVirtualDom.getSearchFieldButtonVirtualDom))
  }
  return dom
}

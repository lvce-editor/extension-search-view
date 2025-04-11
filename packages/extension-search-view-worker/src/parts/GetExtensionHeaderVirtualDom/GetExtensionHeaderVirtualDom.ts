import type { InputAction } from '../InputAction/InputAction.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetSearchFieldVirtualDom from '../GetSearchFieldVirtualDom/GetSearchFieldVirtualDom.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

const parentNode: VirtualDomNode = {
  type: VirtualDomElements.Div,
  className: ClassNames.ExtensionHeader,
  childCount: 1,
}

export const getExtensionHeaderVirtualDom = (placeholder: string, actions: readonly InputAction[]): readonly VirtualDomNode[] => {
  return [parentNode, ...GetSearchFieldVirtualDom.getSearchFieldVirtualDom('extensions', placeholder, 'handleExtensionsInput', actions, [])]
}

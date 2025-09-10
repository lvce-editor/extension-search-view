import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { InputAction } from '../InputAction/InputAction.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as GetSearchFieldVirtualDom from '../GetSearchFieldVirtualDom/GetSearchFieldVirtualDom.ts'

const parentNode: VirtualDomNode = {
  type: VirtualDomElements.Div,
  className: ClassNames.ExtensionHeader,
  childCount: 1,
}

export const getExtensionHeaderVirtualDom = (placeholder: string, actions: readonly InputAction[]): readonly VirtualDomNode[] => {
  return [
    parentNode,
    ...GetSearchFieldVirtualDom.getSearchFieldVirtualDom('extensions', placeholder, DomEventListenerFunctions.HandleExtensionsInput, actions, []),
  ]
}

import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { InputAction } from '../InputAction/InputAction.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as GetSearchFieldVirtualDom from '../GetSearchFieldVirtualDom/GetSearchFieldVirtualDom.ts'
import * as InputName from '../InputName/InputName.ts'

const parentNode: VirtualDomNode = {
  type: VirtualDomElements.Div,
  className: ClassNames.ExtensionHeader,
  childCount: 1,
  onContextMenu: DomEventListenerFunctions.HandleHeaderContextMenu,
}

export const getExtensionHeaderVirtualDom = (placeholder: string, actions: readonly InputAction[]): readonly VirtualDomNode[] => {
  return [
    parentNode,
    ...GetSearchFieldVirtualDom.getSearchFieldVirtualDom(
      InputName.Extensions,
      placeholder,
      DomEventListenerFunctions.HandleExtensionsInput,
      actions,
      [],
    ),
  ]
}

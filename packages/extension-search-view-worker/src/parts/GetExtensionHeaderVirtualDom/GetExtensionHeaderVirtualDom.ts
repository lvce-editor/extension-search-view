import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetSearchFieldVirtualDom from '../GetSearchFieldVirtualDom/GetSearchFieldVirtualDom.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'

export const getExtensionHeaderVirtualDom = (placeholder: string, actions: readonly any[]): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.ExtensionHeader,
      childCount: 1,
    },
    ...GetSearchFieldVirtualDom.getSearchFieldVirtualDom('extensions', placeholder, DomEventListenerFunctions.HandleExtensionsInput, actions, []),
  ]
}

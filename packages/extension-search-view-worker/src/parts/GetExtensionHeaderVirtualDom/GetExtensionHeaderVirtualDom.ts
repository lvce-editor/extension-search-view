import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { CompletionItem } from '../CompletionItem/CompletionItem.ts'
import type { InputAction } from '../InputAction/InputAction.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as AriaRoles from '../AriaRoles/AriaRoles.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getCompletionWidgetVirtualDom } from '../GetCompletionWidgetVirtualDom/GetCompletionWidgetVirtualDom.ts'
import * as GetSearchFieldVirtualDom from '../GetSearchFieldVirtualDom/GetSearchFieldVirtualDom.ts'
import * as InputName from '../InputName/InputName.ts'

export const getExtensionHeaderVirtualDom = (
  placeholder: string,
  actions: readonly InputAction[],
  completionItems: readonly CompletionItem[] = [],
  completionFocusedIndex = 0,
  suggestOpen = false,
): readonly VirtualDomNode[] => {
  const inputProperties: Partial<VirtualDomNode> = suggestOpen
    ? {
        ariaActivedescendant: `ExtensionSearchCompletion-${completionFocusedIndex}`,
        ariaAutoComplete: 'list',
        ariaControls: 'ExtensionSearchCompletions',
        ariaExpanded: true,
        role: AriaRoles.ComboBox,
      }
    : {
        ariaAutoComplete: 'list',
        ariaExpanded: false,
        role: AriaRoles.ComboBox,
      }
  return [
    {
      childCount: suggestOpen ? 2 : 1,
      className: ClassNames.ExtensionHeader,
      onContextMenu: DomEventListenerFunctions.HandleHeaderContextMenu,
      type: VirtualDomElements.Div,
    },
    ...GetSearchFieldVirtualDom.getSearchFieldVirtualDom(
      InputName.Extensions,
      placeholder,
      DomEventListenerFunctions.HandleExtensionsInput,
      actions,
      [],
      DomEventListenerFunctions.HandleInputFocus,
      DomEventListenerFunctions.HandleInputBlur,
      inputProperties,
    ),
    ...(suggestOpen ? getCompletionWidgetVirtualDom(completionItems, completionFocusedIndex) : []),
  ]
}

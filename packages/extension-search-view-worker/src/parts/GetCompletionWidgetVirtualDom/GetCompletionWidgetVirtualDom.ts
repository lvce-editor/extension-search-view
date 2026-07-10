import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { CompletionItem } from '../CompletionItem/CompletionItem.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as AriaRoles from '../AriaRoles/AriaRoles.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import { getCompletionItemVirtualDom } from '../GetCompletionItemVirtualDom/GetCompletionItemVirtualDom.ts'

export const getCompletionWidgetVirtualDom = (items: readonly CompletionItem[], focusedIndex: number): readonly VirtualDomNode[] => {
  return [
    {
      ariaLabel: 'Extension search completions',
      childCount: items.length,
      className: ClassNames.ExtensionSearchCompletionWidget,
      id: 'ExtensionSearchCompletions',
      role: AriaRoles.ListBox,
      type: VirtualDomElements.Div,
    },
    ...items.flatMap((item, index) => getCompletionItemVirtualDom(item, index, focusedIndex)),
  ]
}

import { expect, test } from '@jest/globals'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import { getCompletionItemVirtualDom } from '../src/parts/GetCompletionItemVirtualDom/GetCompletionItemVirtualDom.ts'
import { getCompletionLabelVirtualDom } from '../src/parts/GetCompletionLabelVirtualDom/GetCompletionLabelVirtualDom.ts'
import { getCompletionWidgetVirtualDom } from '../src/parts/GetCompletionWidgetVirtualDom/GetCompletionWidgetVirtualDom.ts'

test('renders highlighted completion label', () => {
  const result = getCompletionLabelVirtualDom('@builtin', [0, 2, 5, 7])
  expect(result).toEqual([
    { childCount: 1, className: 'ExtensionSearchCompletionHighlight', name: '@builtin', type: VirtualDomElements.Span },
    { childCount: 0, text: '@b', type: VirtualDomElements.Text },
    { childCount: 0, text: 'uil', type: VirtualDomElements.Text },
    { childCount: 1, className: 'ExtensionSearchCompletionHighlight', name: '@builtin', type: VirtualDomElements.Span },
    { childCount: 0, text: 'ti', type: VirtualDomElements.Text },
    { childCount: 0, text: 'n', type: VirtualDomElements.Text },
  ])
})

test('renders completion item accessibility and focus', () => {
  const result = getCompletionItemVirtualDom({ highlights: [0, 1], label: '@builtin' }, 0, 0)
  expect(result[0]).toMatchObject({
    ariaSelected: true,
    childCount: 2,
    className: 'ExtensionSearchCompletionItem ExtensionSearchCompletionItemFocused',
    id: 'ExtensionSearchCompletion-0',
    name: '@builtin',
    onPointerDown: 7,
    role: 'option',
  })
})

test('renders unfocused completion item', () => {
  const result = getCompletionItemVirtualDom({ highlights: [], label: '@builtin' }, 0, 1)
  expect(result[0]).toMatchObject({ ariaSelected: false, className: 'ExtensionSearchCompletionItem' })
})

test('renders completion listbox', () => {
  const result = getCompletionWidgetVirtualDom([{ highlights: [0, 1], label: '@builtin' }], 0)
  expect(result[0]).toEqual({
    ariaLabel: 'Extension search completions',
    childCount: 1,
    className: 'ExtensionSearchCompletionWidget',
    id: 'ExtensionSearchCompletions',
    role: 'listbox',
    type: VirtualDomElements.Div,
  })
})

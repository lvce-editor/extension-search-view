import { expect, test } from '@jest/globals'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { InputAction } from '../src/parts/InputAction/InputAction.ts'
import * as GetExtensionHeaderVirtualDom from '../src/parts/GetExtensionHeaderVirtualDom/GetExtensionHeaderVirtualDom.ts'

test('should return correct virtual DOM structure', () => {
  const placeholder = 'Search extensions...'
  const actions: readonly InputAction[] = []
  const result = GetExtensionHeaderVirtualDom.getExtensionHeaderVirtualDom(placeholder, actions)
  expect(result).toEqual([
    {
      childCount: 1,
      className: 'ExtensionHeader',
      onContextMenu: 16,
      type: 4,
    },
    {
      childCount: 2,
      className: 'SearchField',
      role: 'none',
      type: 4,
    },
    {
      ariaAutoComplete: 'list',
      ariaExpanded: false,
      autocapitalize: 'off',
      autocomplete: 'off',
      autocorrect: 'off',
      childCount: 0,
      className: 'MultilineInputBox',
      inputType: 'search',
      name: 'extensions',
      onBlur: 24,
      onFocus: 23,
      onInput: 4,
      placeholder: 'Search extensions...',
      role: 'combobox',
      spellcheck: false,
      type: VirtualDomElements.Input,
    },
    {
      childCount: 0,
      className: 'SearchFieldButtons',
      type: 4,
    },
  ])
})

test('renders open completion popup and input accessibility state', () => {
  const result = GetExtensionHeaderVirtualDom.getExtensionHeaderVirtualDom(
    'Search extensions...',
    [],
    [{ highlights: [0, 1], label: '@builtin' }],
    0,
    true,
  )
  expect(result[0].childCount).toBe(2)
  expect(result[2]).toMatchObject({
    ariaActivedescendant: 'ExtensionSearchCompletion-0',
    ariaControls: 'ExtensionSearchCompletions',
    ariaExpanded: true,
  })
  expect(result.some((node) => node.className === 'ExtensionSearchCompletionWidget')).toBe(true)
})

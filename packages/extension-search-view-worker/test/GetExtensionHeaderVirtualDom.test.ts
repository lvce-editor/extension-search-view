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
      autocapitalize: 'off',
      autocomplete: 'off',
      autocorrect: 'off',
      childCount: 0,
      className: 'MultilineInputBox',
      inputType: 'search',
      name: 'extensions',
      onFocus: '',
      onInput: 4,
      placeholder: 'Search extensions...',
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

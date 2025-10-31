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
      autocorrect: 'off',
      autocomplete: 'off',
      childCount: 0,
      className: 'MultilineInputBox',
      name: 'extensions',
      onFocus: '',
      onInput: 'handleExtensionsInput',
      placeholder: 'Search extensions...',
      spellcheck: false,
      type: VirtualDomElements.Input,
      inputType: 'search',
    },
    {
      childCount: 0,
      className: 'SearchFieldButtons',
      type: 4,
    },
  ])
})

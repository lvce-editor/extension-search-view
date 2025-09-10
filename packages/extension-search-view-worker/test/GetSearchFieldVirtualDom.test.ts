import { expect, test } from '@jest/globals'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as AriaRoles from '../src/parts/AriaRoles/AriaRoles.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as GetSearchFieldVirtualDom from '../src/parts/GetSearchFieldVirtualDom/GetSearchFieldVirtualDom.ts'

test('creates basic search field virtual dom', () => {
  const result = GetSearchFieldVirtualDom.getSearchFieldVirtualDom('search', 'Search...', 'onInput()', [], [])

  expect(result).toEqual([
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SearchField,
      role: AriaRoles.None,
      childCount: 2,
    },
    {
      type: VirtualDomElements.Input,
      inputType: 'search',
      className: ClassNames.MultilineInputBox,
      spellcheck: false,
      autocapitalize: 'off',
      autocorrect: 'off',
      placeholder: 'Search...',
      name: 'search',
      onInput: 'onInput()',
      onFocus: '',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SearchFieldButtons,
      childCount: 0,
    },
  ])
})

test.skip('creates search field with inside buttons', () => {
  const insideButtons: readonly any[] = [{ id: 'button1' }]
  const result = GetSearchFieldVirtualDom.getSearchFieldVirtualDom('search', 'Search...', 'onInput()', insideButtons, [])

  expect(result).toEqual([
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SearchField,
      role: AriaRoles.None,
      childCount: 2,
    },
    {
      type: VirtualDomElements.TextArea,
      className: ClassNames.MultilineInputBox,
      spellcheck: false,
      autocapitalize: 'off',
      autocorrect: 'off',
      placeholder: 'Search...',
      name: 'search',
      onInput: 'onInput()',
      onFocus: '',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SearchFieldButtons,
      childCount: 1,
    },
  ])
})

test('creates search field with outside buttons', () => {
  const outsideButtons: readonly any[] = [{ id: 'button1' }]
  const result = GetSearchFieldVirtualDom.getSearchFieldVirtualDom('search', 'Search...', 'onInput()', [], outsideButtons)

  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: ClassNames.SearchFieldContainer,
    role: AriaRoles.None,
    childCount: 2,
  })
})

import { expect, test } from '@jest/globals'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as AriaRoles from '../src/parts/AriaRoles/AriaRoles.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as GetSearchFieldVirtualDom from '../src/parts/GetSearchFieldVirtualDom/GetSearchFieldVirtualDom.ts'

test('creates basic search field virtual dom', () => {
  const result = GetSearchFieldVirtualDom.getSearchFieldVirtualDom('search', 'Search...', 'onInput()', [], [])

  expect(result).toEqual([
    {
      childCount: 2,
      className: ClassNames.SearchField,
      role: AriaRoles.None,
      type: VirtualDomElements.Div,
    },
    {
      autocapitalize: 'off',
      autocomplete: 'off',
      autocorrect: 'off',
      childCount: 0,
      className: ClassNames.MultilineInputBox,
      inputType: 'search',
      name: 'search',
      onFocus: '',
      onInput: 'onInput()',
      placeholder: 'Search...',
      spellcheck: false,
      type: VirtualDomElements.Input,
    },
    {
      childCount: 0,
      className: ClassNames.SearchFieldButtons,
      type: VirtualDomElements.Div,
    },
  ])
})

test('creates search field with inside buttons', () => {
  const insideButtons: readonly any[] = [{ id: 'button1' }]
  const result = GetSearchFieldVirtualDom.getSearchFieldVirtualDom('search', 'Search...', 'onInput()', insideButtons, [])

  expect(result[0]).toEqual({
    childCount: 2,
    className: ClassNames.SearchField,
    role: AriaRoles.None,
    type: VirtualDomElements.Div,
  })
  expect(result[1]).toEqual({
    autocapitalize: 'off',
    autocomplete: 'off',
    autocorrect: 'off',
    childCount: 0,
    className: ClassNames.MultilineInputBox,
    inputType: 'search',
    name: 'search',
    onFocus: '',
    onInput: 'onInput()',
    placeholder: 'Search...',
    spellcheck: false,
    type: VirtualDomElements.Input,
  })
  expect(result[2]).toEqual({
    childCount: 1,
    className: ClassNames.SearchFieldButtons,
    type: VirtualDomElements.Div,
  })
  expect(result.length).toBeGreaterThan(2)
})

test('creates search field with outside buttons', () => {
  const outsideButtons: readonly any[] = [{ id: 'button1' }]
  const result = GetSearchFieldVirtualDom.getSearchFieldVirtualDom('search', 'Search...', 'onInput()', [], outsideButtons)

  expect(result[0]).toEqual({
    childCount: 2,
    className: ClassNames.SearchFieldContainer,
    role: AriaRoles.None,
    type: VirtualDomElements.Div,
  })
})

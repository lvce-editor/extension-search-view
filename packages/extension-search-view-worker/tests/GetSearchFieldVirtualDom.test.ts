import { expect, test } from '@jest/globals'
import * as GetSearchFieldVirtualDom from '../src/parts/GetSearchFieldVirtualDom/GetSearchFieldVirtualDom'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements'
import * as ClassNames from '../src/parts/ClassNames/ClassNames'
import * as AriaRoles from '../src/parts/AriaRoles/AriaRoles'

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
      childCount: 0,
    },
  ])
})

test('creates search field with inside buttons', () => {
  const insideButtons = [{ id: 'button1' }]
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
  const outsideButtons = [{ id: 'button1' }]
  const result = GetSearchFieldVirtualDom.getSearchFieldVirtualDom('search', 'Search...', 'onInput()', [], outsideButtons)

  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: ClassNames.SearchFieldContainer,
    role: AriaRoles.None,
    childCount: 2,
  })
})

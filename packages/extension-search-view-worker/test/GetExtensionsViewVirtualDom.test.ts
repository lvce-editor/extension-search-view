import { expect, test } from '@jest/globals'
import { AriaRoles, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { ExtensionListItem } from '../src/parts/ExtensionListItem/ExtensionListItem.ts'
import type { State } from '../src/parts/State/State.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FocusId from '../src/parts/FocusId/FocusId.ts'
import * as GetExtensionsViewVirtualDom from '../src/parts/GetExtensionsViewVirtualDom/GetExtensionsViewVirtualDom.ts'
import * as MergeClassNames from '../src/parts/MergeClassNames/MergeClassNames.ts'

const createMockExtensionListItem = (overrides?: Partial<ExtensionListItem>): ExtensionListItem => {
  return {
    categories: [],
    description: 'Test Description',
    icon: 'test-icon.png',
    id: 'test-extension',
    name: 'Test Extension',
    publisher: 'Test Publisher',
    updatedDate: 1000,
    uri: 'https://example.com',
    ...overrides,
  }
}

test('returns correct virtual DOM structure with default state', () => {
  const state: State = { ...createDefaultState() }
  const result = GetExtensionsViewVirtualDom.getExtensionsViewVirtualDom(state)

  expect(result.length).toBeGreaterThan(0)
  expect(result[0]).toEqual({
    ariaBusy: false,
    ariaLive: 'polite',
    childCount: 2,
    className: MergeClassNames.mergeClassNames(ClassNames.Viewlet, ClassNames.Extensions),
    role: AriaRoles.None,
    type: VirtualDomElements.Div,
  })
})

test('includes extension header in virtual DOM', () => {
  const state: State = {
    ...createDefaultState(),
    inputActions: [],
    placeholder: 'Search extensions...',
  }
  const result = GetExtensionsViewVirtualDom.getExtensionsViewVirtualDom(state)

  expect(result.length).toBeGreaterThan(1)
  expect(result[1]).toBeDefined()
})

test('shows no extensions found message when message is present', () => {
  const state: State = {
    ...createDefaultState(),
    message: 'No extensions found',
  }
  const result = GetExtensionsViewVirtualDom.getExtensionsViewVirtualDom(state)

  const hasNoExtensionsFound = result.some((node) => node.className === ClassNames.NoExtensionsFoundMessage)
  expect(hasNoExtensionsFound).toBe(true)
})

test('shows extensions list when message is empty', () => {
  const mockItem = createMockExtensionListItem()
  const state: State = {
    ...createDefaultState(),
    items: [mockItem],
    maxLineY: 1,
    message: '',
    minLineY: 0,
  }
  const result = GetExtensionsViewVirtualDom.getExtensionsViewVirtualDom(state)

  const hasListDiv = result.some((node) => node.className === MergeClassNames.mergeClassNames(ClassNames.Viewlet, ClassNames.List))
  expect(hasListDiv).toBe(true)
})

test('includes scrollbar when scrollBarHeight is greater than 0', () => {
  const state: State = {
    ...createDefaultState(),
    message: '',
    scrollBarHeight: 100,
    scrollBarY: 50,
  }
  const result = GetExtensionsViewVirtualDom.getExtensionsViewVirtualDom(state)

  const hasScrollBar = result.some((node) => node.className === MergeClassNames.mergeClassNames(ClassNames.ScrollBar, ClassNames.ScrollBarSmall))
  expect(hasScrollBar).toBe(true)
})

test('does not include scrollbar when scrollBarHeight is 0', () => {
  const state: State = {
    ...createDefaultState(),
    message: '',
    scrollBarHeight: 0,
    scrollBarY: 0,
  }
  const result = GetExtensionsViewVirtualDom.getExtensionsViewVirtualDom(state)

  const hasScrollBar = result.some((node) => node.className === MergeClassNames.mergeClassNames(ClassNames.ScrollBar, ClassNames.ScrollBarSmall))
  expect(hasScrollBar).toBe(false)
})

test('sets focusOutline to true when focusedIndex is -1 and focus is List', () => {
  const mockItem = createMockExtensionListItem()
  const state: State = {
    ...createDefaultState(),
    focus: FocusId.List,
    focusedIndex: -1,
    items: [mockItem],
    maxLineY: 1,
    message: '',
    minLineY: 0,
  }
  const result = GetExtensionsViewVirtualDom.getExtensionsViewVirtualDom(state)

  const hasFocusOutline = result.some((node) => node.className === MergeClassNames.mergeClassNames(ClassNames.ListItems, ClassNames.FocusOutline))
  expect(hasFocusOutline).toBe(true)
})

test('sets focusOutline to false when focusedIndex is not -1', () => {
  const mockItem = createMockExtensionListItem()
  const state: State = {
    ...createDefaultState(),
    focus: FocusId.List,
    focusedIndex: 0,
    items: [mockItem],
    maxLineY: 1,
    message: '',
    minLineY: 0,
  }
  const result = GetExtensionsViewVirtualDom.getExtensionsViewVirtualDom(state)

  const hasFocusOutline = result.some((node) => node.className === MergeClassNames.mergeClassNames(ClassNames.ListItems, ClassNames.FocusOutline))
  expect(hasFocusOutline).toBe(false)
})

test('sets focusOutline to false when focus is not List', () => {
  const mockItem = createMockExtensionListItem()
  const state: State = {
    ...createDefaultState(),
    focus: FocusId.Input,
    focusedIndex: -1,
    items: [mockItem],
    maxLineY: 1,
    message: '',
    minLineY: 0,
  }
  const result = GetExtensionsViewVirtualDom.getExtensionsViewVirtualDom(state)

  const hasFocusOutline = result.some((node) => node.className === MergeClassNames.mergeClassNames(ClassNames.ListItems, ClassNames.FocusOutline))
  expect(hasFocusOutline).toBe(false)
})

test('handles multiple visible extensions', () => {
  const mockItems: ExtensionListItem[] = [
    createMockExtensionListItem({ id: 'extension-1', name: 'Extension 1' }),
    createMockExtensionListItem({ id: 'extension-2', name: 'Extension 2' }),
    createMockExtensionListItem({ id: 'extension-3', name: 'Extension 3' }),
  ]
  const state: State = {
    ...createDefaultState(),
    items: mockItems,
    maxLineY: 3,
    message: '',
    minLineY: 0,
  }
  const result = GetExtensionsViewVirtualDom.getExtensionsViewVirtualDom(state)

  expect(result.length).toBeGreaterThan(0)
  const hasListDiv = result.some((node) => node.className === MergeClassNames.mergeClassNames(ClassNames.Viewlet, ClassNames.List))
  expect(hasListDiv).toBe(true)
})

test('handles empty items array', () => {
  const state: State = {
    ...createDefaultState(),
    items: [],
    maxLineY: 0,
    message: '',
    minLineY: 0,
  }
  const result = GetExtensionsViewVirtualDom.getExtensionsViewVirtualDom(state)

  expect(result.length).toBeGreaterThan(0)
  const hasListDiv = result.some((node) => node.className === MergeClassNames.mergeClassNames(ClassNames.Viewlet, ClassNames.List))
  expect(hasListDiv).toBe(true)
})

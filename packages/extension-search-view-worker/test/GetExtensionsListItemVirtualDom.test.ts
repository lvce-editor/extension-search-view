import { expect, test } from '@jest/globals'
import { text, VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VisibleItem } from '../src/parts/VisibleItem/VisibleItem.ts'
import * as AriaRoleDescription from '../src/parts/AriaRoleDescription/AriaRoleDescription.ts'
import * as AriaRoles from '../src/parts/AriaRoles/AriaRoles.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as GetExtensionsListItemVirtualDom from '../src/parts/GetExtensionsListItemVirtualDom/GetExtensionsListItemVirtualDom.ts'
import * as MergeClassNames from '../src/parts/MergeClassNames/MergeClassNames.ts'

const createMockVisibleItem = (overrides?: Partial<VisibleItem>): VisibleItem => {
  return {
    description: 'Test Description',
    focused: false,
    icon: 'test-icon.png',
    id: 'test-extension',
    index: 0,
    name: 'Test Extension',
    posInSet: 1,
    publisher: 'Test Publisher',
    setSize: 10,
    top: 0,
    ...overrides,
  }
}

test('creates virtual dom with correct structure', () => {
  const item = createMockVisibleItem()
  const result = GetExtensionsListItemVirtualDom.getExtensionListItemVirtualDom(item)

  expect(result).toHaveLength(11)
})

test('sets main list item div with correct properties when focused', () => {
  const item = createMockVisibleItem({ focused: true, posInSet: 3, setSize: 20, top: 100 })
  const result = GetExtensionsListItemVirtualDom.getExtensionListItemVirtualDom(item)

  expect(result[0]).toEqual({
    ariaPosInSet: 3,
    ariaRoleDescription: AriaRoleDescription.Extension,
    ariaSetSize: 20,
    childCount: 2,
    className: MergeClassNames.mergeClassNames(ClassNames.ExtensionListItem, ClassNames.ExtensionActive),
    id: 'ExtensionActive',
    role: AriaRoles.ListItem,
    // top: 100,
    type: VirtualDomElements.Div,
  })
})

test('sets main list item div with correct properties when not focused', () => {
  const item = createMockVisibleItem({ focused: false, posInSet: 5, setSize: 15, top: 200 })
  const result = GetExtensionsListItemVirtualDom.getExtensionListItemVirtualDom(item)

  expect(result[0]).toEqual({
    ariaPosInSet: 5,
    ariaRoleDescription: AriaRoleDescription.Extension,
    ariaSetSize: 15,
    childCount: 2,
    className: ClassNames.ExtensionListItem,
    id: undefined,
    role: AriaRoles.ListItem,
    // top: 200,
    type: VirtualDomElements.Div,
  })
})

test('sets icon img with correct properties', () => {
  const item = createMockVisibleItem({ icon: 'custom-icon.png' })
  const result = GetExtensionsListItemVirtualDom.getExtensionListItemVirtualDom(item)

  expect(result[1]).toEqual({
    childCount: 0,
    className: ClassNames.ExtensionListItemIcon,
    role: AriaRoles.None,
    src: 'custom-icon.png',
    type: VirtualDomElements.Img,
  })
})

test('sets detail div with correct className', () => {
  const item = createMockVisibleItem()
  const result = GetExtensionsListItemVirtualDom.getExtensionListItemVirtualDom(item)

  expect(result[2]).toEqual({
    childCount: 3,
    className: ClassNames.ExtensionListItemDetail,
    type: VirtualDomElements.Div,
  })
})

test('sets name div with correct className', () => {
  const item = createMockVisibleItem()
  const result = GetExtensionsListItemVirtualDom.getExtensionListItemVirtualDom(item)

  expect(result[3]).toEqual({
    childCount: 1,
    className: ClassNames.ExtensionListItemName,
    type: VirtualDomElements.Div,
  })
})

test('sets name text correctly', () => {
  const item = createMockVisibleItem({ name: 'Custom Extension Name' })
  const result = GetExtensionsListItemVirtualDom.getExtensionListItemVirtualDom(item)

  expect(result[4]).toEqual(text('Custom Extension Name'))
})

test('sets description div with correct className', () => {
  const item = createMockVisibleItem()
  const result = GetExtensionsListItemVirtualDom.getExtensionListItemVirtualDom(item)

  expect(result[5]).toEqual({
    childCount: 1,
    className: ClassNames.ExtensionListItemDescription,
    type: VirtualDomElements.Div,
  })
})

test('sets description text correctly', () => {
  const item = createMockVisibleItem({ description: 'Custom Description' })
  const result = GetExtensionsListItemVirtualDom.getExtensionListItemVirtualDom(item)

  expect(result[6]).toEqual(text('Custom Description'))
})

test('sets footer div with correct className', () => {
  const item = createMockVisibleItem()
  const result = GetExtensionsListItemVirtualDom.getExtensionListItemVirtualDom(item)

  expect(result[7]).toEqual({
    childCount: 2,
    className: ClassNames.ExtensionListItemFooter,
    type: VirtualDomElements.Div,
  })
})

test('sets author name div with correct className', () => {
  const item = createMockVisibleItem()
  const result = GetExtensionsListItemVirtualDom.getExtensionListItemVirtualDom(item)

  expect(result[8]).toEqual({
    childCount: 1,
    className: ClassNames.ExtensionListItemAuthorName,
    type: VirtualDomElements.Div,
  })
})

test('sets publisher text correctly', () => {
  const item = createMockVisibleItem({ publisher: 'Custom Publisher' })
  const result = GetExtensionsListItemVirtualDom.getExtensionListItemVirtualDom(item)

  expect(result[9]).toEqual(text('Custom Publisher'))
})

test('sets actions div with correct className', () => {
  const item = createMockVisibleItem()
  const result = GetExtensionsListItemVirtualDom.getExtensionListItemVirtualDom(item)

  expect(result[10]).toEqual({
    childCount: 0,
    className: ClassNames.ExtensionActions,
    type: VirtualDomElements.Div,
  })
})

test('handles all properties correctly together', () => {
  const item = createMockVisibleItem({
    description: 'Extension Description',
    focused: true,
    icon: 'icon.png',
    name: 'Extension Name',
    posInSet: 7,
    publisher: 'Publisher Name',
    setSize: 25,
    top: 350,
  })
  const result = GetExtensionsListItemVirtualDom.getExtensionListItemVirtualDom(item)

  expect(result[0].ariaPosInSet).toBe(7)
  expect(result[0].ariaSetSize).toBe(25)
  // expect(result[0].top).toBe(350)
  expect(result[0].id).toBe('ExtensionActive')
  expect(result[0].className).toBe(MergeClassNames.mergeClassNames(ClassNames.ExtensionListItem, ClassNames.ExtensionActive))
  expect(result[1].src).toBe('icon.png')
  expect(result[4]).toEqual(text('Extension Name'))
  expect(result[6]).toEqual(text('Extension Description'))
  expect(result[9]).toEqual(text('Publisher Name'))
})

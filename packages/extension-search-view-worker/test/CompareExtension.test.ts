import { test, expect } from '@jest/globals'
import type { ExtensionListItem } from '../src/parts/ExtensionListItem/ExtensionListItem.ts'
import { compareExtension, compareId, compareName } from '../src/parts/CompareExtension/CompareExtension.ts'

test('compareName should compare extensions by name only', () => {
  const extensionA: ExtensionListItem = {
    categories: [],
    description: 'desc-a',
    icon: 'icon-a',
    id: 'id-z',
    name: 'a',
    publisher: 'publisher-a',
    uri: 'uri-a',
  }
  const extensionB: ExtensionListItem = {
    categories: [],
    description: 'desc-b',
    icon: 'icon-b',
    id: 'id-a',
    name: 'b',
    publisher: 'publisher-b',
    uri: 'uri-b',
  }
  const extensionC: ExtensionListItem = {
    categories: [],
    description: 'desc-c',
    icon: 'icon-c',
    id: 'id-y',
    name: 'c',
    publisher: 'publisher-c',
    uri: 'uri-c',
  }

  expect(compareName(extensionA, extensionB)).toBeLessThan(0)
  expect(compareName(extensionB, extensionA)).toBeGreaterThan(0)
  expect(compareName(extensionA, extensionA)).toBe(0)
  expect(compareName(extensionB, extensionC)).toBeLessThan(0)
})

test('compareName should ignore id when comparing', () => {
  const extensionA: ExtensionListItem = {
    categories: [],
    description: 'desc-a',
    icon: 'icon-a',
    id: 'id-z',
    name: 'same',
    publisher: 'publisher-a',
    uri: 'uri-a',
  }
  const extensionB: ExtensionListItem = {
    categories: [],
    description: 'desc-b',
    icon: 'icon-b',
    id: 'id-a',
    name: 'same',
    publisher: 'publisher-b',
    uri: 'uri-b',
  }

  expect(compareName(extensionA, extensionB)).toBe(0)
  expect(compareName(extensionB, extensionA)).toBe(0)
})

test('compareId should compare extensions by id only', () => {
  const extensionA: ExtensionListItem = {
    categories: [],
    description: 'desc-a',
    icon: 'icon-a',
    id: 'a',
    name: 'name-z',
    publisher: 'publisher-a',
    uri: 'uri-a',
  }
  const extensionB: ExtensionListItem = {
    categories: [],
    description: 'desc-b',
    icon: 'icon-b',
    id: 'b',
    name: 'name-a',
    publisher: 'publisher-b',
    uri: 'uri-b',
  }
  const extensionC: ExtensionListItem = {
    categories: [],
    description: 'desc-c',
    icon: 'icon-c',
    id: 'c',
    name: 'name-y',
    publisher: 'publisher-c',
    uri: 'uri-c',
  }

  expect(compareId(extensionA, extensionB)).toBeLessThan(0)
  expect(compareId(extensionB, extensionA)).toBeGreaterThan(0)
  expect(compareId(extensionA, extensionA)).toBe(0)
  expect(compareId(extensionB, extensionC)).toBeLessThan(0)
})

test('compareId should ignore name when comparing', () => {
  const extensionA: ExtensionListItem = {
    categories: [],
    description: 'desc-a',
    icon: 'icon-a',
    id: 'same',
    name: 'name-z',
    publisher: 'publisher-a',
    uri: 'uri-a',
  }
  const extensionB: ExtensionListItem = {
    categories: [],
    description: 'desc-b',
    icon: 'icon-b',
    id: 'same',
    name: 'name-a',
    publisher: 'publisher-b',
    uri: 'uri-b',
  }

  expect(compareId(extensionA, extensionB)).toBe(0)
  expect(compareId(extensionB, extensionA)).toBe(0)
})

test('compareExtension should compare extensions by name first', () => {
  const extensionA: ExtensionListItem = {
    categories: [],
    description: 'desc-a',
    icon: 'icon-a',
    id: 'id-1',
    name: 'a',
    publisher: 'publisher-a',
    uri: 'uri-a',
  }
  const extensionB: ExtensionListItem = {
    categories: [],
    description: 'desc-b',
    icon: 'icon-b',
    id: 'id-2',
    name: 'b',
    publisher: 'publisher-b',
    uri: 'uri-b',
  }
  const extensionC: ExtensionListItem = {
    categories: [],
    description: 'desc-c',
    icon: 'icon-c',
    id: 'id-3',
    name: 'c',
    publisher: 'publisher-c',
    uri: 'uri-c',
  }

  expect(compareExtension(extensionA, extensionB)).toBeLessThan(0)
  expect(compareExtension(extensionB, extensionA)).toBeGreaterThan(0)
  expect(compareExtension(extensionA, extensionA)).toBe(0)
  expect(compareExtension(extensionB, extensionC)).toBeLessThan(0)
})

test('compareExtension should compare extensions by id when names are equal', () => {
  const extensionA: ExtensionListItem = {
    categories: [],
    description: 'desc-a',
    icon: 'icon-a',
    id: 'a',
    name: 'same',
    publisher: 'publisher-a',
    uri: 'uri-a',
  }
  const extensionB: ExtensionListItem = {
    categories: [],
    description: 'desc-b',
    icon: 'icon-b',
    id: 'b',
    name: 'same',
    publisher: 'publisher-b',
    uri: 'uri-b',
  }
  const extensionC: ExtensionListItem = {
    categories: [],
    description: 'desc-c',
    icon: 'icon-c',
    id: 'c',
    name: 'same',
    publisher: 'publisher-c',
    uri: 'uri-c',
  }

  expect(compareExtension(extensionA, extensionB)).toBeLessThan(0)
  expect(compareExtension(extensionB, extensionA)).toBeGreaterThan(0)
  expect(compareExtension(extensionA, extensionA)).toBe(0)
  expect(compareExtension(extensionB, extensionC)).toBeLessThan(0)
})

test('compareExtension should return 0 when both name and id are equal', () => {
  const extensionA: ExtensionListItem = {
    categories: [],
    description: 'desc-a',
    icon: 'icon-a',
    id: 'same-id',
    name: 'same-name',
    publisher: 'publisher-a',
    uri: 'uri-a',
  }
  const extensionB: ExtensionListItem = {
    categories: [],
    description: 'desc-b',
    icon: 'icon-b',
    id: 'same-id',
    name: 'same-name',
    publisher: 'publisher-b',
    uri: 'uri-b',
  }

  expect(compareExtension(extensionA, extensionB)).toBe(0)
  expect(compareExtension(extensionB, extensionA)).toBe(0)
})

import { test, expect } from '@jest/globals'
import type { ExtensionListItem } from '../src/parts/ExtensionListItem/ExtensionListItem.ts'
import { compareExtension, compareId, compareName, compareSize, compareUpdatedDate } from '../src/parts/CompareExtension/CompareExtension.ts'

test('compareName should compare extensions by name only', () => {
  const extensionA: ExtensionListItem = {
    categories: [],
    description: 'desc-a',
    icon: 'icon-a',
    id: 'id-z',
    name: 'a',
    publisher: 'publisher-a',
    size: 0,
    updatedDate: 0,
    uri: 'uri-a',
  }
  const extensionB: ExtensionListItem = {
    categories: [],
    description: 'desc-b',
    icon: 'icon-b',
    id: 'id-a',
    name: 'b',
    publisher: 'publisher-b',
    size: 0,
    updatedDate: 0,
    uri: 'uri-b',
  }
  const extensionC: ExtensionListItem = {
    categories: [],
    description: 'desc-c',
    icon: 'icon-c',
    id: 'id-y',
    name: 'c',
    publisher: 'publisher-c',
    size: 0,
    updatedDate: 0,
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
    size: 0,
    updatedDate: 0,
    uri: 'uri-a',
  }
  const extensionB: ExtensionListItem = {
    categories: [],
    description: 'desc-b',
    icon: 'icon-b',
    id: 'id-a',
    name: 'same',
    publisher: 'publisher-b',
    size: 0,
    updatedDate: 0,
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
    size: 0,
    updatedDate: 0,
    uri: 'uri-a',
  }
  const extensionB: ExtensionListItem = {
    categories: [],
    description: 'desc-b',
    icon: 'icon-b',
    id: 'b',
    name: 'name-a',
    publisher: 'publisher-b',
    size: 0,
    updatedDate: 0,
    uri: 'uri-b',
  }
  const extensionC: ExtensionListItem = {
    categories: [],
    description: 'desc-c',
    icon: 'icon-c',
    id: 'c',
    name: 'name-y',
    publisher: 'publisher-c',
    size: 0,
    updatedDate: 0,
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
    size: 0,
    updatedDate: 0,
    uri: 'uri-a',
  }
  const extensionB: ExtensionListItem = {
    categories: [],
    description: 'desc-b',
    icon: 'icon-b',
    id: 'same',
    name: 'name-a',
    publisher: 'publisher-b',
    size: 0,
    updatedDate: 0,
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
    size: 0,
    updatedDate: 0,
    uri: 'uri-a',
  }
  const extensionB: ExtensionListItem = {
    categories: [],
    description: 'desc-b',
    icon: 'icon-b',
    id: 'id-2',
    name: 'b',
    publisher: 'publisher-b',
    size: 0,
    updatedDate: 0,
    uri: 'uri-b',
  }
  const extensionC: ExtensionListItem = {
    categories: [],
    description: 'desc-c',
    icon: 'icon-c',
    id: 'id-3',
    name: 'c',
    publisher: 'publisher-c',
    size: 0,
    updatedDate: 0,
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
    size: 0,
    updatedDate: 0,
    uri: 'uri-a',
  }
  const extensionB: ExtensionListItem = {
    categories: [],
    description: 'desc-b',
    icon: 'icon-b',
    id: 'b',
    name: 'same',
    publisher: 'publisher-b',
    size: 0,
    updatedDate: 0,
    uri: 'uri-b',
  }
  const extensionC: ExtensionListItem = {
    categories: [],
    description: 'desc-c',
    icon: 'icon-c',
    id: 'c',
    name: 'same',
    publisher: 'publisher-c',
    size: 0,
    updatedDate: 0,
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
    size: 0,
    updatedDate: 0,
    uri: 'uri-a',
  }
  const extensionB: ExtensionListItem = {
    categories: [],
    description: 'desc-b',
    icon: 'icon-b',
    id: 'same-id',
    name: 'same-name',
    publisher: 'publisher-b',
    size: 0,
    updatedDate: 0,
    uri: 'uri-b',
  }

  expect(compareExtension(extensionA, extensionB)).toBe(0)
  expect(compareExtension(extensionB, extensionA)).toBe(0)
})

test('compareSize should sort extensions by size in descending order', () => {
  const extensionA: ExtensionListItem = {
    categories: [],
    description: 'desc-a',
    icon: 'icon-a',
    id: 'id-a',
    name: 'name-a',
    publisher: 'publisher-a',
    size: 1000,
    updatedDate: 0,
    uri: 'uri-a',
  }
  const extensionB: ExtensionListItem = {
    categories: [],
    description: 'desc-b',
    icon: 'icon-b',
    id: 'id-b',
    name: 'name-b',
    publisher: 'publisher-b',
    size: 5000,
    updatedDate: 0,
    uri: 'uri-b',
  }
  const extensionC: ExtensionListItem = {
    categories: [],
    description: 'desc-c',
    icon: 'icon-c',
    id: 'id-c',
    name: 'name-c',
    publisher: 'publisher-c',
    size: 2000,
    updatedDate: 0,
    uri: 'uri-c',
  }

  // B (5000) should come before C (2000) which should come before A (1000)
  expect(compareSize(extensionB, extensionC)).toBeLessThan(0)
  expect(compareSize(extensionC, extensionA)).toBeLessThan(0)
  expect(compareSize(extensionB, extensionA)).toBeLessThan(0)

  // Reverse order should be positive
  expect(compareSize(extensionC, extensionB)).toBeGreaterThan(0)
  expect(compareSize(extensionA, extensionC)).toBeGreaterThan(0)
  expect(compareSize(extensionA, extensionB)).toBeGreaterThan(0)
})

test('compareSize should return 0 when sizes are equal', () => {
  const extensionA: ExtensionListItem = {
    categories: [],
    description: 'desc-a',
    icon: 'icon-a',
    id: 'id-a',
    name: 'name-a',
    publisher: 'publisher-a',
    size: 1000,
    updatedDate: 0,
    uri: 'uri-a',
  }
  const extensionB: ExtensionListItem = {
    categories: [],
    description: 'desc-b',
    icon: 'icon-b',
    id: 'id-b',
    name: 'name-b',
    publisher: 'publisher-b',
    size: 1000,
    updatedDate: 0,
    uri: 'uri-b',
  }

  expect(compareSize(extensionA, extensionB)).toBe(0)
  expect(compareSize(extensionB, extensionA)).toBe(0)
})

test('compareSize should handle zero size', () => {
  const extensionA: ExtensionListItem = {
    categories: [],
    description: 'desc-a',
    icon: 'icon-a',
    id: 'id-a',
    name: 'name-a',
    publisher: 'publisher-a',
    size: 0,
    updatedDate: 0,
    uri: 'uri-a',
  }
  const extensionB: ExtensionListItem = {
    categories: [],
    description: 'desc-b',
    icon: 'icon-b',
    id: 'id-b',
    name: 'name-b',
    publisher: 'publisher-b',
    size: 1000,
    updatedDate: 0,
    uri: 'uri-b',
  }

  // Zero size should come after positive size (descending order)
  expect(compareSize(extensionB, extensionA)).toBeLessThan(0)
  expect(compareSize(extensionA, extensionB)).toBeGreaterThan(0)
})

test('compareSize should handle negative sizes (edge case)', () => {
  const extensionA: ExtensionListItem = {
    categories: [],
    description: 'desc-a',
    icon: 'icon-a',
    id: 'id-a',
    name: 'name-a',
    publisher: 'publisher-a',
    size: -100,
    uri: 'uri-a',
  }
  const extensionB: ExtensionListItem = {
    categories: [],
    description: 'desc-b',
    icon: 'icon-b',
    id: 'id-b',
    name: 'name-b',
    publisher: 'publisher-b',
    size: 0,
    uri: 'uri-b',
  }
  const extensionC: ExtensionListItem = {
    categories: [],
    description: 'desc-c',
    icon: 'icon-c',
    id: 'id-c',
    name: 'name-c',
    publisher: 'publisher-c',
    size: 100,
    uri: 'uri-c',
  }

  // C (100) > B (0) > A (-100) in descending order
  expect(compareSize(extensionC, extensionB)).toBeLessThan(0)
  expect(compareSize(extensionB, extensionA)).toBeLessThan(0)
  expect(compareSize(extensionC, extensionA)).toBeLessThan(0)
})

test('compareSize should ignore other properties when comparing', () => {
  const extensionA: ExtensionListItem = {
    categories: [],
    description: 'desc-a',
    icon: 'icon-a',
    id: 'id-z',
    name: 'name-z',
    publisher: 'publisher-a',
    size: 1000,
    updatedDate: 0,
    uri: 'uri-a',
  }
  const extensionB: ExtensionListItem = {
    categories: [],
    description: 'desc-b',
    icon: 'icon-b',
    id: 'id-a',
    name: 'name-a',
    publisher: 'publisher-b',
    size: 1000,
    updatedDate: 0,
    uri: 'uri-b',
  }

  // Same size should return 0 regardless of other properties
  expect(compareSize(extensionA, extensionB)).toBe(0)
  expect(compareSize(extensionB, extensionA)).toBe(0)
})

test('compareUpdatedDate should sort by updated date descending', () => {
  const extensionA: ExtensionListItem = {
    categories: [],
    description: 'desc-a',
    icon: 'icon-a',
    id: 'id-a',
    name: 'name-a',
    publisher: 'publisher-a',
    size: 0,
    updatedDate: 1000,
    uri: 'uri-a',
  }
  const extensionB: ExtensionListItem = {
    categories: [],
    description: 'desc-b',
    icon: 'icon-b',
    id: 'id-b',
    name: 'name-b',
    publisher: 'publisher-b',
    size: 0,
    updatedDate: 2000,
    uri: 'uri-b',
  }
  const extensionC: ExtensionListItem = {
    categories: [],
    description: 'desc-c',
    icon: 'icon-c',
    id: 'id-c',
    name: 'name-c',
    publisher: 'publisher-c',
    size: 0,
    updatedDate: 3000,
    uri: 'uri-c',
  }

  // Newer dates should come first (descending order)
  expect(compareUpdatedDate(extensionA, extensionB)).toBeGreaterThan(0)
  expect(compareUpdatedDate(extensionB, extensionA)).toBeLessThan(0)
  expect(compareUpdatedDate(extensionA, extensionA)).toBe(0)
  expect(compareUpdatedDate(extensionB, extensionC)).toBeGreaterThan(0)
  expect(compareUpdatedDate(extensionC, extensionB)).toBeLessThan(0)
})

test('compareUpdatedDate should ignore other properties when comparing', () => {
  const extensionA: ExtensionListItem = {
    categories: [],
    description: 'desc-a',
    icon: 'icon-a',
    id: 'id-z',
    name: 'name-z',
    publisher: 'publisher-a',
    size: 1000,
    updatedDate: 1000,
    uri: 'uri-a',
  }
  const extensionB: ExtensionListItem = {
    categories: [],
    description: 'desc-b',
    icon: 'icon-b',
    id: 'id-a',
    name: 'name-a',
    publisher: 'publisher-b',
    size: 2000,
    updatedDate: 1000,
    uri: 'uri-b',
  }

  // Same updatedDate should return 0 regardless of other properties
  expect(compareUpdatedDate(extensionA, extensionB)).toBe(0)
  expect(compareUpdatedDate(extensionB, extensionA)).toBe(0)
})

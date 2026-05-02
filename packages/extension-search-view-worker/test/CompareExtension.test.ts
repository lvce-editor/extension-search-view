import { test, expect } from '@jest/globals'
import type { ExtensionListItem } from '../src/parts/ExtensionListItem/ExtensionListItem.ts'
import { compareExtension, compareId, compareName, compareSize, compareUpdatedDate } from '../src/parts/CompareExtension/CompareExtension.ts'

test('compareName should compare extensions by name only', () => {
  const alphaExtension: ExtensionListItem = {
    categories: [],
    description: 'desc-a',
    icon: 'icon-a',
    id: 'id-z',
    name: 'a',
    publisher: 'publisher-a',
    size: 1000,
    updatedDate: 1_000_000,
    uri: 'uri-a',
  }
  const betaExtension: ExtensionListItem = {
    categories: [],
    description: 'desc-b',
    icon: 'icon-b',
    id: 'id-a',
    name: 'b',
    publisher: 'publisher-b',
    size: 2000,
    updatedDate: 2_000_000,
    uri: 'uri-b',
  }
  const gammaExtension: ExtensionListItem = {
    categories: [],
    description: 'desc-c',
    icon: 'icon-c',
    id: 'id-y',
    name: 'c',
    publisher: 'publisher-c',
    size: 3000,
    updatedDate: 3_000_000,
    uri: 'uri-c',
  }

  expect(compareName(alphaExtension, betaExtension)).toBeLessThan(0)
  expect(compareName(betaExtension, alphaExtension)).toBeGreaterThan(0)
  expect(compareName(alphaExtension, alphaExtension)).toBe(0)
  expect(compareName(betaExtension, gammaExtension)).toBeLessThan(0)
})

test('compareName should ignore id when comparing', () => {
  const firstExtension: ExtensionListItem = {
    categories: [],
    description: 'desc-a',
    icon: 'icon-a',
    id: 'id-z',
    name: 'same',
    publisher: 'publisher-a',
    size: 1000,
    updatedDate: 1_000_000,
    uri: 'uri-a',
  }
  const secondExtension: ExtensionListItem = {
    categories: [],
    description: 'desc-b',
    icon: 'icon-b',
    id: 'id-a',
    name: 'same',
    publisher: 'publisher-b',
    size: 2000,
    updatedDate: 2_000_000,
    uri: 'uri-b',
  }

  expect(compareName(firstExtension, secondExtension)).toBe(0)
  expect(compareName(secondExtension, firstExtension)).toBe(0)
})

test('compareId should compare extensions by id only', () => {
  const alphaExtension: ExtensionListItem = {
    categories: [],
    description: 'desc-a',
    icon: 'icon-a',
    id: 'a',
    name: 'name-z',
    publisher: 'publisher-a',
    size: 1000,
    updatedDate: 1_000_000,
    uri: 'uri-a',
  }
  const betaExtension: ExtensionListItem = {
    categories: [],
    description: 'desc-b',
    icon: 'icon-b',
    id: 'b',
    name: 'name-a',
    publisher: 'publisher-b',
    size: 2000,
    updatedDate: 2_000_000,
    uri: 'uri-b',
  }
  const gammaExtension: ExtensionListItem = {
    categories: [],
    description: 'desc-c',
    icon: 'icon-c',
    id: 'c',
    name: 'name-y',
    publisher: 'publisher-c',
    size: 3000,
    updatedDate: 3_000_000,
    uri: 'uri-c',
  }

  expect(compareId(alphaExtension, betaExtension)).toBeLessThan(0)
  expect(compareId(betaExtension, alphaExtension)).toBeGreaterThan(0)
  expect(compareId(alphaExtension, alphaExtension)).toBe(0)
  expect(compareId(betaExtension, gammaExtension)).toBeLessThan(0)
})

test('compareId should ignore name when comparing', () => {
  const firstExtension: ExtensionListItem = {
    categories: [],
    description: 'desc-a',
    icon: 'icon-a',
    id: 'same',
    name: 'name-z',
    publisher: 'publisher-a',
    size: 1000,
    updatedDate: 1_000_000,
    uri: 'uri-a',
  }
  const secondExtension: ExtensionListItem = {
    categories: [],
    description: 'desc-b',
    icon: 'icon-b',
    id: 'same',
    name: 'name-a',
    publisher: 'publisher-b',
    size: 2000,
    updatedDate: 2_000_000,
    uri: 'uri-b',
  }

  expect(compareId(firstExtension, secondExtension)).toBe(0)
  expect(compareId(secondExtension, firstExtension)).toBe(0)
})

test('compareExtension should compare extensions by name first', () => {
  const alphaExtension: ExtensionListItem = {
    categories: [],
    description: 'desc-a',
    icon: 'icon-a',
    id: 'id-1',
    name: 'a',
    publisher: 'publisher-a',
    size: 1000,
    updatedDate: 1_000_000,
    uri: 'uri-a',
  }
  const betaExtension: ExtensionListItem = {
    categories: [],
    description: 'desc-b',
    icon: 'icon-b',
    id: 'id-2',
    name: 'b',
    publisher: 'publisher-b',
    size: 2000,
    updatedDate: 2_000_000,
    uri: 'uri-b',
  }
  const gammaExtension: ExtensionListItem = {
    categories: [],
    description: 'desc-c',
    icon: 'icon-c',
    id: 'id-3',
    name: 'c',
    publisher: 'publisher-c',
    size: 3000,
    updatedDate: 3_000_000,
    uri: 'uri-c',
  }

  expect(compareExtension(alphaExtension, betaExtension)).toBeLessThan(0)
  expect(compareExtension(betaExtension, alphaExtension)).toBeGreaterThan(0)
  expect(compareExtension(alphaExtension, alphaExtension)).toBe(0)
  expect(compareExtension(betaExtension, gammaExtension)).toBeLessThan(0)
})

test('compareExtension should compare extensions by id when names are equal', () => {
  const alphaExtension: ExtensionListItem = {
    categories: [],
    description: 'desc-a',
    icon: 'icon-a',
    id: 'a',
    name: 'same',
    publisher: 'publisher-a',
    size: 1000,
    updatedDate: 1_000_000,
    uri: 'uri-a',
  }
  const betaExtension: ExtensionListItem = {
    categories: [],
    description: 'desc-b',
    icon: 'icon-b',
    id: 'b',
    name: 'same',
    publisher: 'publisher-b',
    size: 2000,
    updatedDate: 2_000_000,
    uri: 'uri-b',
  }
  const gammaExtension: ExtensionListItem = {
    categories: [],
    description: 'desc-c',
    icon: 'icon-c',
    id: 'c',
    name: 'same',
    publisher: 'publisher-c',
    size: 3000,
    updatedDate: 3_000_000,
    uri: 'uri-c',
  }

  expect(compareExtension(alphaExtension, betaExtension)).toBeLessThan(0)
  expect(compareExtension(betaExtension, alphaExtension)).toBeGreaterThan(0)
  expect(compareExtension(alphaExtension, alphaExtension)).toBe(0)
  expect(compareExtension(betaExtension, gammaExtension)).toBeLessThan(0)
})

test('compareExtension should return 0 when both name and id are equal', () => {
  const firstExtension: ExtensionListItem = {
    categories: [],
    description: 'desc-a',
    icon: 'icon-a',
    id: 'same-id',
    name: 'same-name',
    publisher: 'publisher-a',
    size: 1000,
    updatedDate: 1_000_000,
    uri: 'uri-a',
  }
  const secondExtension: ExtensionListItem = {
    categories: [],
    description: 'desc-b',
    icon: 'icon-b',
    id: 'same-id',
    name: 'same-name',
    publisher: 'publisher-b',
    size: 2000,
    updatedDate: 2_000_000,
    uri: 'uri-b',
  }

  expect(compareExtension(firstExtension, secondExtension)).toBe(0)
  expect(compareExtension(secondExtension, firstExtension)).toBe(0)
})

test('compareSize should sort extensions by size in descending order', () => {
  const smallExtension: ExtensionListItem = {
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
  const largeExtension: ExtensionListItem = {
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
  const mediumExtension: ExtensionListItem = {
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
  expect(compareSize(largeExtension, mediumExtension)).toBeLessThan(0)
  expect(compareSize(mediumExtension, smallExtension)).toBeLessThan(0)
  expect(compareSize(largeExtension, smallExtension)).toBeLessThan(0)

  // Reverse order should be positive
  expect(compareSize(mediumExtension, largeExtension)).toBeGreaterThan(0)
  expect(compareSize(smallExtension, mediumExtension)).toBeGreaterThan(0)
  expect(compareSize(smallExtension, largeExtension)).toBeGreaterThan(0)
})

test('compareSize should return 0 when sizes are equal', () => {
  const firstExtension: ExtensionListItem = {
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
  const secondExtension: ExtensionListItem = {
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

  expect(compareSize(firstExtension, secondExtension)).toBe(0)
  expect(compareSize(secondExtension, firstExtension)).toBe(0)
})

test('compareSize should handle zero size', () => {
  const zeroSizeExtension: ExtensionListItem = {
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
  const positiveSizeExtension: ExtensionListItem = {
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
  expect(compareSize(positiveSizeExtension, zeroSizeExtension)).toBeLessThan(0)
  expect(compareSize(zeroSizeExtension, positiveSizeExtension)).toBeGreaterThan(0)
})

test('compareSize should handle negative sizes (edge case)', () => {
  const negativeExtension: ExtensionListItem = {
    categories: [],
    description: 'desc-a',
    icon: 'icon-a',
    id: 'id-a',
    name: 'name-a',
    publisher: 'publisher-a',
    size: -100,
    updatedDate: 0,
    uri: 'uri-a',
  }
  const zeroExtension: ExtensionListItem = {
    categories: [],
    description: 'desc-b',
    icon: 'icon-b',
    id: 'id-b',
    name: 'name-b',
    publisher: 'publisher-b',
    size: 0,
    updatedDate: 0,
    uri: 'uri-b',
  }
  const positiveExtension: ExtensionListItem = {
    categories: [],
    description: 'desc-c',
    icon: 'icon-c',
    id: 'id-c',
    name: 'name-c',
    publisher: 'publisher-c',
    size: 100,
    updatedDate: 0,
    uri: 'uri-c',
  }

  // C (100) > B (0) > A (-100) in descending order
  expect(compareSize(positiveExtension, zeroExtension)).toBeLessThan(0)
  expect(compareSize(zeroExtension, negativeExtension)).toBeLessThan(0)
  expect(compareSize(positiveExtension, negativeExtension)).toBeLessThan(0)
})

test('compareSize should ignore other properties when comparing', () => {
  const firstExtension: ExtensionListItem = {
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
  const secondExtension: ExtensionListItem = {
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
  expect(compareSize(firstExtension, secondExtension)).toBe(0)
  expect(compareSize(secondExtension, firstExtension)).toBe(0)
})

test('compareUpdatedDate should sort by updated date descending', () => {
  const oldestExtension: ExtensionListItem = {
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
  const newerExtension: ExtensionListItem = {
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
  const newestExtension: ExtensionListItem = {
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
  expect(compareUpdatedDate(oldestExtension, newerExtension)).toBeGreaterThan(0)
  expect(compareUpdatedDate(newerExtension, oldestExtension)).toBeLessThan(0)
  expect(compareUpdatedDate(oldestExtension, oldestExtension)).toBe(0)
  expect(compareUpdatedDate(newerExtension, newestExtension)).toBeGreaterThan(0)
  expect(compareUpdatedDate(newestExtension, newerExtension)).toBeLessThan(0)
})

test('compareUpdatedDate should ignore other properties when comparing', () => {
  const firstExtension: ExtensionListItem = {
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
  const secondExtension: ExtensionListItem = {
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
  expect(compareUpdatedDate(firstExtension, secondExtension)).toBe(0)
  expect(compareUpdatedDate(secondExtension, firstExtension)).toBe(0)
})

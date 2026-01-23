import { expect, test } from '@jest/globals'
import type { ExtensionListItem } from '../src/parts/ExtensionListItem/ExtensionListItem.ts'
import type { ParsedExtensionSearchValue } from '../src/parts/ParsedExtensionSearchValue/ParsedExtensionSearchValue.ts'
import * as SortExtensions from '../src/parts/SortExtensions/SortExtensions.ts'

const createExtension = (overrides: Partial<ExtensionListItem>): ExtensionListItem => ({
  categories: [],
  description: 'description',
  icon: 'icon',
  id: 'id',
  name: 'name',
  publisher: 'publisher',
  size: 1000,
  updatedDate: 1000,
  uri: 'uri',
  ...overrides,
})

test('sortExtensions should sort by name and id by default', () => {
  const extensions: readonly ExtensionListItem[] = [
    createExtension({ id: 'id-c', name: 'c' }),
    createExtension({ id: 'id-a', name: 'a' }),
    createExtension({ id: 'id-b', name: 'b' }),
  ]

  const result = SortExtensions.sortExtensions(extensions)
  expect(result).toEqual([
    createExtension({ id: 'id-a', name: 'a' }),
    createExtension({ id: 'id-b', name: 'b' }),
    createExtension({ id: 'id-c', name: 'c' }),
  ])
})

test('sortExtensions with empty array', () => {
  const extensions: readonly ExtensionListItem[] = []
  const result = SortExtensions.sortExtensions(extensions)
  expect(result).toEqual([])
})

test('sortExtensions with single extension', () => {
  const extensions: readonly ExtensionListItem[] = [createExtension({ id: 'id-single', name: 'single' })]
  const result = SortExtensions.sortExtensions(extensions)
  expect(result).toEqual([createExtension({ id: 'id-single', name: 'single' })])
})

test('sortExtensions should handle extensions with same name but different ids', () => {
  const extensions: readonly ExtensionListItem[] = [
    createExtension({ id: 'id-b', name: 'same' }),
    createExtension({ id: 'id-a', name: 'same' }),
    createExtension({ id: 'id-c', name: 'same' }),
  ]

  const result = SortExtensions.sortExtensions(extensions)
  expect(result).toEqual([
    createExtension({ id: 'id-a', name: 'same' }),
    createExtension({ id: 'id-b', name: 'same' }),
    createExtension({ id: 'id-c', name: 'same' }),
  ])
})

test('sortExtensions should sort by size when sort parameter is "size"', () => {
  const extensions: readonly ExtensionListItem[] = [
    createExtension({ id: 'id-small', name: 'small', size: 1000 }),
    createExtension({ id: 'id-large', name: 'large', size: 5000 }),
    createExtension({ id: 'id-medium', name: 'medium', size: 3000 }),
  ]

  const parsedValue: ParsedExtensionSearchValue = {
    builtin: false,
    disabled: false,
    enabled: false,
    id: '',
    installed: false,
    isLocal: false,
    outdated: false,
    query: '',
    sort: 'size',
  }

  const result = SortExtensions.sortExtensions(extensions, parsedValue)
  expect(result).toEqual([
    createExtension({ id: 'id-large', name: 'large', size: 5000 }),
    createExtension({ id: 'id-medium', name: 'medium', size: 3000 }),
    createExtension({ id: 'id-small', name: 'small', size: 1000 }),
  ])
})

test('sortExtensions should sort by updatedDate when sort parameter is "updatedDate"', () => {
  const extensions: readonly ExtensionListItem[] = [
    createExtension({ id: 'id-old', name: 'old', updatedDate: 1000 }),
    createExtension({ id: 'id-new', name: 'new', updatedDate: 5000 }),
    createExtension({ id: 'id-medium', name: 'medium', updatedDate: 3000 }),
  ]

  const parsedValue: ParsedExtensionSearchValue = {
    builtin: false,
    disabled: false,
    enabled: false,
    id: '',
    installed: false,
    isLocal: false,
    outdated: false,
    query: '',
    sort: 'updatedDate',
  }

  const result = SortExtensions.sortExtensions(extensions, parsedValue)
  expect(result).toEqual([
    createExtension({ id: 'id-new', name: 'new', updatedDate: 5000 }),
    createExtension({ id: 'id-medium', name: 'medium', updatedDate: 3000 }),
    createExtension({ id: 'id-old', name: 'old', updatedDate: 1000 }),
  ])
})

test('sortExtensions should handle empty sort parameter', () => {
  const extensions: readonly ExtensionListItem[] = [
    createExtension({ id: 'id-c', name: 'c' }),
    createExtension({ id: 'id-a', name: 'a' }),
    createExtension({ id: 'id-b', name: 'b' }),
  ]

  const parsedValue: ParsedExtensionSearchValue = {
    builtin: false,
    disabled: false,
    enabled: false,
    id: '',
    installed: false,
    isLocal: false,
    outdated: false,
    query: '',
    sort: '',
  }

  const result = SortExtensions.sortExtensions(extensions, parsedValue)
  expect(result).toEqual([
    createExtension({ id: 'id-a', name: 'a' }),
    createExtension({ id: 'id-b', name: 'b' }),
    createExtension({ id: 'id-c', name: 'c' }),
  ])
})

test('sortExtensions should handle undefined parsedValue', () => {
  const extensions: readonly ExtensionListItem[] = [
    createExtension({ id: 'id-c', name: 'c' }),
    createExtension({ id: 'id-a', name: 'a' }),
    createExtension({ id: 'id-b', name: 'b' }),
  ]

  const result = SortExtensions.sortExtensions(extensions, undefined)
  expect(result).toEqual([
    createExtension({ id: 'id-a', name: 'a' }),
    createExtension({ id: 'id-b', name: 'b' }),
    createExtension({ id: 'id-c', name: 'c' }),
  ])
})

test('sortExtensions should handle unknown sort parameter', () => {
  const extensions: readonly ExtensionListItem[] = [
    createExtension({ id: 'id-c', name: 'c' }),
    createExtension({ id: 'id-a', name: 'a' }),
    createExtension({ id: 'id-b', name: 'b' }),
  ]

  const parsedValue: ParsedExtensionSearchValue = {
    builtin: false,
    disabled: false,
    enabled: false,
    id: '',
    installed: false,
    isLocal: false,
    outdated: false,
    query: '',
    sort: 'unknown',
  }

  const result = SortExtensions.sortExtensions(extensions, parsedValue)
  expect(result).toEqual([
    createExtension({ id: 'id-a', name: 'a' }),
    createExtension({ id: 'id-b', name: 'b' }),
    createExtension({ id: 'id-c', name: 'c' }),
  ])
})

test('sortExtensions should handle extensions with same size', () => {
  const extensions: readonly ExtensionListItem[] = [
    createExtension({ id: 'id-a', name: 'a', size: 1000 }),
    createExtension({ id: 'id-b', name: 'b', size: 1000 }),
    createExtension({ id: 'id-c', name: 'c', size: 1000 }),
  ]

  const parsedValue: ParsedExtensionSearchValue = {
    builtin: false,
    disabled: false,
    enabled: false,
    id: '',
    installed: false,
    isLocal: false,
    outdated: false,
    query: '',
    sort: 'size',
  }

  const result = SortExtensions.sortExtensions(extensions, parsedValue)
  // When sizes are equal, the order should remain stable (based on original order)
  expect(result).toEqual(extensions)
})

test('sortExtensions should handle extensions with same updatedDate', () => {
  const extensions: readonly ExtensionListItem[] = [
    createExtension({ id: 'id-a', name: 'a', updatedDate: 1000 }),
    createExtension({ id: 'id-b', name: 'b', updatedDate: 1000 }),
    createExtension({ id: 'id-c', name: 'c', updatedDate: 1000 }),
  ]

  const parsedValue: ParsedExtensionSearchValue = {
    builtin: false,
    disabled: false,
    enabled: false,
    id: '',
    installed: false,
    isLocal: false,
    outdated: false,
    query: '',
    sort: 'updatedDate',
  }

  const result = SortExtensions.sortExtensions(extensions, parsedValue)
  // When updatedDates are equal, the order should remain stable (based on original order)
  expect(result).toEqual(extensions)
})

test('sortExtensions should handle zero size values', () => {
  const extensions: readonly ExtensionListItem[] = [
    createExtension({ id: 'id-zero', name: 'zero', size: 0 }),
    createExtension({ id: 'id-positive', name: 'positive', size: 1000 }),
    createExtension({ id: 'id-negative', name: 'negative', size: -100 }),
  ]

  const parsedValue: ParsedExtensionSearchValue = {
    builtin: false,
    disabled: false,
    enabled: false,
    id: '',
    installed: false,
    isLocal: false,
    outdated: false,
    query: '',
    sort: 'size',
  }

  const result = SortExtensions.sortExtensions(extensions, parsedValue)
  expect(result).toEqual([
    createExtension({ id: 'id-positive', name: 'positive', size: 1000 }),
    createExtension({ id: 'id-zero', name: 'zero', size: 0 }),
    createExtension({ id: 'id-negative', name: 'negative', size: -100 }),
  ])
})

test('sortExtensions should handle zero updatedDate values', () => {
  const extensions: readonly ExtensionListItem[] = [
    createExtension({ id: 'id-zero', name: 'zero', updatedDate: 0 }),
    createExtension({ id: 'id-positive', name: 'positive', updatedDate: 1000 }),
    createExtension({ id: 'id-negative', name: 'negative', updatedDate: -100 }),
  ]

  const parsedValue: ParsedExtensionSearchValue = {
    builtin: false,
    disabled: false,
    enabled: false,
    id: '',
    installed: false,
    isLocal: false,
    outdated: false,
    query: '',
    sort: 'updatedDate',
  }

  const result = SortExtensions.sortExtensions(extensions, parsedValue)
  expect(result).toEqual([
    createExtension({ id: 'id-positive', name: 'positive', updatedDate: 1000 }),
    createExtension({ id: 'id-zero', name: 'zero', updatedDate: 0 }),
    createExtension({ id: 'id-negative', name: 'negative', updatedDate: -100 }),
  ])
})

test('sortExtensions should preserve original order when all values are equal for size sort', () => {
  const extensions: readonly ExtensionListItem[] = [
    createExtension({ id: 'id-first', name: 'first', size: 500 }),
    createExtension({ id: 'id-second', name: 'second', size: 500 }),
    createExtension({ id: 'id-third', name: 'third', size: 500 }),
  ]

  const parsedValue: ParsedExtensionSearchValue = {
    builtin: false,
    disabled: false,
    enabled: false,
    id: '',
    installed: false,
    isLocal: false,
    outdated: false,
    query: '',
    sort: 'size',
  }

  const result = SortExtensions.sortExtensions(extensions, parsedValue)
  expect(result).toEqual(extensions)
})

test('sortExtensions should preserve original order when all values are equal for updatedDate sort', () => {
  const extensions: readonly ExtensionListItem[] = [
    createExtension({ id: 'id-first', name: 'first', updatedDate: 500 }),
    createExtension({ id: 'id-second', name: 'second', updatedDate: 500 }),
    createExtension({ id: 'id-third', name: 'third', updatedDate: 500 }),
  ]

  const parsedValue: ParsedExtensionSearchValue = {
    builtin: false,
    disabled: false,
    enabled: false,
    id: '',
    installed: false,
    isLocal: false,
    outdated: false,
    query: '',
    sort: 'updatedDate',
  }

  const result = SortExtensions.sortExtensions(extensions, parsedValue)
  expect(result).toEqual(extensions)
})

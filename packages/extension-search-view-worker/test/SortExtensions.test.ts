import { expect, test } from '@jest/globals'
import * as SortExtensions from '../src/parts/SortExtensions/SortExtensions.ts'

test('sortExtensions', () => {
  const extensions: readonly any[] = [{ name: 'c' }, { name: 'a' }, { name: 'b' }]

  const result = SortExtensions.sortExtensions(extensions)
  expect(result).toEqual([{ name: 'a' }, { name: 'b' }, { name: 'c' }])
})

test('sortExtensions with empty array', () => {
  const extensions: readonly any[] = []
  const result = SortExtensions.sortExtensions(extensions)
  expect(result).toEqual([])
})

test('sortExtensions by size descending', () => {
  const extensions: readonly any[] = [
    { name: 'a', size: 1000 },
    { name: 'b', size: 5000 },
    { name: 'c', size: 2000 },
  ]
  const parsedValue = { sort: 'size' } as any

  const result = SortExtensions.sortExtensions(extensions, parsedValue)
  expect(result).toEqual([
    { name: 'b', size: 5000 },
    { name: 'c', size: 2000 },
    { name: 'a', size: 1000 },
  ])
})

test('sortExtensions by size with equal sizes', () => {
  const extensions: readonly any[] = [
    { name: 'a', size: 1000 },
    { name: 'b', size: 1000 },
    { name: 'c', size: 1000 },
  ]
  const parsedValue = { sort: 'size' } as any

  const result = SortExtensions.sortExtensions(extensions, parsedValue)
  // When sizes are equal, the order should be stable (based on original order)
  expect(result).toEqual([
    { name: 'a', size: 1000 },
    { name: 'b', size: 1000 },
    { name: 'c', size: 1000 },
  ])
})

test('sortExtensions by size with zero and negative sizes', () => {
  const extensions: readonly any[] = [
    { name: 'a', size: 0 },
    { name: 'b', size: -100 },
    { name: 'c', size: 100 },
  ]
  const parsedValue = { sort: 'size' } as any

  const result = SortExtensions.sortExtensions(extensions, parsedValue)
  expect(result).toEqual([
    { name: 'c', size: 100 },
    { name: 'a', size: 0 },
    { name: 'b', size: -100 },
  ])
})

test('sortExtensions without sort parameter defaults to name/id comparison', () => {
  const extensions: readonly any[] = [
    { id: 'c', name: 'c', size: 5000 },
    { id: 'a', name: 'a', size: 1000 },
    { id: 'b', name: 'b', size: 2000 },
  ]
  const parsedValue = { sort: '' } as any

  const result = SortExtensions.sortExtensions(extensions, parsedValue)
  expect(result).toEqual([
    { id: 'a', name: 'a', size: 1000 },
    { id: 'b', name: 'b', size: 2000 },
    { id: 'c', name: 'c', size: 5000 },
  ])
})

test('sortExtensions with undefined parsedValue defaults to name/id comparison', () => {
  const extensions: readonly any[] = [
    { id: 'c', name: 'c', size: 5000 },
    { id: 'a', name: 'a', size: 1000 },
    { id: 'b', name: 'b', size: 2000 },
  ]

  const result = SortExtensions.sortExtensions(extensions)
  expect(result).toEqual([
    { id: 'a', name: 'a', size: 1000 },
    { id: 'b', name: 'b', size: 2000 },
    { id: 'c', name: 'c', size: 5000 },
  ])
})

test('sortExtensions by size with large size differences', () => {
  const extensions: readonly any[] = [
    { name: 'a', size: 1_000_000 },
    { name: 'b', size: 1_000_000_000 },
    { name: 'c', size: 10_000 },
  ]
  const parsedValue = { sort: 'size' } as any

  const result = SortExtensions.sortExtensions(extensions, parsedValue)
  expect(result).toEqual([
    { name: 'b', size: 1_000_000_000 },
    { name: 'a', size: 1_000_000 },
    { name: 'c', size: 10_000 },
  ])
})

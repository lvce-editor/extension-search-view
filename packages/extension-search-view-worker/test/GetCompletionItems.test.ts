import { expect, test } from '@jest/globals'
import { getCompletionItems } from '../src/parts/GetCompletionItems/GetCompletionItems.ts'

test('returns all extension search completions for at sign', () => {
  const items = getCompletionItems('@', 1)
  expect(items).toHaveLength(14)
  expect(items[0]).toEqual({ highlights: [0, 1], label: '@builtin' })
})

test('fuzzy filters extension search completions', () => {
  expect(getCompletionItems('@bti', 4)).toEqual([{ highlights: [0, 2, 5, 7], label: '@builtin' }])
})

test('returns no completions for normal text', () => {
  expect(getCompletionItems('theme', 5)).toEqual([])
})

test('returns no completions for unmatched query', () => {
  expect(getCompletionItems('@xyz', 4)).toEqual([])
})

test('uses cursor position for active query', () => {
  const items = getCompletionItems('@ins other', 4)
  expect(items.map((item) => item.label)).toEqual(['@installed', '@sort:installs'])
})

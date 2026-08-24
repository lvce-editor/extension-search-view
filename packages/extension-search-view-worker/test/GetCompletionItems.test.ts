import { expect, test } from '@jest/globals'
import { getCompletionItems } from '../src/parts/GetCompletionItems/GetCompletionItems.ts'

test('returns all extension search completions for at sign', () => {
  const items = getCompletionItems('@', 1)
  expect(items).toHaveLength(15)
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

test('returns all category completions for category prefix', () => {
  const items = getCompletionItems('@category:', 10)
  expect(items).toHaveLength(20)
  expect(items.map((item) => item.label)).toEqual([
    '@category:"ai"',
    '@category:"azure"',
    '@category:"chat"',
    '@category:"data science"',
    '@category:"debuggers"',
    '@category:"education"',
    '@category:"extension packs"',
    '@category:"formatters"',
    '@category:"keymaps"',
    '@category:"language packs"',
    '@category:"linters"',
    '@category:"machine learning"',
    '@category:"notebooks"',
    '@category:"other"',
    '@category:"programming languages"',
    '@category:"scm providers"',
    '@category:"snippets"',
    '@category:"testing"',
    '@category:"themes"',
    '@category:"visualization"',
  ])
})

test('fuzzy filters category completions', () => {
  expect(getCompletionItems('@category:azr', 13)).toEqual([{ highlights: [0, 10, 11, 13, 14, 15], label: '@category:"azure"' }])
})

test('fuzzy filters quoted category completions', () => {
  expect(getCompletionItems('@category:"dsc', 14)).toEqual([{ highlights: [0, 12, 16, 18], label: '@category:"data science"' }])
})

test('category completion prefix is case insensitive', () => {
  expect(getCompletionItems('@CATEGORY:AZR', 13)).toEqual([{ highlights: [0, 10, 11, 13, 14, 15], label: '@category:"azure"' }])
})

test('returns no category completions for unmatched category query', () => {
  expect(getCompletionItems('@category:xyz', 13)).toEqual([])
})

test('uses cursor position for category query', () => {
  const items = getCompletionItems('@category:azr other', 13)
  expect(items.map((item) => item.label)).toEqual(['@category:"azure"'])
})

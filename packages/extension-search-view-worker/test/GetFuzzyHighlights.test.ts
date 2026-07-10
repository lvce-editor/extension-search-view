import { expect, test } from '@jest/globals'
import { getFuzzyHighlights } from '../src/parts/GetFuzzyHighlights/GetFuzzyHighlights.ts'

test('highlights exact match as one range', () => {
  expect(getFuzzyHighlights('@builtin', '@builtin')).toEqual([0, 8])
})

test('matches case insensitively', () => {
  expect(getFuzzyHighlights('@builtin', '@BUILTIN')).toEqual([0, 8])
})

test('highlights non-contiguous fuzzy match ranges', () => {
  expect(getFuzzyHighlights('@builtin', '@bti')).toEqual([0, 2, 5, 7])
})

test('returns undefined for no match', () => {
  expect(getFuzzyHighlights('@builtin', '@xyz')).toBeUndefined()
})

test('matches an empty query', () => {
  expect(getFuzzyHighlights('@builtin', '')).toEqual([])
})

import { expect, test } from '@jest/globals'
import { getCompletionRange } from '../src/parts/GetCompletionRange/GetCompletionRange.ts'

test('finds completion at start', () => {
  expect(getCompletionRange('@', 1)).toEqual({ end: 1, query: '@', start: 0 })
})

test('finds completion after search text', () => {
  expect(getCompletionRange('theme @ins', 10)).toEqual({ end: 10, query: '@ins', start: 6 })
})

test('includes token suffix when cursor is in the middle', () => {
  expect(getCompletionRange('@installed other', 4)).toEqual({ end: 10, query: '@ins', start: 0 })
})

test('returns undefined for normal search text', () => {
  expect(getCompletionRange('installed', 9)).toBeUndefined()
})

test('returns undefined after whitespace', () => {
  expect(getCompletionRange('@installed ', 11)).toBeUndefined()
})

test('clamps cursor before start', () => {
  expect(getCompletionRange('@installed', -1)).toEqual({ end: 10, query: '', start: 0 })
})

test('clamps cursor after end', () => {
  expect(getCompletionRange('@installed', 100)).toEqual({ end: 10, query: '@installed', start: 0 })
})

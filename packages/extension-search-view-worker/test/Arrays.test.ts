import { expect, test } from '@jest/globals'
import * as Arrays from '../src/parts/Arrays/Arrays.ts'

test('toSorted returns sorted array without mutating original', () => {
  const original = [3, 1, 4, 1, 5]
  const sorted = Arrays.toSorted(original, (a: number, b: number) => a - b)
  expect(sorted).toEqual([1, 1, 3, 4, 5])
  expect(original).toEqual([3, 1, 4, 1, 5])
})

test('isLastIndex returns true for last index', () => {
  const array = [1, 2, 3]
  expect(Arrays.isLastIndex(array, 2)).toBe(true)
})

test('isLastIndex returns false for non-last index', () => {
  const array = [1, 2, 3]
  expect(Arrays.isLastIndex(array, 0)).toBe(false)
  expect(Arrays.isLastIndex(array, 1)).toBe(false)
})

test('lastIndex returns correct last index', () => {
  const array = [1, 2, 3]
  expect(Arrays.lastIndex(array)).toBe(2)
})

test('lastIndex returns -1 for empty array', () => {
  const array: number[] = []
  expect(Arrays.lastIndex(array)).toBe(-1)
})

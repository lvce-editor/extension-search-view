import { expect, test } from '@jest/globals'
import { first, last, next } from '../../src/parts/ListIndex/ListIndex.js'

test('first should always return 0', () => {
  expect(first()).toBe(0)
})

test('last should return the last index of the array', () => {
  expect(last([1, 2, 3])).toBe(2)
  expect(last(['a', 'b'])).toBe(1)
  expect(last([true])).toBe(0)
})

test('last should handle empty array', () => {
  expect(last([])).toBe(-1)
})

test('next should return the next index', () => {
  expect(next([1, 2, 3], 0)).toBe(1)
  expect(next([1, 2, 3], 1)).toBe(2)
  expect(next([1, 2, 3], 2)).toBe(0)
})

test('next should handle single item array', () => {
  expect(next([1], 0)).toBe(0)
})

test('next should handle empty array', () => {
  expect(next([], 0)).toBe(NaN)
})

test('next should handle negative index', () => {
  expect(next([1, 2, 3], -1)).toBe(0)
})

test('next should handle index larger than array length', () => {
  expect(next([1, 2, 3], 5)).toBe(0)
})

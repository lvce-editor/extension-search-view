import { expect, test } from '@jest/globals'
import * as GetScrollBarSize from '../src/parts/GetScrollBarSize/GetScrollBarSize.ts'

test('returns 0 when container size is larger than content size', () => {
  expect(GetScrollBarSize.getScrollBarSize(100, 50, 20)).toBe(0)
})

test('returns minimum slider size when calculated size is smaller', () => {
  expect(GetScrollBarSize.getScrollBarSize(100, 1000, 20)).toBe(20)
})

test('returns calculated size when larger than minimum', () => {
  expect(GetScrollBarSize.getScrollBarSize(100, 200, 20)).toBe(50)
})

test('handles large numbers correctly', () => {
  expect(GetScrollBarSize.getScrollBarSize(1000, 10_000, 50)).toBe(100)
})

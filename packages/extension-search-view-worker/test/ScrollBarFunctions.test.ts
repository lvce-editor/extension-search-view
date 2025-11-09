import { test, expect } from '@jest/globals'
import { getScrollBarY } from '../src/parts/ScrollBarFunctions/ScrollBarFunctions.ts'

test('getScrollBarY calculates correct offset', () => {
  const delta = 50
  const finalDelta = 100
  const size = 500
  const scrollBarSize = 50

  const result = getScrollBarY(delta, finalDelta, size, scrollBarSize)
  expect(result).toBe(225) // (50/100) * (500-50) = 0.5 * 450 = 225
})

test('getScrollBarY returns 0 when delta is 0', () => {
  const delta = 0
  const finalDelta = 100
  const size = 500
  const scrollBarSize = 50

  const result = getScrollBarY(delta, finalDelta, size, scrollBarSize)
  expect(result).toBe(0)
})

test('getScrollBarY returns max offset when delta equals finalDelta', () => {
  const delta = 100
  const finalDelta = 100
  const size = 500
  const scrollBarSize = 50

  const result = getScrollBarY(delta, finalDelta, size, scrollBarSize)
  expect(result).toBe(450) // (100/100) * (500-50) = 1 * 450 = 450
})

test('getScrollBarY returns zero when size needs no scrollbar', () => {
  const delta = 0
  const finalDelta = 0
  const size = 421 - 41
  const scrollBarSize = 0
  const result = getScrollBarY(delta, finalDelta, size, scrollBarSize)
  expect(result).toBe(0)
})

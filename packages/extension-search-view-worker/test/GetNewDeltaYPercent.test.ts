import { expect, test } from '@jest/globals'
import * as GetNewDeltaYPercent from '../src/parts/GetNewDeltaYPercent/GetNewDeltaYPercent.ts'

test('calculates correct values when clicking at top of scrollbar', () => {
  const result = GetNewDeltaYPercent.getNewDeltaPercent(100, 20, 5)
  expect(result.percent).toBe(0)
  expect(result.handleOffset).toBe(5)
})

test('calculates correct values when clicking in middle of scrollbar', () => {
  const result = GetNewDeltaYPercent.getNewDeltaPercent(100, 20, 50)
  expect(result.percent).toBe(0.5)
  expect(result.handleOffset).toBe(10)
})

test('calculates correct values when clicking at bottom of scrollbar', () => {
  const result = GetNewDeltaYPercent.getNewDeltaPercent(100, 20, 95)
  expect(result.percent).toBe(1)
  expect(result.handleOffset).toBe(15)
})

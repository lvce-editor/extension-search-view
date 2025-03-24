import { expect, test } from '@jest/globals'
import * as GetNumberOfVisibleItems from '../src/parts/GetNumberOfVisibleItems/GetNumberOfVisibleItems.ts'

test('calculates correct number of visible items', () => {
  const listHeight = 100
  const itemHeight = 20
  const result = GetNumberOfVisibleItems.getNumberOfVisibleItems(listHeight, itemHeight)
  expect(result).toBe(6) // Math.ceil(100/20) + 1
})

test('handles exact division', () => {
  const listHeight = 100
  const itemHeight = 25
  const result = GetNumberOfVisibleItems.getNumberOfVisibleItems(listHeight, itemHeight)
  expect(result).toBe(5) // Math.ceil(100/25) + 1
})

test('handles non-exact division', () => {
  const listHeight = 100
  const itemHeight = 30
  const result = GetNumberOfVisibleItems.getNumberOfVisibleItems(listHeight, itemHeight)
  expect(result).toBe(5) // Math.ceil(100/30) + 1
})

test('handles small list height', () => {
  const listHeight = 10
  const itemHeight = 20
  const result = GetNumberOfVisibleItems.getNumberOfVisibleItems(listHeight, itemHeight)
  expect(result).toBe(2) // Math.ceil(10/20) + 1
})

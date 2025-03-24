import { expect, test } from '@jest/globals'
import * as Clamp from '../src/parts/Clamp/Clamp'

test('clamps number between min and max', () => {
  expect(Clamp.clamp(5, 0, 10)).toBe(5)
  expect(Clamp.clamp(15, 0, 10)).toBe(10)
  expect(Clamp.clamp(-5, 0, 10)).toBe(0)
})

test('handles equal min and max', () => {
  expect(Clamp.clamp(5, 5, 5)).toBe(5)
  expect(Clamp.clamp(10, 5, 5)).toBe(5)
  expect(Clamp.clamp(0, 5, 5)).toBe(5)
})

test('handles negative ranges', () => {
  expect(Clamp.clamp(-3, -5, -1)).toBe(-3)
  expect(Clamp.clamp(-6, -5, -1)).toBe(-5)
  expect(Clamp.clamp(0, -5, -1)).toBe(-1)
})

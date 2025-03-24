import { test, expect } from '@jest/globals'
import { compareExtension } from '../src/parts/CompareExtension/CompareExtension.ts'

test('should compare extensions by name', () => {
  const extensionA = { name: 'a', id: '1' }
  const extensionB = { name: 'b', id: '2' }
  const extensionC = { name: 'c', id: '3' }

  expect(compareExtension(extensionA, extensionB)).toBeLessThan(0)
  expect(compareExtension(extensionB, extensionA)).toBeGreaterThan(0)
  expect(compareExtension(extensionA, extensionA)).toBe(0)
  expect(compareExtension(extensionB, extensionC)).toBeLessThan(0)
})

test('should compare extensions by id when names are equal', () => {
  const extensionA = { name: 'same', id: 'a' }
  const extensionB = { name: 'same', id: 'b' }
  const extensionC = { name: 'same', id: 'c' }

  expect(compareExtension(extensionA, extensionB)).toBeLessThan(0)
  expect(compareExtension(extensionB, extensionA)).toBeGreaterThan(0)
  expect(compareExtension(extensionA, extensionA)).toBe(0)
  expect(compareExtension(extensionB, extensionC)).toBeLessThan(0)
})

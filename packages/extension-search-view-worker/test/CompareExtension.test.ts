import { test, expect } from '@jest/globals'
import { compareExtension } from '../src/parts/CompareExtension/CompareExtension.ts'

test('should compare extensions by name', () => {
  const extensionA = { id: '1', name: 'a' } as any
  const extensionB = { id: '2', name: 'b' } as any
  const extensionC = { id: '3', name: 'c' } as any

  expect(compareExtension(extensionA, extensionB)).toBeLessThan(0)
  expect(compareExtension(extensionB, extensionA)).toBeGreaterThan(0)
  expect(compareExtension(extensionA, extensionA)).toBe(0)
  expect(compareExtension(extensionB, extensionC)).toBeLessThan(0)
})

test('should compare extensions by id when names are equal', () => {
  const extensionA = { id: 'a', name: 'same' } as any
  const extensionB = { id: 'b', name: 'same' } as any
  const extensionC = { id: 'c', name: 'same' } as any

  expect(compareExtension(extensionA, extensionB)).toBeLessThan(0)
  expect(compareExtension(extensionB, extensionA)).toBeGreaterThan(0)
  expect(compareExtension(extensionA, extensionA)).toBe(0)
  expect(compareExtension(extensionB, extensionC)).toBeLessThan(0)
})

import { expect, test } from '@jest/globals'
import { getExtensionDetailUri } from '../src/parts/GetExtensionDetailUri/GetExtensionDetailUri.ts'

test('returns extension detail URI for valid extension ID', () => {
  const result = getExtensionDetailUri('test-extension-id')
  expect(result).toBe('extension-detail://test-extension-id')
})

test('returns extension detail URI for empty extension ID', () => {
  const result = getExtensionDetailUri('')
  expect(result).toBe('extension-detail://')
})

test('returns extension detail URI for extension ID with special characters', () => {
  const result = getExtensionDetailUri('test@extension#id')
  expect(result).toBe('extension-detail://test@extension#id')
})

test('returns extension detail URI for extension ID with numbers', () => {
  const result = getExtensionDetailUri('extension123')
  expect(result).toBe('extension-detail://extension123')
})

test('returns extension detail URI for extension ID with dashes', () => {
  const result = getExtensionDetailUri('my-extension-id')
  expect(result).toBe('extension-detail://my-extension-id')
})

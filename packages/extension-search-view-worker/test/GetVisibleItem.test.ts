import { expect, test } from '@jest/globals'
import type { ExtensionListItem } from '../src/parts/ExtensionListItem/ExtensionListItem.ts'
import * as GetVisibleItem from '../src/parts/GetVisibleItem/GetVisibleItem.ts'

const mockItem: ExtensionListItem = {
  categories: [],
  description: 'Test Description',
  icon: 'test-icon.png',
  id: 'test-extension',
  name: 'Test Extension',
  publisher: 'Test Publisher',
  size: 1000,
  updatedDate: 1_000_000,
  uri: 'https://example.com',
}

test('returns visible item with correct basic properties', () => {
  const result = GetVisibleItem.getVisibleItem(mockItem, 10, 30, 0, 0, 0, 0)
  expect(result.setSize).toBe(10)
  expect(result.posInSet).toBe(1)
  expect(result.top).toBe(0)
  expect(result.focused).toBe(true)
})

test('calculates posInSet correctly', () => {
  const result = GetVisibleItem.getVisibleItem(mockItem, 10, 30, 0, 0, 5, 0)
  expect(result.posInSet).toBe(6)
})

test('calculates top position correctly', () => {
  const result = GetVisibleItem.getVisibleItem(mockItem, 10, 30, 2, 10, 4, 0)
  expect(result.top).toBe((4 - 2) * 30 - 10)
  expect(result.top).toBe(50)
})

test('sets focused to true when index matches focusedIndex', () => {
  const result = GetVisibleItem.getVisibleItem(mockItem, 10, 30, 0, 0, 3, 3)
  expect(result.focused).toBe(true)
})

test('sets focused to false when index does not match focusedIndex', () => {
  const result = GetVisibleItem.getVisibleItem(mockItem, 10, 30, 0, 0, 3, 5)
  expect(result.focused).toBe(false)
})

test('copies all item properties correctly', () => {
  const result = GetVisibleItem.getVisibleItem(mockItem, 10, 30, 0, 0, 0, 0)
  expect(result.name).toBe('Test Extension')
  expect(result.id).toBe('test-extension')
  expect(result.publisher).toBe('Test Publisher')
  expect(result.icon).toBe('test-icon.png')
  expect(result.description).toBe('Test Description')
})

test('handles negative relative value', () => {
  const result = GetVisibleItem.getVisibleItem(mockItem, 10, 30, 0, -10, 2, 0)
  expect(result.top).toBe((2 - 0) * 30 - -10)
  expect(result.top).toBe(70)
})

test('handles different minLineY values', () => {
  const result = GetVisibleItem.getVisibleItem(mockItem, 10, 30, 5, 0, 7, 0)
  expect(result.top).toBe((7 - 5) * 30 - 0)
  expect(result.top).toBe(60)
})

test('handles zero index', () => {
  const result = GetVisibleItem.getVisibleItem(mockItem, 10, 30, 0, 0, 0, 0)
  expect(result.posInSet).toBe(1)
  expect(result.top).toBe(0)
  expect(result.focused).toBe(true)
})

test('handles different item heights', () => {
  const result = GetVisibleItem.getVisibleItem(mockItem, 10, 50, 0, 0, 2, 0)
  expect(result.top).toBe((2 - 0) * 50 - 0)
  expect(result.top).toBe(100)
})

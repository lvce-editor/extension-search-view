import { expect, test } from '@jest/globals'
import type { ExtensionListItem } from '../src/parts/ExtensionListItem/ExtensionListItem.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as GetFocusedItem from '../src/parts/GetFocusedItem/GetFocusedItem.ts'

const mockItem1: ExtensionListItem = {
  name: 'Test Extension 1',
  id: 'test-extension-1',
  publisher: 'Test Publisher',
  icon: 'test-icon-1.png',
  description: 'Test Description 1',
  uri: 'https://example.com/1',
  categories: [],
}

const mockItem2: ExtensionListItem = {
  name: 'Test Extension 2',
  id: 'test-extension-2',
  publisher: 'Test Publisher',
  icon: 'test-icon-2.png',
  description: 'Test Description 2',
  uri: 'https://example.com/2',
  categories: [],
}

const mockItem3: ExtensionListItem = {
  name: 'Test Extension 3',
  id: 'test-extension-3',
  publisher: 'Test Publisher',
  icon: 'test-icon-3.png',
  description: 'Test Description 3',
  uri: 'https://example.com/3',
  categories: [],
}

test('returns undefined when focusedIndex is -1', () => {
  const state = {
    ...createDefaultState(),
    focusedIndex: -1,
    items: [],
  }
  const result = GetFocusedItem.getFocusedItem(state)
  expect(result).toBeUndefined()
})

test('returns undefined when focusedIndex is -1 and items array is not empty', () => {
  const state = {
    ...createDefaultState(),
    focusedIndex: -1,
    items: [mockItem1, mockItem2],
  }
  const result = GetFocusedItem.getFocusedItem(state)
  expect(result).toBeUndefined()
})

test('returns the first item when focusedIndex is 0', () => {
  const state = {
    ...createDefaultState(),
    focusedIndex: 0,
    items: [mockItem1, mockItem2, mockItem3],
  }
  const result = GetFocusedItem.getFocusedItem(state)
  expect(result).toBe(mockItem1)
})

test('returns the middle item when focusedIndex is in the middle', () => {
  const state = {
    ...createDefaultState(),
    focusedIndex: 1,
    items: [mockItem1, mockItem2, mockItem3],
  }
  const result = GetFocusedItem.getFocusedItem(state)
  expect(result).toBe(mockItem2)
})

test('returns the last item when focusedIndex is the last index', () => {
  const state = {
    ...createDefaultState(),
    focusedIndex: 2,
    items: [mockItem1, mockItem2, mockItem3],
  }
  const result = GetFocusedItem.getFocusedItem(state)
  expect(result).toBe(mockItem3)
})

test('returns the item when there is only one item', () => {
  const state = {
    ...createDefaultState(),
    focusedIndex: 0,
    items: [mockItem1],
  }
  const result = GetFocusedItem.getFocusedItem(state)
  expect(result).toBe(mockItem1)
})

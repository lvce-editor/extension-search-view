import { expect, test } from '@jest/globals'
import * as NormalizeExtension from '../src/parts/NormalizeExtension/NormalizeExtension.ts'

test('normalizeExtension returns correct ExtensionListItem structure', () => {
  const extension = {
    description: 'Test Description',
    icon: 'test-icon.png',
    id: 'test-id',
    name: 'Test Extension',
    publisher: 'Test Publisher',
    size: 1000,
    updatedDate: 1000,
  }

  const result = NormalizeExtension.normalizeExtension(extension, 1, '/test/assets')

  expect(result).toEqual({
    categories: [],
    description: 'Test Description',
    icon: '/test/assets/icons/extensionDefaultIcon.png',
    id: 'test-id',
    name: 'Test Extension',
    publisher: 'test-id',
    size: 1000,
    updatedDate: 1000,
    uri: '',
  })
})

test('normalizeExtension handles extension with missing fields', () => {
  const extension = {
    id: 'test-id',
    name: 'Test Extension',
  }

  const result = NormalizeExtension.normalizeExtension(extension, 1, '/test/assets')

  expect(result).toEqual({
    categories: [],
    description: 'n/a',
    icon: '/test/assets/icons/extensionDefaultIcon.png',
    id: 'test-id',
    name: 'Test Extension',
    publisher: 'test-id',
    size: 0,
    updatedDate: 0,
    uri: '',
  })
})

test('normalizeExtension handles different platform values', () => {
  const extension = {
    description: 'Test Description',
    icon: 'test-icon.png',
    id: 'test-id',
    name: 'Test Extension',
    publisher: 'Test Publisher',
    size: 1000,
    updatedDate: 1000,
  }

  const result = NormalizeExtension.normalizeExtension(extension, 2, '/test/assets')

  expect(result).toEqual({
    categories: [],
    description: 'Test Description',
    icon: '/test/assets/icons/extensionDefaultIcon.png',
    id: 'test-id',
    name: 'Test Extension',
    publisher: 'test-id',
    size: 1000,
    updatedDate: 1000,
    uri: '',
  })
})

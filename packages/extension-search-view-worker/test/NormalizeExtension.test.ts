import { expect, test } from '@jest/globals'
import * as NormalizeExtension from '../src/parts/NormalizeExtension/NormalizeExtension.ts'

test('normalizeExtension returns correct ExtensionListItem structure', () => {
  const extension = {
    id: 'test-id',
    name: 'Test Extension',
    description: 'Test Description',
    publisher: 'Test Publisher',
    icon: 'test-icon.png',
  }

  const result = NormalizeExtension.normalizeExtension(extension, 1, '/test/assets')

  expect(result).toEqual({
    id: 'test-id',
    name: 'Test Extension',
    description: 'Test Description',
    uri: '',
    publisher: 'test-id',
    icon: '/test/assets/icons/extensionDefaultIcon.png',
    categories: [],
  })
})

test('normalizeExtension handles extension with missing fields', () => {
  const extension = {
    id: 'test-id',
    name: 'Test Extension',
  }

  const result = NormalizeExtension.normalizeExtension(extension, 1, '/test/assets')

  expect(result).toEqual({
    id: 'test-id',
    name: 'Test Extension',
    description: 'n/a',
    uri: '',
    publisher: 'test-id',
    icon: '/test/assets/icons/extensionDefaultIcon.png',
    categories: [],
  })
})

test('normalizeExtension handles different platform values', () => {
  const extension = {
    id: 'test-id',
    name: 'Test Extension',
    description: 'Test Description',
    publisher: 'Test Publisher',
    icon: 'test-icon.png',
  }

  const result = NormalizeExtension.normalizeExtension(extension, 2, '/test/assets')

  expect(result).toEqual({
    id: 'test-id',
    name: 'Test Extension',
    description: 'Test Description',
    uri: '',
    publisher: 'test-id',
    icon: '/test/assets/icons/extensionDefaultIcon.png',
    categories: [],
  })
})

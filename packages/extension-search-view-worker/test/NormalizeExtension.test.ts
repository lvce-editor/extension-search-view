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
    builtin: false,
    categories: [],
    description: 'Test Description',
    disabled: false,
    icon: '/test/assets/icons/extensionDefaultIcon.png',
    id: 'test-id',
    name: 'Test Extension',
    publisher: 'test-id',
    size: 1000,
    status: undefined,
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
    builtin: false,
    categories: [],
    description: 'n/a',
    disabled: false,
    icon: '/test/assets/icons/extensionDefaultIcon.png',
    id: 'test-id',
    name: 'Test Extension',
    publisher: 'test-id',
    size: 0,
    status: undefined,
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
    builtin: false,
    categories: [],
    description: 'Test Description',
    disabled: false,
    icon: '/test/assets/icons/extensionDefaultIcon.png',
    id: 'test-id',
    name: 'Test Extension',
    publisher: 'test-id',
    size: 1000,
    status: undefined,
    updatedDate: 1000,
    uri: '',
  })
})

test('normalizeExtension preserves builtin and disabled state', () => {
  const extension = {
    builtin: true,
    disabled: true,
    id: 'builtin.test',
    status: 'uninstalling',
  }

  const result = NormalizeExtension.normalizeExtension(extension, 1, '/test/assets')

  expect(result.builtin).toBe(true)
  expect(result.disabled).toBe(true)
  expect(result.status).toBe('uninstalling')
})

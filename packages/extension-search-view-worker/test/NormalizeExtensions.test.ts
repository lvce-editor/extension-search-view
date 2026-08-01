import { test, expect } from '@jest/globals'
import { normalizeExtensions } from '../src/parts/NormalizeExtensions/NormalizeExtensions.ts'

test('normalizeExtension should normalize multiple extensions', () => {
  const extension1 = { description: 'Desc 1', id: '1', name: 'Extension 1', publisher: 'Publisher 1', size: 1000, updatedDate: 1000 }
  const extension2 = { description: 'Desc 2', id: '2', name: 'Extension 2', publisher: 'Publisher 2', size: 2000, updatedDate: 2000 }

  const result = normalizeExtensions([extension1, extension2], 1, '/assets')

  expect(result).toHaveLength(2)
  expect(result[0]).toEqual({
    builtin: false,
    categories: [],
    description: 'Desc 1',
    disabled: false,
    downloadCount: 'n/a',
    icon: '/assets/icons/extensionDefaultIcon.png',
    id: '1',
    name: 'Extension 1',
    publisher: '1',
    rating: 'n/a',
    size: 1000,
    status: undefined,
    updatedDate: 1000,
    uri: '',
  })
  expect(result[1]).toEqual({
    builtin: false,
    categories: [],
    description: 'Desc 2',
    disabled: false,
    downloadCount: 'n/a',
    icon: '/assets/icons/extensionDefaultIcon.png',
    id: '2',
    name: 'Extension 2',
    publisher: '2',
    rating: 'n/a',
    size: 2000,
    status: undefined,
    updatedDate: 2000,
    uri: '',
  })
})

test('normalizeExtension should handle empty array', () => {
  const result = normalizeExtensions([], 1, '/assets')
  expect(result).toEqual([])
})

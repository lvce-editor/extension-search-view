import { test, expect } from '@jest/globals'
import { normalizeExtension } from '../src/parts/NormalizeExtensions/NormalizeExtensions.ts'

test('normalizeExtension should normalize multiple extensions', () => {
  const extension1 = { description: 'Desc 1', id: '1', name: 'Extension 1', publisher: 'Publisher 1' }
  const extension2 = { description: 'Desc 2', id: '2', name: 'Extension 2', publisher: 'Publisher 2' }

  const result = normalizeExtension([extension1, extension2], 1, '/assets')

  expect(result).toHaveLength(2)
  expect(result[0]).toEqual({
    categories: [],
    description: 'Desc 1',
    icon: '/assets/icons/extensionDefaultIcon.png',
    id: '1',
    name: 'Extension 1',
    publisher: '1',
    uri: '',
  })
  expect(result[1]).toEqual({
    categories: [],
    description: 'Desc 2',
    icon: '/assets/icons/extensionDefaultIcon.png',
    id: '2',
    name: 'Extension 2',
    publisher: '2',
    uri: '',
  })
})

test('normalizeExtension should handle empty array', () => {
  const result = normalizeExtension([], 1, '/assets')
  expect(result).toEqual([])
})

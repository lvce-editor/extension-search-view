import { test, expect } from '@jest/globals'
import { normalizeExtension } from '../src/parts/NormalizeExtensions/NormalizeExtensions.ts'

test('normalizeExtension should normalize multiple extensions', () => {
  const extension1 = { id: '1', name: 'Extension 1', description: 'Desc 1', publisher: 'Publisher 1' }
  const extension2 = { id: '2', name: 'Extension 2', description: 'Desc 2', publisher: 'Publisher 2' }

  const result = normalizeExtension([extension1, extension2], 1, '/assets')

  expect(result).toHaveLength(2)
  expect(result[0]).toEqual({
    id: '1',
    name: 'Extension 1',
    description: 'Desc 1',
    uri: '',
    publisher: '1',
    icon: '/assets/icons/extensionDefaultIcon.png',
    categories: [],
  })
  expect(result[1]).toEqual({
    id: '2',
    name: 'Extension 2',
    description: 'Desc 2',
    uri: '',
    publisher: '2',
    icon: '/assets/icons/extensionDefaultIcon.png',
    categories: [],
  })
})

test('normalizeExtension should handle empty array', () => {
  const result = normalizeExtension([], 1, '/assets')
  expect(result).toEqual([])
})

import { expect, test } from '@jest/globals'
import { getCategories } from '../src/parts/GetCategories/GetCategories.ts'

test('returns empty categories when categories are not an array', () => {
  expect(getCategories({ categories: 'Themes' })).toEqual([])
})

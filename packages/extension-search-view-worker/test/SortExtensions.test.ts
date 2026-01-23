import { expect, test } from '@jest/globals'
import * as SortExtensions from '../src/parts/SortExtensions/SortExtensions.ts'

test('sortExtensions', () => {
  const extensions: readonly any[] = [{ name: 'c' }, { name: 'a' }, { name: 'b' }]

  const result = SortExtensions.sortExtensions(extensions)
  expect(result).toEqual([{ name: 'a' }, { name: 'b' }, { name: 'c' }])
})

test('sortExtensions with empty array', () => {
  const extensions: readonly any[] = []
  const result = SortExtensions.sortExtensions(extensions)
  expect(result).toEqual([])
})

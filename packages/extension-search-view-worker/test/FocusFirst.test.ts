import { expect, test } from '@jest/globals'
import { focusFirst } from '../src/parts/FocusFirst/FocusFirst.ts'

test.skip('focusFirst should focus the first index', () => {
  const state = {
    list: ['item1', 'item2', 'item3'],
  } as any

  const result = focusFirst(state)
  expect(result).toBeDefined()
})

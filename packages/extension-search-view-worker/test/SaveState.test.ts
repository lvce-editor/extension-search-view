import { test, expect } from '@jest/globals'
import type { State } from '../src/parts/State/State.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { saveState } from '../src/parts/SaveState/SaveState.ts'

test('saveState returns SavedState with searchValue', () => {
  const state: State = {
    ...createDefaultState(),
    searchValue: 'test search',
  }
  const result = saveState(state)
  expect(result).toEqual({
    searchValue: 'test search',
  })
})

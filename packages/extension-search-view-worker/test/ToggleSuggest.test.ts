import { expect, test } from '@jest/globals'
import type { State } from '../src/parts/State/State.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { toggleSuggest } from '../src/parts/ToggleSuggest/ToggleSuggest.ts'

test('toggleSuggest', () => {
  const state: State = { ...createDefaultState(), suggestOpen: false }
  const result = toggleSuggest(state)
  expect(result.suggestOpen).toBe(true)
  const result2 = toggleSuggest(result)
  expect(result2.suggestOpen).toBe(false)
})

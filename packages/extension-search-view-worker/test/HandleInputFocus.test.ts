import { expect, test } from '@jest/globals'
import { create } from '@lvce-editor/viewlet-registry'
import type { State } from '../src/parts/State/State.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FocusId from '../src/parts/FocusId/FocusId.ts'
import { handleInputFocus, handleInputFocusWithContext } from '../src/parts/HandleInputFocus/HandleInputFocus.ts'

test('focuses extension search input', () => {
  expect(handleInputFocus(createDefaultState()).focus).toBe(FocusId.Input)
})

test('input focus preserves a concurrent search update', async () => {
  const registry = create<State>()
  const state = createDefaultState()
  registry.set(1, state, state)
  const focus = registry.wrapAsyncCommand(handleInputFocusWithContext)(1)
  const updateSearch = registry.wrapAsyncCommand(async (context) => {
    await context.updateState((state) => ({
      ...state,
      searchValue: '@category:scmp',
      suggestOpen: true,
    }))
  })
  await updateSearch(1)
  await focus
  const { newState } = registry.get(1)
  expect(newState.focus).toBe(FocusId.Input)
  expect(newState.searchValue).toBe('@category:scmp')
  expect(newState.suggestOpen).toBe(true)
  registry.dispose(1)
})

import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as Dispose from '../src/parts/Dispose/Dispose.ts'
import * as ExtensionSearchViewStates from '../src/parts/ExtensionSearchViewStates/ExtensionSearchViewStates.ts'

test('dispose removes state for given uid', () => {
  const uid = 123
  const state = {
    ...createDefaultState(),
    uid,
  }
  ExtensionSearchViewStates.set(uid, state, state)
  expect(ExtensionSearchViewStates.get(uid)).toBeDefined()
  Dispose.dispose(uid)
  expect(ExtensionSearchViewStates.get(uid)).toBeUndefined()
})

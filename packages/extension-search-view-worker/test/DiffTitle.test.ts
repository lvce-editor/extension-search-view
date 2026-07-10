import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DiffTitle from '../src/parts/DiffTitle/DiffTitle.ts'

test('isEqual returns true when search value is unchanged', () => {
  const state = createDefaultState()
  expect(DiffTitle.isEqual(state, state)).toBe(true)
})

test('isEqual returns false when search value changes', () => {
  const oldState = createDefaultState()
  const newState = {
    ...oldState,
    searchValue: '@deprecated',
  }
  expect(DiffTitle.isEqual(oldState, newState)).toBe(false)
})

test('isEqual returns true when there is no parent view', () => {
  const oldState = {
    ...createDefaultState(),
    parentUid: undefined,
  }
  const newState = {
    ...oldState,
    searchValue: '@deprecated',
  }
  expect(DiffTitle.isEqual(oldState, newState)).toBe(true)
})

import { expect, test } from '@jest/globals'
import type { State } from '../src/parts/State/State.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DiffSearchValue from '../src/parts/DiffSearchValue/DiffSearchValue.ts'
import * as InputSource from '../src/parts/InputSource/InputSource.ts'

test('isEqual returns true when newState.inputSource is User', () => {
  const oldState: State = { ...createDefaultState(), searchValue: 'old value' }
  const newState: State = { ...createDefaultState(), inputSource: InputSource.User, searchValue: 'new value' }
  expect(DiffSearchValue.isEqual(oldState, newState)).toBe(true)
})

test('isEqual returns true when searchValue is equal', () => {
  const oldState: State = { ...createDefaultState(), searchValue: 'test value' }
  const newState: State = { ...createDefaultState(), inputSource: InputSource.Script, searchValue: 'test value' }
  expect(DiffSearchValue.isEqual(oldState, newState)).toBe(true)
})

test('isEqual returns false when searchValue is different and inputSource is not User', () => {
  const oldState: State = { ...createDefaultState(), searchValue: 'old value' }
  const newState: State = { ...createDefaultState(), inputSource: InputSource.Script, searchValue: 'new value' }
  expect(DiffSearchValue.isEqual(oldState, newState)).toBe(false)
})

test('isEqual returns true when both searchValue is equal and inputSource is User', () => {
  const oldState: State = { ...createDefaultState(), searchValue: 'test value' }
  const newState: State = { ...createDefaultState(), inputSource: InputSource.User, searchValue: 'test value' }
  expect(DiffSearchValue.isEqual(oldState, newState)).toBe(true)
})

test('isEqual returns true for default states', () => {
  const oldState: State = createDefaultState()
  const newState: State = createDefaultState()
  expect(DiffSearchValue.isEqual(oldState, newState)).toBe(true)
})

test('isEqual returns true when searchValue is empty and equal', () => {
  const oldState: State = { ...createDefaultState(), searchValue: '' }
  const newState: State = { ...createDefaultState(), inputSource: InputSource.Script, searchValue: '' }
  expect(DiffSearchValue.isEqual(oldState, newState)).toBe(true)
})

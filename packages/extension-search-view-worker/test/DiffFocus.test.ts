import { expect, test } from '@jest/globals'
import type { State } from '../src/parts/State/State.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DiffFocus from '../src/parts/DiffFocus/DiffFocus.ts'

test('isEqual returns true when newState.focus is 0', () => {
  const oldState: State = { ...createDefaultState(), focus: 5, inputSource: 1 }
  const newState: State = { ...createDefaultState(), focus: 0, inputSource: 2 }
  expect(DiffFocus.isEqual(oldState, newState)).toBe(true)
})

test('isEqual returns true when focus and inputSource are equal', () => {
  const oldState: State = { ...createDefaultState(), focus: 3, inputSource: 1 }
  const newState: State = { ...createDefaultState(), focus: 3, inputSource: 1 }
  expect(DiffFocus.isEqual(oldState, newState)).toBe(true)
})

test('isEqual returns false when focus values are different', () => {
  const oldState: State = { ...createDefaultState(), focus: 2, inputSource: 1 }
  const newState: State = { ...createDefaultState(), focus: 3, inputSource: 1 }
  expect(DiffFocus.isEqual(oldState, newState)).toBe(false)
})

test('isEqual returns false when inputSource values are different', () => {
  const oldState: State = { ...createDefaultState(), focus: 2, inputSource: 1 }
  const newState: State = { ...createDefaultState(), focus: 2, inputSource: 2 }
  expect(DiffFocus.isEqual(oldState, newState)).toBe(false)
})

test('isEqual returns false when both focus and inputSource are different', () => {
  const oldState: State = { ...createDefaultState(), focus: 1, inputSource: 1 }
  const newState: State = { ...createDefaultState(), focus: 2, inputSource: 2 }
  expect(DiffFocus.isEqual(oldState, newState)).toBe(false)
})

test('isEqual returns true for default states', () => {
  const oldState: State = createDefaultState()
  const newState: State = createDefaultState()
  expect(DiffFocus.isEqual(oldState, newState)).toBe(true)
})

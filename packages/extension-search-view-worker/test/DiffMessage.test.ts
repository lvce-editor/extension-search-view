import { expect, test } from '@jest/globals'
import type { State } from '../src/parts/State/State.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DiffMessage from '../src/parts/DiffMessage/DiffMessage.ts'

test('isEqual returns true when messages are equal', () => {
  const oldState: State = { ...createDefaultState(), message: 'test message' }
  const newState: State = { ...createDefaultState(), message: 'test message' }
  expect(DiffMessage.isEqual(oldState, newState)).toBe(true)
})

test('isEqual returns false when messages are different', () => {
  const oldState: State = { ...createDefaultState(), message: 'old message' }
  const newState: State = { ...createDefaultState(), message: 'new message' }
  expect(DiffMessage.isEqual(oldState, newState)).toBe(false)
})

test('isEqual returns true when both messages are empty', () => {
  const oldState: State = createDefaultState()
  const newState: State = createDefaultState()
  expect(DiffMessage.isEqual(oldState, newState)).toBe(true)
})

test('isEqual returns false when one message is empty and the other is not', () => {
  const oldState: State = { ...createDefaultState(), message: '' }
  const newState: State = { ...createDefaultState(), message: 'non-empty' }
  expect(DiffMessage.isEqual(oldState, newState)).toBe(false)
})

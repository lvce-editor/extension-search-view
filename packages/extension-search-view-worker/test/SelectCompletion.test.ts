import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { selectNextCompletion } from '../src/parts/SelectNextCompletion/SelectNextCompletion.ts'
import { selectPreviousCompletion } from '../src/parts/SelectPreviousCompletion/SelectPreviousCompletion.ts'

const items = [
  { highlights: [], label: '@builtin' },
  { highlights: [], label: '@disabled' },
]

test('selects next completion', () => {
  const state = { ...createDefaultState(), completionItems: items, suggestOpen: true }
  expect(selectNextCompletion(state).completionFocusedIndex).toBe(1)
})

test('wraps next completion', () => {
  const state = { ...createDefaultState(), completionFocusedIndex: 1, completionItems: items, suggestOpen: true }
  expect(selectNextCompletion(state).completionFocusedIndex).toBe(0)
})

test('selects previous completion', () => {
  const state = { ...createDefaultState(), completionFocusedIndex: 1, completionItems: items, suggestOpen: true }
  expect(selectPreviousCompletion(state).completionFocusedIndex).toBe(0)
})

test('wraps previous completion', () => {
  const state = { ...createDefaultState(), completionItems: items, suggestOpen: true }
  expect(selectPreviousCompletion(state).completionFocusedIndex).toBe(1)
})

test('does not select when popup is closed', () => {
  const state = { ...createDefaultState(), completionItems: items }
  expect(selectNextCompletion(state)).toBe(state)
  expect(selectPreviousCompletion(state)).toBe(state)
})

test('does not select an empty list', () => {
  const state = { ...createDefaultState(), suggestOpen: true }
  expect(selectNextCompletion(state)).toBe(state)
  expect(selectPreviousCompletion(state)).toBe(state)
})

import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DiffType from '../src/parts/DiffType/DiffType.ts'
import * as ExtensionSearchViewStates from '../src/parts/ExtensionSearchViewStates/ExtensionSearchViewStates.ts'
import * as Render3 from '../src/parts/Render3/Render3.ts'

test('returns empty array when diffResult is empty', () => {
  const uid = 1
  const state: ReturnType<typeof createDefaultState> = createDefaultState()
  ExtensionSearchViewStates.set(uid, state, state)
  const diffResult: readonly number[] = []
  const result = Render3.render3(uid, diffResult)
  expect(result).toEqual([])
})

test('returns commands array when diffResult contains RenderSearchValue', () => {
  const uid = 2
  const oldState: ReturnType<typeof createDefaultState> = createDefaultState()
  const newState: ReturnType<typeof createDefaultState> = {
    ...createDefaultState(),
    searchValue: 'test',
  }
  ExtensionSearchViewStates.set(uid, oldState, newState)
  const diffResult: readonly number[] = [DiffType.RenderSearchValue]
  const result = Render3.render3(uid, diffResult)
  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBe(1)
})

test('returns commands array when diffResult contains multiple render types', () => {
  const uid = 3
  const oldState: ReturnType<typeof createDefaultState> = createDefaultState()
  const newState: ReturnType<typeof createDefaultState> = {
    ...createDefaultState(),
    message: 'test message',
    searchValue: 'test',
  }
  ExtensionSearchViewStates.set(uid, oldState, newState)
  const diffResult: readonly number[] = [DiffType.RenderSearchValue, DiffType.RenderMessage]
  const result = Render3.render3(uid, diffResult)
  expect(Array.isArray(result)).toBe(true)
  expect(result.length).toBe(2)
})

test('updates ExtensionSearchViewStates with newState', () => {
  const uid = 4
  const oldState: ReturnType<typeof createDefaultState> = createDefaultState()
  const newState: ReturnType<typeof createDefaultState> = {
    ...createDefaultState(),
    searchValue: 'updated',
  }
  ExtensionSearchViewStates.set(uid, oldState, newState)
  const diffResult: readonly number[] = [DiffType.RenderSearchValue]
  Render3.render3(uid, diffResult)
  const { newState: updatedNewState, oldState: updatedOldState } = ExtensionSearchViewStates.get(uid)
  expect(updatedNewState).toBe(newState)
  expect(updatedOldState).toBe(newState)
})

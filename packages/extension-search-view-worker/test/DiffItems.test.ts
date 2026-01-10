import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DiffItems from '../src/parts/DiffItems/DiffItems.ts'

test('isEqual returns true when all items properties are equal', () => {
  const state: ReturnType<typeof createDefaultState> = createDefaultState()
  expect(DiffItems.isEqual(state, state)).toBe(true)
})

test('isEqual returns false when items differs', () => {
  const oldState: ReturnType<typeof createDefaultState> = createDefaultState()
  const newState: ReturnType<typeof createDefaultState> = {
    ...createDefaultState(),
    items: Array(10).fill(null),
  }
  expect(DiffItems.isEqual(oldState, newState)).toBe(false)
})

test('isEqual returns false when minLineY differs', () => {
  const oldState: ReturnType<typeof createDefaultState> = createDefaultState()
  const newState: ReturnType<typeof createDefaultState> = {
    ...createDefaultState(),
    minLineY: 10,
  }
  expect(DiffItems.isEqual(oldState, newState)).toBe(false)
})

test('isEqual returns false when maxLineY differs', () => {
  const oldState: ReturnType<typeof createDefaultState> = createDefaultState()
  const newState: ReturnType<typeof createDefaultState> = {
    ...createDefaultState(),
    maxLineY: 10,
  }
  expect(DiffItems.isEqual(oldState, newState)).toBe(false)
})

test('isEqual returns false when deltaY differs', () => {
  const oldState: ReturnType<typeof createDefaultState> = createDefaultState()
  const newState: ReturnType<typeof createDefaultState> = {
    ...createDefaultState(),
    deltaY: 10,
  }
  expect(DiffItems.isEqual(oldState, newState)).toBe(false)
})

test('isEqual returns false when focusedIndex differs', () => {
  const oldState: ReturnType<typeof createDefaultState> = createDefaultState()
  const newState: ReturnType<typeof createDefaultState> = {
    ...createDefaultState(),
    focusedIndex: 5,
  }
  expect(DiffItems.isEqual(oldState, newState)).toBe(false)
})

test('isEqual returns false when message differs', () => {
  const oldState: ReturnType<typeof createDefaultState> = createDefaultState()
  const newState: ReturnType<typeof createDefaultState> = {
    ...createDefaultState(),
    message: 'test message',
  }
  expect(DiffItems.isEqual(oldState, newState)).toBe(false)
})

test('isEqual returns false when focus differs', () => {
  const oldState: ReturnType<typeof createDefaultState> = createDefaultState()
  const newState: ReturnType<typeof createDefaultState> = {
    ...createDefaultState(),
    focus: 5,
  }
  expect(DiffItems.isEqual(oldState, newState)).toBe(false)
})

test('isEqual returns false when inputActions differs', () => {
  const oldState: ReturnType<typeof createDefaultState> = createDefaultState()
  const newState: ReturnType<typeof createDefaultState> = {
    ...createDefaultState(),
    inputActions: [{ type: 1, value: 'test' }],
  }
  expect(DiffItems.isEqual(oldState, newState)).toBe(false)
})

test('isEqual returns false when placeholder differs', () => {
  const oldState: ReturnType<typeof createDefaultState> = createDefaultState()
  const newState: ReturnType<typeof createDefaultState> = {
    ...createDefaultState(),
    placeholder: 'test placeholder',
  }
  expect(DiffItems.isEqual(oldState, newState)).toBe(false)
})

test('isEqual returns false when scrollBarHeight differs', () => {
  const oldState: ReturnType<typeof createDefaultState> = createDefaultState()
  const newState: ReturnType<typeof createDefaultState> = {
    ...createDefaultState(),
    scrollBarHeight: 50,
  }
  expect(DiffItems.isEqual(oldState, newState)).toBe(false)
})

test('isEqual returns true when all checked properties match but other properties differ', () => {
  const oldState: ReturnType<typeof createDefaultState> = createDefaultState()
  const newState: ReturnType<typeof createDefaultState> = {
    ...oldState,
    focused: true,
    height: 200,
    scrollBarActive: true,
    searchValue: 'test',
    uid: 123,
    width: 500,
  }
  expect(DiffItems.isEqual(oldState, newState)).toBe(true)
})

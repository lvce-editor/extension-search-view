import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DiffScrollBar from '../src/parts/DiffScrollBar/DiffScrollBar.ts'

test('isEqual returns true when all scroll bar properties are equal', () => {
  const oldState = createDefaultState()
  const newState = createDefaultState()
  expect(DiffScrollBar.isEqual(oldState, newState)).toBe(true)
})

test('isEqual returns false when negativeMargin differs', () => {
  const oldState = createDefaultState()
  const newState = {
    ...createDefaultState(),
    negativeMargin: 10,
  }
  expect(DiffScrollBar.isEqual(oldState, newState)).toBe(false)
})

test('isEqual returns false when deltaY differs', () => {
  const oldState = createDefaultState()
  const newState = {
    ...createDefaultState(),
    deltaY: 10,
  }
  expect(DiffScrollBar.isEqual(oldState, newState)).toBe(false)
})

test('isEqual returns false when height differs', () => {
  const oldState = createDefaultState()
  const newState = {
    ...createDefaultState(),
    height: 200,
  }
  expect(DiffScrollBar.isEqual(oldState, newState)).toBe(false)
})

test('isEqual returns false when finalDeltaY differs', () => {
  const oldState = createDefaultState()
  const newState = {
    ...createDefaultState(),
    finalDeltaY: 10,
  }
  expect(DiffScrollBar.isEqual(oldState, newState)).toBe(false)
})

test('isEqual returns false when items.length differs', () => {
  const oldState = createDefaultState()
  const newState = {
    ...createDefaultState(),
    items: Array(10).fill(null),
  }
  expect(DiffScrollBar.isEqual(oldState, newState)).toBe(false)
})

test('isEqual returns false when scrollBarActive differs', () => {
  const oldState = createDefaultState()
  const newState = {
    ...createDefaultState(),
    scrollBarActive: true,
  }
  expect(DiffScrollBar.isEqual(oldState, newState)).toBe(false)
})

test('isEqual returns true when all checked properties match but other properties differ', () => {
  const oldState = createDefaultState()
  const newState = {
    ...createDefaultState(),
    focus: 5,
    focused: true,
    searchValue: 'test',
    width: 500,
  }
  expect(DiffScrollBar.isEqual(oldState, newState)).toBe(true)
})

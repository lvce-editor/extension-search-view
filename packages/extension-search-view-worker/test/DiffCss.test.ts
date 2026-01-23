import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DiffCss from '../src/parts/DiffCss/DiffCss.ts'

test('isEqual returns true when all CSS properties are equal', () => {
  const oldState = createDefaultState()
  const newState = createDefaultState()
  expect(DiffCss.isEqual(oldState, newState)).toBe(true)
})

test('isEqual returns false when scrollBarHeight differs', () => {
  const oldState = createDefaultState()
  const newState = {
    ...createDefaultState(),
    scrollBarHeight: 100,
  }
  expect(DiffCss.isEqual(oldState, newState)).toBe(false)
})

test('isEqual returns false when scrollBarY differs', () => {
  const oldState = createDefaultState()
  const newState = {
    ...createDefaultState(),
    scrollBarY: 50,
  }
  expect(DiffCss.isEqual(oldState, newState)).toBe(false)
})

test('isEqual returns false when initial differs', () => {
  const oldState = createDefaultState()
  const newState = {
    ...createDefaultState(),
    initial: true,
  }
  expect(DiffCss.isEqual(oldState, newState)).toBe(false)
})

test('isEqual returns false when deltaY differs', () => {
  const oldState = createDefaultState()
  const newState = {
    ...createDefaultState(),
    deltaY: 10,
  }
  expect(DiffCss.isEqual(oldState, newState)).toBe(false)
})

test('isEqual returns true when all properties are equal with non-default values', () => {
  const oldState = {
    ...createDefaultState(),
    deltaY: 20,
    initial: true,
    scrollBarHeight: 100,
    scrollBarY: 50,
  }
  const newState = {
    ...createDefaultState(),
    deltaY: 20,
    initial: true,
    scrollBarHeight: 100,
    scrollBarY: 50,
  }
  expect(DiffCss.isEqual(oldState, newState)).toBe(true)
})

test('isEqual returns false when multiple properties differ', () => {
  const oldState = {
    ...createDefaultState(),
    deltaY: 20,
    initial: true,
    scrollBarHeight: 100,
    scrollBarY: 50,
  }
  const newState = {
    ...createDefaultState(),
    deltaY: 30,
    initial: false,
    scrollBarHeight: 150,
    scrollBarY: 60,
  }
  expect(DiffCss.isEqual(oldState, newState)).toBe(false)
})

test('isEqual returns true when only non-CSS properties differ', () => {
  const oldState = {
    ...createDefaultState(),
    focus: 5,
    inputSource: 1,
    searchValue: 'test',
  }
  const newState = {
    ...createDefaultState(),
    focus: 10,
    inputSource: 2,
    searchValue: 'different',
  }
  expect(DiffCss.isEqual(oldState, newState)).toBe(true)
})

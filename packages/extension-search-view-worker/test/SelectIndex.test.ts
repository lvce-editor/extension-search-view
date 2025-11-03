import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { selectIndex } from '../src/parts/SelectIndex/SelectIndex.ts'

test('selectIndex sets focusedIndex to the provided index', () => {
  const state = createDefaultState()
  const result = selectIndex(state, 5)
  expect(result.focusedIndex).toBe(5)
})

test('selectIndex does not mutate the original state', () => {
  const state = createDefaultState()
  const originalFocusedIndex = state.focusedIndex
  selectIndex(state, 10)
  expect(state.focusedIndex).toBe(originalFocusedIndex)
})

test('selectIndex preserves all other state properties', () => {
  const state = createDefaultState()
  const result = selectIndex(state, 3)
  expect(result.allExtensions).toBe(state.allExtensions)
  expect(result.assetDir).toBe(state.assetDir)
  expect(result.deltaY).toBe(state.deltaY)
  expect(result.finalDeltaY).toBe(state.finalDeltaY)
  expect(result.focus).toBe(state.focus)
  expect(result.focused).toBe(state.focused)
  expect(result.handleOffset).toBe(state.handleOffset)
  expect(result.headerHeight).toBe(state.headerHeight)
  expect(result.height).toBe(state.height)
  expect(result.inputActions).toBe(state.inputActions)
  expect(result.inputSource).toBe(state.inputSource)
  expect(result.itemHeight).toBe(state.itemHeight)
  expect(result.items).toBe(state.items)
  expect(result.maxLineY).toBe(state.maxLineY)
  expect(result.message).toBe(state.message)
  expect(result.minimumSliderSize).toBe(state.minimumSliderSize)
  expect(result.minLineY).toBe(state.minLineY)
  expect(result.negativeMargin).toBe(state.negativeMargin)
  expect(result.placeholder).toBe(state.placeholder)
  expect(result.platform).toBe(state.platform)
  expect(result.scrollBarActive).toBe(state.scrollBarActive)
  expect(result.scrollBarHeight).toBe(state.scrollBarHeight)
  expect(result.scrollBarY).toBe(state.scrollBarY)
  expect(result.searchValue).toBe(state.searchValue)
  expect(result.size).toBe(state.size)
  expect(result.uid).toBe(state.uid)
  expect(result.width).toBe(state.width)
  expect(result.x).toBe(state.x)
  expect(result.y).toBe(state.y)
})

test('selectIndex handles index 0', () => {
  const state = createDefaultState()
  const result = selectIndex(state, 0)
  expect(result.focusedIndex).toBe(0)
})

test('selectIndex handles large index values', () => {
  const state = createDefaultState()
  const result = selectIndex(state, 1000)
  expect(result.focusedIndex).toBe(1000)
})

test('selectIndex handles negative index values', () => {
  const state = createDefaultState()
  const result = selectIndex(state, -5)
  expect(result.focusedIndex).toBe(-5)
})

test('selectIndex returns a new state object', () => {
  const state = createDefaultState()
  const result = selectIndex(state, 7)
  expect(result).not.toBe(state)
})

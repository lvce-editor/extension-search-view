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
  const { focusedIndex: originalFocusedIndex } = state
  selectIndex(state, 10)
  const { focusedIndex } = state
  expect(focusedIndex).toBe(originalFocusedIndex)
})

test('selectIndex preserves all other state properties', () => {
  const state = createDefaultState()
  const {
    allExtensions,
    assetDir,
    deltaY,
    finalDeltaY,
    focus,
    focused,
    handleOffset,
    headerHeight,
    height,
    inputActions,
    inputSource,
    itemHeight,
    items,
    maxLineY,
    message,
    minimumSliderSize,
    minLineY,
    negativeMargin,
    placeholder,
    platform,
    scrollBarActive,
    scrollBarHeight,
    scrollBarY,
    searchValue,
    size,
    uid,
    width,
    x,
    y,
  } = state
  const result = selectIndex(state, 3)
  expect(result.allExtensions).toBe(allExtensions)
  expect(result.assetDir).toBe(assetDir)
  expect(result.deltaY).toBe(deltaY)
  expect(result.finalDeltaY).toBe(finalDeltaY)
  expect(result.focus).toBe(focus)
  expect(result.focused).toBe(focused)
  expect(result.handleOffset).toBe(handleOffset)
  expect(result.headerHeight).toBe(headerHeight)
  expect(result.height).toBe(height)
  expect(result.inputActions).toBe(inputActions)
  expect(result.inputSource).toBe(inputSource)
  expect(result.itemHeight).toBe(itemHeight)
  expect(result.items).toBe(items)
  expect(result.maxLineY).toBe(maxLineY)
  expect(result.message).toBe(message)
  expect(result.minimumSliderSize).toBe(minimumSliderSize)
  expect(result.minLineY).toBe(minLineY)
  expect(result.negativeMargin).toBe(negativeMargin)
  expect(result.placeholder).toBe(placeholder)
  expect(result.platform).toBe(platform)
  expect(result.scrollBarActive).toBe(scrollBarActive)
  expect(result.scrollBarHeight).toBe(scrollBarHeight)
  expect(result.scrollBarY).toBe(scrollBarY)
  expect(result.searchValue).toBe(searchValue)
  expect(result.size).toBe(size)
  expect(result.uid).toBe(uid)
  expect(result.width).toBe(width)
  expect(result.x).toBe(x)
  expect(result.y).toBe(y)
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

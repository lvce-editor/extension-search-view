import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleScrollBarClick } from '../src/parts/HandleScrollBarClick/HandleScrollBarClick.ts'
import { setDeltaY } from '../src/parts/SetDeltaY/SetDeltaY.ts'

test('should set scrollBarActive and handleOffset when clicking within scrollbar handle', () => {
  let state = createDefaultState()
  state = {
    ...state,
    deltaY: 100,
    finalDeltaY: 1000,
    headerHeight: 50,
    height: 400,
    itemHeight: 40,
    items: Array(25).fill(null),
    scrollBarHeight: 40,
    y: 100,
  }
  state = setDeltaY(state, 100)

  const currentScrollBarY = (100 / 1000) * (350 - 40)
  const eventY = 100 + 50 + currentScrollBarY + 10

  const result = handleScrollBarClick(state, eventY)

  expect(result.scrollBarActive).toBe(true)
  expect(result.handleOffset).toBe(10)
})

test('should jump to top when clicking above scrollbar', () => {
  let state = createDefaultState()
  state = {
    ...state,
    deltaY: 500,
    finalDeltaY: 1000,
    headerHeight: 50,
    height: 400,
    itemHeight: 40,
    items: Array(25).fill(null),
    scrollBarHeight: 40,
    y: 100,
  }
  state = setDeltaY(state, 500)

  const eventY = 100 + 50 + 10

  const result = handleScrollBarClick(state, eventY)

  expect(result.scrollBarActive).toBe(true)
  expect(result.deltaY).toBe(0)
})

test('should jump to bottom when clicking below scrollbar', () => {
  let state = createDefaultState()
  state = {
    ...state,
    deltaY: 100,
    finalDeltaY: 1000,
    headerHeight: 50,
    height: 400,
    itemHeight: 40,
    items: Array(25).fill(null),
    scrollBarHeight: 40,
    y: 100,
  }
  state = setDeltaY(state, 100)

  const contentHeight = 400 - 50
  const eventY = 100 + 50 + contentHeight - 10

  const result = handleScrollBarClick(state, eventY)

  expect(result.scrollBarActive).toBe(true)
  expect(result.deltaY).toBe(1000)
})

test('should calculate appropriate position when clicking in middle area', () => {
  let state = createDefaultState()
  state = {
    ...state,
    deltaY: 100,
    finalDeltaY: 1000,
    headerHeight: 50,
    height: 400,
    itemHeight: 40,
    items: Array(25).fill(null),
    scrollBarHeight: 40,
    y: 100,
  }
  state = setDeltaY(state, 100)

  const contentHeight = 400 - 50
  const relativeY = 100
  const eventY = 100 + 50 + relativeY

  const result = handleScrollBarClick(state, eventY)

  expect(result.scrollBarActive).toBe(true)
  const expectedPercent = (relativeY - 20) / (contentHeight - 40)
  const expectedDeltaY = expectedPercent * 1000
  expect(result.deltaY).toBe(expectedDeltaY)
  expect(result.handleOffset).toBe(20)
})

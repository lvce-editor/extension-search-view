import { expect, test } from '@jest/globals'
import type { State } from '../src/parts/State/State.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleScrollBarMove } from '../src/parts/HandleScrollBarMove/HandleScrollBarMove.ts'

test('should calculate new deltaY when clicking in middle of scrollbar', () => {
  const state: State = {
    ...createDefaultState(),
    deltaY: 0,
    finalDeltaY: 1000,
    handleOffset: 0,
    headerHeight: 50,
    height: 500,
    itemHeight: 40,
    items: Array(25).fill(null),
    scrollBarActive: true,
    scrollBarHeight: 100,
    y: 10,
  }
  const eventY = 160 // relativeY = 160 - 10 - 50 - 0 = 100
  // contentHeight = 500 - 50 = 450
  // relativeY (100) <= contentHeight - scrollBarHeight / 2 (450 - 50 = 400), so middle case
  // newPercent = 100 / (450 - 100) = 100 / 350 ≈ 0.286
  // newDeltaY = 0.286 * 1000 ≈ 286

  const result = handleScrollBarMove(state, eventY)

  expect(result.deltaY).toBeCloseTo(286, 0)
})

test('should calculate new deltaY when clicking at bottom of scrollbar', () => {
  const state: State = {
    ...createDefaultState(),
    deltaY: 0,
    finalDeltaY: 1000,
    handleOffset: 0,
    headerHeight: 50,
    height: 500,
    itemHeight: 40,
    items: Array(25).fill(null),
    scrollBarActive: true,
    scrollBarHeight: 100,
    y: 10,
  }
  const eventY = 500 // relativeY = 500 - 10 - 50 - 0 = 440
  // contentHeight = 500 - 50 = 450
  // relativeY (440) > contentHeight - scrollBarHeight / 2 (450 - 50 = 400), so bottom case
  // newPercent = 1
  // newDeltaY = 1 * 1000 = 1000

  const result = handleScrollBarMove(state, eventY)

  expect(result.deltaY).toBe(1000)
})

test('should handle handleOffset correctly', () => {
  const state: State = {
    ...createDefaultState(),
    deltaY: 0,
    finalDeltaY: 1000,
    handleOffset: 20,
    headerHeight: 50,
    height: 500,
    itemHeight: 40,
    items: Array(25).fill(null),
    scrollBarActive: true,
    scrollBarHeight: 100,
    y: 10,
  }
  const eventY = 180 // relativeY = 180 - 10 - 50 - 20 = 100
  // contentHeight = 500 - 50 = 450
  // relativeY (100) <= contentHeight - scrollBarHeight / 2 (450 - 50 = 400), so middle case
  // newPercent = 100 / (450 - 100) = 100 / 350 ≈ 0.286
  // newDeltaY = 0.286 * 1000 ≈ 286

  const result = handleScrollBarMove(state, eventY)

  expect(result.deltaY).toBeCloseTo(286, 0)
})

test('should handle click at boundary between middle and bottom', () => {
  const state: State = {
    ...createDefaultState(),
    deltaY: 0,
    finalDeltaY: 1000,
    handleOffset: 0,
    headerHeight: 50,
    height: 500,
    itemHeight: 40,
    items: Array(25).fill(null),
    scrollBarActive: true,
    scrollBarHeight: 100,
    y: 0,
  }
  const eventY = 400 // relativeY = 400 - 0 - 50 - 0 = 350
  // contentHeight = 500 - 50 = 450
  // relativeY (350) <= contentHeight - scrollBarHeight / 2 (450 - 50 = 400), so middle case
  // newPercent = 350 / (450 - 100) = 350 / 350 = 1
  // newDeltaY = 1 * 1000 = 1000

  const result = handleScrollBarMove(state, eventY)

  expect(result.deltaY).toBe(1000)
})

test('should handle click just above boundary', () => {
  const state: State = {
    ...createDefaultState(),
    deltaY: 0,
    finalDeltaY: 1000,
    handleOffset: 0,
    headerHeight: 50,
    height: 500,
    itemHeight: 40,
    items: Array(25).fill(null),
    scrollBarActive: true,
    scrollBarHeight: 100,
    y: 0,
  }
  const eventY = 399 // relativeY = 399 - 0 - 50 - 0 = 349
  // contentHeight = 500 - 50 = 450
  // relativeY (349) <= contentHeight - scrollBarHeight / 2 (450 - 50 = 400), so middle case
  // newPercent = 349 / (450 - 100) = 349 / 350 ≈ 0.997
  // newDeltaY = 0.997 * 1000 ≈ 997

  const result = handleScrollBarMove(state, eventY)

  expect(result.deltaY).toBeCloseTo(997, 0)
})

test('should return same state when scrollBarActive is false', () => {
  const state: State = {
    ...createDefaultState(),
    deltaY: 100,
    finalDeltaY: 1000,
    headerHeight: 50,
    height: 500,
    itemHeight: 40,
    items: Array(25).fill(null),
    scrollBarActive: false,
    scrollBarHeight: 100,
    y: 10,
  }

  const result = handleScrollBarMove(state, 160)

  expect(result).toBe(state)
})

test('should handle click at top of scrollbar', () => {
  const state: State = {
    ...createDefaultState(),
    deltaY: 0,
    finalDeltaY: 1000,
    handleOffset: 0,
    headerHeight: 50,
    height: 500,
    itemHeight: 40,
    items: Array(25).fill(null),
    scrollBarActive: true,
    scrollBarHeight: 100,
    y: 10,
  }
  const eventY = 60 // relativeY = 60 - 10 - 50 - 0 = 0
  // contentHeight = 500 - 50 = 450
  // relativeY (0) <= contentHeight - scrollBarHeight / 2 (450 - 50 = 400), so middle case
  // newPercent = 0 / (450 - 100) = 0 / 350 = 0
  // newDeltaY = 0 * 1000 = 0

  const result = handleScrollBarMove(state, eventY)

  expect(result.deltaY).toBe(0)
})

test('should handle negative relativeY (click above content area)', () => {
  const state: State = {
    ...createDefaultState(),
    deltaY: 0,
    finalDeltaY: 1000,
    handleOffset: 0,
    headerHeight: 50,
    height: 500,
    itemHeight: 40,
    items: Array(25).fill(null),
    scrollBarActive: true,
    scrollBarHeight: 100,
    y: 10,
  }
  const eventY = 50 // relativeY = 50 - 10 - 50 - 0 = -10
  // contentHeight = 500 - 50 = 450
  // relativeY (-10) <= contentHeight - scrollBarHeight / 2 (450 - 50 = 400), so middle case
  // newPercent = -10 / (450 - 100) = -10 / 350 ≈ -0.029
  // newDeltaY = -0.029 * 1000 ≈ -29 (but setDeltaY will clamp to 0)

  const result = handleScrollBarMove(state, eventY)

  expect(result.deltaY).toBe(0)
})

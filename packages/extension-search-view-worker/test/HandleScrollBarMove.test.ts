import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleScrollBarMove } from '../src/parts/HandleScrollBarMove/HandleScrollBarMove.ts'
import { setDeltaY } from '../src/parts/SetDeltaY/SetDeltaY.ts'

test.skip('should calculate new deltaY when clicking in middle of scrollbar', () => {
  const state = setDeltaY(
    {
      ...createDefaultState(),
      finalDeltaY: 1000,
      handleOffset: 0,
      headerHeight: 50,
      height: 500,
      itemHeight: 40,
      items: Array(25).fill(null),
      scrollBarHeight: 100,
      y: 10,
    },
    0,
  )
  const eventY = 160 // relativeY = 160 - 10 - 50 - 0 = 100
  // contentHeight = 500 - 50 = 450
  // relativeY (100) <= contentHeight - scrollBarHeight / 2 (450 - 50 = 400), so middle case
  // newPercent = 100 / (450 - 100) = 100 / 350 ≈ 0.286
  // newDeltaY = 0.286 * 1000 ≈ 286

  const result = handleScrollBarMove(state, eventY)

  expect(result.deltaY).toBeCloseTo(286, 0)
})

test.skip('should calculate new deltaY when clicking at bottom of scrollbar', () => {
  const state = setDeltaY(
    {
      ...createDefaultState(),
      finalDeltaY: 1000,
      handleOffset: 0,
      headerHeight: 50,
      height: 500,
      itemHeight: 40,
      items: Array(25).fill(null),
      scrollBarHeight: 100,
      y: 10,
    },
    0,
  )
  const eventY = 500 // relativeY = 500 - 10 - 50 - 0 = 440
  // contentHeight = 500 - 50 = 450
  // relativeY (440) > contentHeight - scrollBarHeight / 2 (450 - 50 = 400), so bottom case
  // newPercent = 1
  // newDeltaY = 1 * 1000 = 1000

  const result = handleScrollBarMove(state, eventY)

  expect(result.deltaY).toBe(1000)
})

test.skip('should handle handleOffset correctly', () => {
  const state = setDeltaY(
    {
      ...createDefaultState(),
      finalDeltaY: 1000,
      handleOffset: 20,
      headerHeight: 50,
      height: 500,
      itemHeight: 40,
      items: Array(25).fill(null),
      scrollBarHeight: 100,
      y: 10,
    },
    0,
  )
  const eventY = 180 // relativeY = 180 - 10 - 50 - 20 = 100
  // contentHeight = 500 - 50 = 450
  // relativeY (100) <= contentHeight - scrollBarHeight / 2 (450 - 50 = 400), so middle case
  // newPercent = 100 / (450 - 100) = 100 / 350 ≈ 0.286
  // newDeltaY = 0.286 * 1000 ≈ 286

  const result = handleScrollBarMove(state, eventY)

  expect(result.deltaY).toBeCloseTo(286, 0)
})

test.skip('should handle click at boundary between middle and bottom', () => {
  const state = setDeltaY(
    {
      ...createDefaultState(),
      finalDeltaY: 1000,
      handleOffset: 0,
      headerHeight: 50,
      height: 500,
      itemHeight: 40,
      items: Array(25).fill(null),
      scrollBarHeight: 100,
      y: 0,
    },
    0,
  )
  const eventY = 400 // relativeY = 400 - 0 - 50 - 0 = 350
  // contentHeight = 500 - 50 = 450
  // relativeY (350) <= contentHeight - scrollBarHeight / 2 (450 - 50 = 400), so middle case
  // newPercent = 350 / (450 - 100) = 350 / 350 = 1
  // newDeltaY = 1 * 1000 = 1000

  const result = handleScrollBarMove(state, eventY)

  expect(result.deltaY).toBe(1000)
})

test.skip('should handle click just above boundary', () => {
  const state = setDeltaY(
    {
      ...createDefaultState(),
      finalDeltaY: 1000,
      handleOffset: 0,
      headerHeight: 50,
      height: 500,
      itemHeight: 40,
      items: Array(25).fill(null),
      scrollBarHeight: 100,
      y: 0,
    },
    0,
  )
  const eventY = 399 // relativeY = 399 - 0 - 50 - 0 = 349
  // contentHeight = 500 - 50 = 450
  // relativeY (349) <= contentHeight - scrollBarHeight / 2 (450 - 50 = 400), so middle case
  // newPercent = 349 / (450 - 100) = 349 / 350 ≈ 0.997
  // newDeltaY = 0.997 * 1000 ≈ 997

  const result = handleScrollBarMove(state, eventY)

  expect(result.deltaY).toBeCloseTo(997, 0)
})

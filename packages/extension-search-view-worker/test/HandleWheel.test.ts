import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleWheel } from '../src/parts/HandleWheel/HandleWheel.ts'
import { setDeltaY } from '../src/parts/SetDeltaY/SetDeltaY.ts'

test('handleWheel should update deltaY', () => {
  const state = setDeltaY(
    {
      ...createDefaultState(),
      finalDeltaY: 1000,
      height: 400,
      itemHeight: 40,
      items: Array(25).fill(null),
    },
    10,
  )
  const deltaMode = 0
  const deltaY = 5

  const result = handleWheel(state, deltaMode, deltaY)
  expect(result.deltaY).toBe(15)
})

test('handleWheel should handle negative deltaY', () => {
  const state = setDeltaY(
    {
      ...createDefaultState(),
      finalDeltaY: 1000,
      height: 400,
      itemHeight: 40,
      items: Array(25).fill(null),
    },
    10,
  )
  const deltaMode = 0
  const deltaY = -3

  const result = handleWheel(state, deltaMode, deltaY)
  expect(result.deltaY).toBe(7)
})

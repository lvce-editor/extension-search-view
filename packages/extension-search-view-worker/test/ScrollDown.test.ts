import { test, expect } from '@jest/globals'
import * as ScrollDown from '../src/parts/ScrollDown/ScrollDown.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

test('scrollDown', () => {
  const state = {
    ...createDefaultState(),
    deltaY: 0,
    finalDeltaY: 100,
  }
  const result = ScrollDown.scrollDown(state)
  expect(result.deltaY).toBe(20)
})

test('scrollDown should not exceed finalDeltaY', () => {
  const state = {
    ...createDefaultState(),
    deltaY: 90,
    finalDeltaY: 100,
  }
  const result = ScrollDown.scrollDown(state)
  expect(result.deltaY).toBe(100)
})

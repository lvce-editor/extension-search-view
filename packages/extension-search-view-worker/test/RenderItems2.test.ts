import { expect, test } from '@jest/globals'
import type { State } from '../src/parts/State/State.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { renderItems2 } from '../src/parts/RenderItems2/RenderItems2.ts'

test('renderItems2 returns Viewlet.setDom2 command with uid and virtual dom', () => {
  const state: State = createDefaultState()
  const result = renderItems2(state)
  expect(result).toEqual(['Viewlet.setDom2', state.uid, expect.any(Array)])
})

test('renderItems2 returns correct uid when state has custom uid', () => {
  const state: State = { ...createDefaultState(), uid: 123 }
  const result = renderItems2(state)
  expect(result).toEqual(['Viewlet.setDom2', 123, expect.any(Array)])
})

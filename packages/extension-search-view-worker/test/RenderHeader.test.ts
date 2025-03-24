import { expect, test } from '@jest/globals'
import type { State } from '../src/parts/State/State.ts'
import * as RenderHeader from '../src/parts/RenderHeader/RenderHeader.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

test('renderHeader returns correct header dom with actions', () => {
  const state: State = {
    ...createDefaultState(),
  }
  const result = RenderHeader.renderHeader(state)
  expect(result[0]).toBe('setHeaderDom')
  expect(result[1]).toBeDefined()
})

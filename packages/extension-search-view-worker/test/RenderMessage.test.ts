import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { renderMessage } from '../src/parts/RenderMessage/RenderMessage.ts'
import * as RenderMethod from '../src/parts/RenderMethod/RenderMethod.ts'

test('renderMessage returns array with SetMessage method and state message', () => {
  const state = createDefaultState()
  const result = renderMessage(state)
  expect(result).toEqual([RenderMethod.SetMessage, state.message])
})

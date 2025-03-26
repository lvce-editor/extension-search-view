import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { renderItems } from '../src/parts/RenderItems/RenderItems.ts'

test('renderItems returns setExtensionsDom command with virtual dom', () => {
  const state = createDefaultState()
  const result = renderItems(state)
  expect(result).toEqual(['setExtensionsDom', expect.any(Object)])
})

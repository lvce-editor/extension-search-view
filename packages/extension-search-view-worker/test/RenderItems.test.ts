import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FocusId from '../src/parts/FocusId/FocusId.ts'
import { renderItems } from '../src/parts/RenderItems/RenderItems.ts'

test('renderItems returns setExtensionsDom command with virtual dom', () => {
  const state = createDefaultState()
  const result = renderItems(state)
  expect(result).toEqual(['setExtensionsDom', expect.any(Object)])
})

test('renderItems renders list focus outline without a focused item', () => {
  const state = { ...createDefaultState(), focus: FocusId.List, focusedIndex: -1 }
  const result = renderItems(state)
  expect(result).toEqual(['setExtensionsDom', expect.any(Object)])
})

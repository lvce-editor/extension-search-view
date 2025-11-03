import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FocusId from '../src/parts/FocusId/FocusId.ts'
import { renderFocusContext } from '../src/parts/RenderFocusContext/RenderFocusContext.ts'
import * as WhenExpression from '../src/parts/WhenExpression/WhenExpression.ts'

test('returns empty array when focus is None', () => {
  const state = {
    ...createDefaultState(),
    focus: FocusId.None,
    uid: 123,
  }
  const result = renderFocusContext(state)
  expect(result).toEqual([])
})

test('returns Viewlet.setFocusContext with FocusExtensionsInput when focus is Input', () => {
  const state = {
    ...createDefaultState(),
    focus: FocusId.Input,
    uid: 456,
  }
  const result = renderFocusContext(state)
  expect(result).toEqual(['Viewlet.setFocusContext', 456, WhenExpression.FocusExtensionsInput])
})

test('returns Viewlet.setFocusContext with FocusExtensions when focus is List', () => {
  const state = {
    ...createDefaultState(),
    focus: FocusId.List,
    uid: 789,
  }
  const result = renderFocusContext(state)
  expect(result).toEqual(['Viewlet.setFocusContext', 789, WhenExpression.FocusExtensions])
})

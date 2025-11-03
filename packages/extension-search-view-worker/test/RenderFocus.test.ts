import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FocusId from '../src/parts/FocusId/FocusId.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'
import * as RenderFocus from '../src/parts/RenderFocus/RenderFocus.ts'

test('returns empty array when focus is None', () => {
  const state = {
    ...createDefaultState(),
    focus: FocusId.None,
    uid: 1,
  }
  const result = RenderFocus.renderFocus(state)
  expect(result).toEqual([])
})

test('returns empty array when focus is 0', () => {
  const state = {
    ...createDefaultState(),
    focus: 0,
    uid: 1,
  }
  const result = RenderFocus.renderFocus(state)
  expect(result).toEqual([])
})

test('returns focus selector command for Input focus', () => {
  const state = {
    ...createDefaultState(),
    focus: FocusId.Input,
    uid: 1,
  }
  const result = RenderFocus.renderFocus(state)
  expect(result).toEqual(['Viewlet.focusSelector', 1, `[name="${InputName.Extensions}"]`])
})

test('returns focus selector command for List focus', () => {
  const state = {
    ...createDefaultState(),
    focus: FocusId.List,
    uid: 2,
  }
  const result = RenderFocus.renderFocus(state)
  expect(result).toEqual(['Viewlet.focusSelector', 2, '.ListItems'])
})

test('returns focus selector command with different uid', () => {
  const state = {
    ...createDefaultState(),
    focus: FocusId.Input,
    uid: 5,
  }
  const result = RenderFocus.renderFocus(state)
  expect(result).toEqual(['Viewlet.focusSelector', 5, `[name="${InputName.Extensions}"]`])
})

test('returns focus selector command with empty selector for invalid focus value', () => {
  const state = {
    ...createDefaultState(),
    focus: 99,
    uid: 3,
  }
  const result = RenderFocus.renderFocus(state)
  expect(result).toEqual(['Viewlet.focusSelector', 3, ''])
})

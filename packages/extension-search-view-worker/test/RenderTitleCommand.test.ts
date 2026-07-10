import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as RenderTitleCommand from '../src/parts/RenderTitleCommand/RenderTitleCommand.ts'

test('renders the title into the parent view', () => {
  const state = {
    ...createDefaultState(),
    parentUid: 42,
    searchValue: '@deprecated',
  }
  expect(RenderTitleCommand.renderTitleCommand(state)).toEqual(['Viewlet.send', 42, 'setTitle', 'Extensions: Deprecated'])
})

test('does not render a title when there is no parent view', () => {
  const state = {
    ...createDefaultState(),
    parentUid: undefined,
    searchValue: '@deprecated',
  }
  expect(RenderTitleCommand.renderTitleCommand(state)).toEqual([])
})

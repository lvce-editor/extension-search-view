import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as RenderTitle from '../src/parts/RenderTitle/RenderTitle.ts'

test.each([
  ['', 'Extensions: Installed'],
  [' '.repeat(3), 'Extensions: Installed'],
  ['@installed', 'Extensions: Installed'],
  ['@enabled', 'Extensions: Enabled'],
  ['@disabled', 'Extensions: Disabled'],
  ['@builtin', 'Extensions: Built-in'],
  ['@outdated', 'Extensions: Updates'],
  ['@featured', 'Extensions: Featured'],
  ['@mcpservers', 'Extensions: MCP Servers'],
  ['@mostpopular', 'Extensions: Most Popular'],
  ['@recentlypublished', 'Extensions: Recently Published'],
  ['@recommended', 'Extensions: Recommended'],
  ['@workspaceunsupported', 'Extensions: Workspace Unsupported'],
  ['@deprecated', 'Extensions: Deprecated'],
  ['@DEPRECATED', 'Extensions: Deprecated'],
  ['python', 'Extensions: Marketplace'],
])('renderTitle(%s)', (searchValue, expected) => {
  const state = {
    ...createDefaultState(),
    searchValue,
  }
  expect(RenderTitle.renderTitle(state)).toBe(expected)
})

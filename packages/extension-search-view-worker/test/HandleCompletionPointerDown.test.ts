import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleCompletionPointerDown } from '../src/parts/HandleCompletionPointerDown/HandleCompletionPointerDown.ts'

test('accepts pointer completion', async () => {
  const state = {
    ...createDefaultState(),
    completionItems: [{ highlights: [0, 1], label: '@enabled' }],
    cursorOffset: 1,
    searchValue: '@',
    suggestOpen: true,
  }
  const result = await handleCompletionPointerDown(state, '@enabled')
  expect(result.searchValue).toBe('@enabled')
  expect(result.suggestOpen).toBe(false)
})

test('ignores pointer outside completion items', async () => {
  const state = { ...createDefaultState(), cursorOffset: 1, searchValue: '@', suggestOpen: true }
  await expect(handleCompletionPointerDown(state, 'extensions')).resolves.toBe(state)
})

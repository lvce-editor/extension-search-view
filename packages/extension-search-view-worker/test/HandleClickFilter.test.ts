import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleClickFilter } from '../src/parts/HandleClickFilter/HandleClickFilter.ts'

test('returns state unchanged', async () => {
  const state = createDefaultState()
  const result = await handleClickFilter(state)
  expect(result).toBe(state)
})

test('returns state with modified searchValue unchanged', async () => {
  const state = {
    ...createDefaultState(),
    searchValue: 'test search',
  }
  const result = await handleClickFilter(state)
  expect(result).toBe(state)
})

test('returns state with items unchanged', async () => {
  const state = {
    ...createDefaultState(),
    items: [
      {
        name: 'Test Extension',
        id: 'test-extension',
        publisher: 'test-publisher',
        icon: 'test-icon',
        description: 'test-description',
        uri: 'test-uri',
      },
    ],
  }
  const result = await handleClickFilter(state)
  expect(result).toBe(state)
})

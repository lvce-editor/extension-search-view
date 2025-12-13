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
        categories: [],
        description: 'test-description',
        icon: 'test-icon',
        id: 'test-extension',
        name: 'Test Extension',
        publisher: 'test-publisher',
        uri: 'test-uri',
      },
    ],
  }
  const result = await handleClickFilter(state)
  expect(result).toBe(state)
})

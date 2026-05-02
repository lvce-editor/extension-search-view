import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.js'
import * as ViewletExtensionsStrings from '../src/parts/ExtensionStrings/ExtensionStrings.js'
import { handleInput } from '../src/parts/HandleInput/HandleInput.js'
import { Remote } from '../src/parts/PlatformType/PlatformType.js'

const mockExtensions = [
  {
    categories: [],
    description: 'test-description',
    icon: 'test-icon',
    id: 'test-extension',
    name: 'Test Extension',
    publisher: 'test-publisher',
    size: 1000,
    updatedDate: 1_000_000,
    uri: 'test-uri',
  },
]

test('handles empty search results', async () => {
  const state = { ...createDefaultState(), allExtensions: mockExtensions, platform: Remote }
  const result = await handleInput(state, 'nonexistent')

  expect(result.items).toHaveLength(0)
  expect(result.message).toBe(ViewletExtensionsStrings.noExtensionsFound())
  expect(result.searchValue).toBe('nonexistent')
  expect(result.placeholder).toBe(ViewletExtensionsStrings.searchExtensionsInMarketPlace())
})

test('handles successful search', async () => {
  const state = { ...createDefaultState(), allExtensions: mockExtensions, platform: Remote }
  const result = await handleInput(state, 'test')

  expect(result.message).toBe('')
  expect(result.searchValue).toBe('test')
  expect(result.placeholder).toBe(ViewletExtensionsStrings.searchExtensionsInMarketPlace())
})

test('handles error during search', async () => {
  const invalidExtensions = [
    {
      ...mockExtensions[0],
      get name(): string {
        throw new Error('error')
      },
    },
  ]
  const state = { ...createDefaultState(), allExtensions: invalidExtensions as any, platform: Remote }
  const result = await handleInput(state, 'test')

  expect(result.message).toBe('Failed to search for extensions: error')
  expect(result.searchValue).toBe('test')
})

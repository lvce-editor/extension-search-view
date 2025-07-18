import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.js'
import * as ViewletExtensionsStrings from '../src/parts/ExtensionStrings/ExtensionStrings.js'
import { handleInput } from '../src/parts/HandleInput/HandleInput.js'
import { Remote } from '../src/parts/PlatformType/PlatformType.js'
import * as RendererWorker from '../src/parts/RendererWorker/RendererWorker.ts'
import { VError } from '../src/parts/VError/VError.js'

const mockExtensions = [
  { name: 'Test Extension', id: 'test-extension', publisher: 'test-publisher', icon: 'test-icon', description: 'test-description', uri: 'test-uri' },
]

const mockRpc = {
  async invoke(method: string, ...args: readonly any[]) {
    if (method === 'ExtensionManagement.getAllExtensions') {
      return mockExtensions
    }
    return undefined
  },
} as any

test('handles empty search results', async () => {
  const state = { ...createDefaultState(), platform: Remote, allExtensions: [] }
  RendererWorker.set(mockRpc)
  const result = await handleInput(state, 'nonexistent')

  expect(result.items).toHaveLength(0)
  expect(result.message).toBe(ViewletExtensionsStrings.noExtensionsFound())
  expect(result.searchValue).toBe('nonexistent')
  expect(result.placeholder).toBe(ViewletExtensionsStrings.searchExtensionsInMarketPlace())
})

test('handles successful search', async () => {
  const state = { ...createDefaultState(), platform: Remote, allExtensions: mockExtensions }
  RendererWorker.set(mockRpc)
  const result = await handleInput(state, 'test')

  expect(result.message).toBe('')
  expect(result.searchValue).toBe('test')
  expect(result.placeholder).toBe(ViewletExtensionsStrings.searchExtensionsInMarketPlace())
})

test.skip('handles error during search', async () => {
  const errorRpc = {
    async invoke(method: string, ...args: readonly any[]) {
      if (method === 'ExtensionManagement.getAllExtensions') {
        throw new VError(new Error('error'), 'Failed to search for extensions')
      }
      return undefined
    },
  } as any

  const state = { ...createDefaultState(), platform: Remote, allExtensions: mockExtensions }
  RendererWorker.set(errorRpc)
  const result = await handleInput(state, 'test')
  expect(result.message).toBe('Failed to search for extensions: error')
  expect(result.searchValue).toBe('test')
})

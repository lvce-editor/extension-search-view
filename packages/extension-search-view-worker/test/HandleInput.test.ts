import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.js'
import * as ViewletExtensionsStrings from '../src/parts/ExtensionStrings/ExtensionStrings.js'
import { handleInput } from '../src/parts/HandleInput/HandleInput.js'
import { Remote } from '../src/parts/PlatformType/PlatformType.js'
import { RendererWorker } from '../src/parts/RpcId/RpcId.js'
import * as RpcRegistry from '../src/parts/RpcRegistry/RpcRegistry.js'

const mockExtensions = [
  { name: 'Test Extension', id: 'test-extension', publisher: 'test-publisher', icon: 'test-icon', description: 'test-description', uri: 'test-uri' },
]

const mockRpc = {
  async invoke(method: string, ...args: any[]) {
    if (method === 'ExtensionManagement.getAllExtensions') {
      return mockExtensions
    }
    return undefined
  },
} as any

test('handles empty search results', async () => {
  const state = { ...createDefaultState(), platform: Remote, allExtensions: [] }
  RpcRegistry.set(RendererWorker, mockRpc)
  const result = await handleInput(state, 'nonexistent')

  expect(result.items).toHaveLength(0)
  expect(result.message).toBe(ViewletExtensionsStrings.noExtensionsFound())
  expect(result.searchValue).toBe('nonexistent')
  expect(result.placeholder).toBe(ViewletExtensionsStrings.searchExtensionsInMarketPlace())
})

test('handles successful search', async () => {
  const state = { ...createDefaultState(), platform: Remote, allExtensions: mockExtensions }
  RpcRegistry.set(RendererWorker, mockRpc)
  const result = await handleInput(state, 'test')

  expect(result.message).toBe('')
  expect(result.searchValue).toBe('test')
  expect(result.placeholder).toBe(ViewletExtensionsStrings.searchExtensionsInMarketPlace())
})

test('handles error during search', async () => {
  const state = { ...createDefaultState(), platform: Remote, allExtensions: mockExtensions }
  RpcRegistry.set(RendererWorker, mockRpc)
  const result = await handleInput(state, 'error')

  expect(result.message).toBe('error')
  expect(result.searchValue).toBe('error')
})

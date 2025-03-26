import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.js'
import * as ViewletExtensionsStrings from '../src/parts/ExtensionStrings/ExtensionStrings.js'
import { handleInput } from '../src/parts/HandleInput/HandleInput.js'
import { Remote } from '../src/parts/PlatformType/PlatformType.js'
import { RendererWorker } from '../src/parts/RpcId/RpcId.js'
import * as RpcRegistry from '../src/parts/RpcRegistry/RpcRegistry.js'

const mockRpc = {
  async invoke(method: string, ...args: any[]) {
    if (method === 'searchExtensions') {
      const query = args[0]
      if (query === 'nonexistent') {
        return []
      }
      if (query === 'error') {
        throw new Error('error')
      }
      return [{ name: 'Test Extension', id: 'test-extension' }]
    }
    return undefined
  },
} as any

test('handles empty search results', async () => {
  const state = { ...createDefaultState(), platform: Remote }
  RpcRegistry.set(RendererWorker, mockRpc)
  const result = await handleInput(state, 'nonexistent')

  expect(result.items).toHaveLength(0)
  expect(result.message).toBe(ViewletExtensionsStrings.noExtensionsFound())
  expect(result.searchValue).toBe('nonexistent')
  expect(result.placeholder).toBe(ViewletExtensionsStrings.searchExtensionsInMarketPlace())
})

test.skip('handles successful search', async () => {
  const state = { ...createDefaultState(), platform: Remote }
  RpcRegistry.set(RendererWorker, mockRpc)
  const result = await handleInput(state, 'test')

  expect(result.message).toBe('')
  expect(result.searchValue).toBe('test')
  expect(result.placeholder).toBe(ViewletExtensionsStrings.searchExtensionsInMarketPlace())
})

test.skip('handles error during search', async () => {
  const state = { ...createDefaultState(), platform: Remote }
  RpcRegistry.set(RendererWorker, mockRpc)
  const result = await handleInput(state, 'error')

  expect(result.message).toBe('error')
  expect(result.searchValue).toBe('error')
})

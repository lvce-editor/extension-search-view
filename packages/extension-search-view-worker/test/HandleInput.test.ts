import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.js'
import * as ViewletExtensionsStrings from '../src/parts/ExtensionStrings/ExtensionStrings.js'
import { handleInput } from '../src/parts/HandleInput/HandleInput.js'
import { Remote } from '../src/parts/PlatformType/PlatformType.js'
import { VError } from '../src/parts/VError/VError.js'

const mockExtensions = [
  {
    categories: [],
    description: 'test-description',
    icon: 'test-icon',
    id: 'test-extension',
    name: 'Test Extension',
    publisher: 'test-publisher',
    size: 1000,
    updatedDate: 1000000,
    uri: 'test-uri',
  },
]

test('handles empty search results', async () => {
  RendererWorker.registerMockRpc({
    'ExtensionManagement.getAllExtensions'() {
      return mockExtensions
    },
  })
  const state = { ...createDefaultState(), allExtensions: [], platform: Remote }
  // rpc mock registered above
  const result = await handleInput(state, 'nonexistent')

  expect(result.items).toHaveLength(0)
  expect(result.message).toBe(ViewletExtensionsStrings.noExtensionsFound())
  expect(result.searchValue).toBe('nonexistent')
  expect(result.placeholder).toBe(ViewletExtensionsStrings.searchExtensionsInMarketPlace())
})

test('handles successful search', async () => {
  RendererWorker.registerMockRpc({
    'ExtensionManagement.getAllExtensions'() {
      return mockExtensions
    },
  })
  const state = { ...createDefaultState(), allExtensions: mockExtensions, platform: Remote }
  // rpc mock registered above
  const result = await handleInput(state, 'test')

  expect(result.message).toBe('')
  expect(result.searchValue).toBe('test')
  expect(result.placeholder).toBe(ViewletExtensionsStrings.searchExtensionsInMarketPlace())
})

test.skip('handles error during search', async () => {
  RendererWorker.registerMockRpc({
    'ExtensionManagement.getAllExtensions'() {
      throw new VError(new Error('error'), 'Failed to search for extensions')
    },
  })

  const state = { ...createDefaultState(), allExtensions: mockExtensions, platform: Remote }
  // error rpc mock registered above
  const result = await handleInput(state, 'test')
  expect(result.message).toBe('Failed to search for extensions: error')
  expect(result.searchValue).toBe('test')
})

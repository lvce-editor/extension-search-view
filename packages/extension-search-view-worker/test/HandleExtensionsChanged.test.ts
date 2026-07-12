import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { State } from '../src/parts/State/State.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleExtensionsChanged } from '../src/parts/HandleExtensionsChanged/HandleExtensionsChanged.ts'
import { Remote } from '../src/parts/PlatformType/PlatformType.ts'

test('handleExtensionsChanged reloads extensions and reapplies the current search', async () => {
  RendererWorker.registerMockRpc({
    'ExtensionManagement.getAllExtensions'() {
      return [
        {
          description: 'Added dynamically',
          id: 'test.dynamic-extension',
          name: 'Dynamic Extension',
          publisher: 'test',
        },
      ]
    },
  })
  const state: State = {
    ...createDefaultState(),
    allExtensions: [],
    assetDir: '/assets',
    items: [],
    platform: Remote,
    searchValue: '@id:test.dynamic-extension',
    width: 500,
  }

  const result = await handleExtensionsChanged(state)

  expect(result.searchValue).toBe('@id:test.dynamic-extension')
  expect(result.allExtensions).toHaveLength(1)
  expect(result.items).toHaveLength(1)
  expect(result.items[0].id).toBe('test.dynamic-extension')
})

import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { ExtensionListItem } from '../src/parts/ExtensionListItem/ExtensionListItem.ts'
import { copyExtensionId } from '../src/parts/CopyExtensionId/CopyExtensionId.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

test('copyExtensionId copies extension id to clipboard when item is focused', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'ClipBoard.writeText'() {},
  })
  const state = createDefaultState()
  const item: ExtensionListItem = {
    categories: [],
    description: 'Test description',
    icon: 'icon.png',
    id: 'test-extension-id',
    name: 'Test Extension',
    publisher: 'test-publisher',
    uri: 'test-uri',
  }
  const stateWithItem = {
    ...state,
    focusedIndex: 0,
    items: [item],
  }
  const result = await copyExtensionId(stateWithItem)
  expect(result).toBe(stateWithItem)
  expect(mockRpc.invocations).toEqual([['ClipBoard.writeText', 'test-extension-id']])
})

test('copyExtensionId returns state unchanged when no item is focused', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'ClipBoard.writeText'() {},
  })
  const state = createDefaultState()
  const stateWithNoFocus = {
    ...state,
    focusedIndex: -1,
  }
  const result = await copyExtensionId(stateWithNoFocus)
  expect(result).toBe(stateWithNoFocus)
  expect(mockRpc.invocations).toEqual([])
})

test('copyExtensionId returns state unchanged when items array is empty', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'ClipBoard.writeText'() {},
  })
  const state = createDefaultState()
  const stateWithEmptyItems = {
    ...state,
    focusedIndex: 0,
    items: [],
  }
  const result = await copyExtensionId(stateWithEmptyItems)
  expect(result).toBe(stateWithEmptyItems)
  expect(mockRpc.invocations).toEqual([])
})

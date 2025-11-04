import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { ExtensionListItem } from '../src/parts/ExtensionListItem/ExtensionListItem.ts'
import { copyExtensionId } from '../src/parts/CopyExtensionId/CopyExtensionId.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

test('copyExtensionId copies extension id to clipboard when item is focused', async () => {
  const mockRpc = RendererWorker.registerMockRpc({
    'ClipBoard.writeText'() {},
  })
  const state = createDefaultState()
  const item: ExtensionListItem = {
    name: 'Test Extension',
    id: 'test-extension-id',
    publisher: 'test-publisher',
    icon: 'icon.png',
    description: 'Test description',
    uri: 'test-uri',
    categories: [],
  }
  const stateWithItem = {
    ...state,
    items: [item],
    focusedIndex: 0,
  }
  const result = await copyExtensionId(stateWithItem)
  expect(result).toBe(stateWithItem)
  expect(mockRpc.invocations).toEqual([['ClipBoard.writeText', 'test-extension-id']])
})

test('copyExtensionId returns state unchanged when no item is focused', async () => {
  const mockRpc = RendererWorker.registerMockRpc({
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
  const mockRpc = RendererWorker.registerMockRpc({
    'ClipBoard.writeText'() {},
  })
  const state = createDefaultState()
  const stateWithEmptyItems = {
    ...state,
    items: [],
    focusedIndex: 0,
  }
  const result = await copyExtensionId(stateWithEmptyItems)
  expect(result).toBe(stateWithEmptyItems)
  expect(mockRpc.invocations).toEqual([])
})

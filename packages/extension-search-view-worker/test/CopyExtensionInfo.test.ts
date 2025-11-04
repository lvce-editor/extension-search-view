import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { ExtensionListItem } from '../src/parts/ExtensionListItem/ExtensionListItem.ts'
import * as CopyExtensionInfo from '../src/parts/CopyExtensionInfo/CopyExtensionInfo.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

const mockItem: ExtensionListItem = {
  name: 'Test Extension',
  id: 'test.extension',
  publisher: 'Test Publisher',
  icon: 'icon.png',
  description: 'A test extension',
  uri: 'https://example.com',
  categories: [],
}

test('copyExtensionInfo returns state unchanged when no focused item', async () => {
  const state = {
    ...createDefaultState(),
    focusedIndex: -1,
    items: [],
  }
  const mockRpc = RendererWorker.registerMockRpc({
    'ClipBoard.writeText'() {},
  })
  const result = await CopyExtensionInfo.copyExtensionInfo(state)
  expect(result).toBe(state)
  expect(mockRpc.invocations).toEqual([])
})

test('copyExtensionInfo copies extension info text to clipboard when focused item exists', async () => {
  const state = {
    ...createDefaultState(),
    focusedIndex: 0,
    items: [mockItem],
  }
  const mockRpc = RendererWorker.registerMockRpc({
    'ClipBoard.writeText'() {},
  })
  const result = await CopyExtensionInfo.copyExtensionInfo(state)
  expect(result).toBe(state)
  expect(mockRpc.invocations).toEqual([
    [
      'ClipBoard.writeText',
      'Name: Test Extension\nId: test.extension\nDescription: A test extension\nVersion:\nPublisher: Test Publisher\nMarketplace Link:',
    ],
  ])
})

test('copyExtensionInfo handles item with empty strings', async () => {
  const emptyItem: ExtensionListItem = {
    name: '',
    id: '',
    publisher: '',
    icon: '',
    description: '',
    uri: '',
    categories: [],
  }
  const state = {
    ...createDefaultState(),
    focusedIndex: 0,
    items: [emptyItem],
  }
  const mockRpc = RendererWorker.registerMockRpc({
    'ClipBoard.writeText'() {},
  })
  const result = await CopyExtensionInfo.copyExtensionInfo(state)
  expect(result).toBe(state)
  expect(mockRpc.invocations).toEqual([['ClipBoard.writeText', 'Name:\nId:\nDescription:\nVersion:\nPublisher:\nMarketplace Link:']])
})

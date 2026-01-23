import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { ExtensionListItem } from '../src/parts/ExtensionListItem/ExtensionListItem.ts'
import * as CopyExtensionInfo from '../src/parts/CopyExtensionInfo/CopyExtensionInfo.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'

const mockItem: ExtensionListItem = {
  categories: [],
  description: 'A test extension',
  icon: 'icon.png',
  id: 'test.extension',
  name: 'Test Extension',
  publisher: 'Test Publisher',
  size: 1000,
  updatedDate: 1000000,
  uri: 'https://example.com',
}

test('copyExtensionInfo returns state unchanged when no focused item', async () => {
  const state = {
    ...createDefaultState(),
    focusedIndex: -1,
    items: [],
  }
  using mockRpc = RendererWorker.registerMockRpc({
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
  using mockRpc = RendererWorker.registerMockRpc({
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
    categories: [],
    description: '',
    icon: '',
    id: '',
    name: '',
    publisher: '',
    size: 0,
    updatedDate: 0,
    uri: '',
  }
  const state = {
    ...createDefaultState(),
    focusedIndex: 0,
    items: [emptyItem],
  }
  using mockRpc = RendererWorker.registerMockRpc({
    'ClipBoard.writeText'() {},
  })
  const result = await CopyExtensionInfo.copyExtensionInfo(state)
  expect(result).toBe(state)
  expect(mockRpc.invocations).toEqual([['ClipBoard.writeText', 'Name:\nId:\nDescription:\nVersion:\nPublisher:\nMarketplace Link:']])
})

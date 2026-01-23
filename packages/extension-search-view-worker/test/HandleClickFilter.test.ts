import { expect, test } from '@jest/globals'
import { MenuEntryId } from '@lvce-editor/constants'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { State } from '../src/parts/State/State.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleClickFilter } from '../src/parts/HandleClickFilter/HandleClickFilter.ts'

test('returns state unchanged', async () => {
  const state: State = {
    ...createDefaultState(),
    uid: 123,
    x: 100,
    y: 200,
  }
  using mockRpc = RendererWorker.registerMockRpc({
    'ContextMenu.show2'() {},
  })
  const result = await handleClickFilter(state)
  expect(result).toBe(state)
  expect(mockRpc.invocations).toEqual([
    ['ContextMenu.show2', 123, MenuEntryId.ExtensionSearchFilter, 180, 300, { menuId: MenuEntryId.ExtensionSearchFilter }],
  ])
})

test('returns state with modified searchValue unchanged', async () => {
  const state: State = {
    ...createDefaultState(),
    searchValue: 'test search',
    uid: 456,
    x: 50,
    y: 75,
  }
  using mockRpc = RendererWorker.registerMockRpc({
    'ContextMenu.show2'() {},
  })
  const result = await handleClickFilter(state)
  expect(result).toBe(state)
  expect(mockRpc.invocations).toEqual([
    ['ContextMenu.show2', 456, MenuEntryId.ExtensionSearchFilter, 130, 175, { menuId: MenuEntryId.ExtensionSearchFilter }],
  ])
})

test('returns state with items unchanged', async () => {
  const state: State = {
    ...createDefaultState(),
    items: [
      {
        categories: [],
        description: 'test-description',
        icon: 'test-icon',
        id: 'test-extension',
        name: 'Test Extension',
        publisher: 'test-publisher',
        uri: 'test-uri',
      },
    ],
    uid: 789,
    x: 0,
    y: 0,
  }
  using mockRpc = RendererWorker.registerMockRpc({
    'ContextMenu.show2'() {},
  })
  const result = await handleClickFilter(state)
  expect(result).toBe(state)
  expect(mockRpc.invocations).toEqual([
    ['ContextMenu.show2', 789, MenuEntryId.ExtensionSearchFilter, 80, 100, { menuId: MenuEntryId.ExtensionSearchFilter }],
  ])
})

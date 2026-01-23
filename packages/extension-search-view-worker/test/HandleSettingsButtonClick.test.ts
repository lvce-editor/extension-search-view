import { expect, test } from '@jest/globals'
import { MenuEntryId } from '@lvce-editor/constants'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { State } from '../src/parts/State/State.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleSettingsButtonClick from '../src/parts/HandleSettingsButtonClick/HandleSettingsButtonClick.ts'

test('handleSettingsButtonClick shows context menu for valid index', async () => {
  const state: State = {
    ...createDefaultState(),
    deltaY: 0,
    headerHeight: 50,
    itemHeight: 30,
    items: [
      {
        categories: [],
        description: 'Test Description 1',
        icon: 'test-icon-1.png',
        id: 'test-extension-1',
        name: 'Test Extension 1',
        publisher: 'Test Publisher 1',
        size: 1000,
        updatedDate: 1000,
        uri: 'https://example.com/1',
      },
      {
        categories: [],
        description: 'Test Description 2',
        icon: 'test-icon-2.png',
        id: 'test-extension-2',
        name: 'Test Extension 2',
        publisher: 'Test Publisher 2',
        size: 2000,
        updatedDate: 2000,
        uri: 'https://example.com/2',
      },
    ],
    uid: 1,
    x: 100,
    y: 100,
  }
  using mockRpc = RendererWorker.registerMockRpc({
    'ContextMenu.show2'() {},
  })
  const result = await HandleSettingsButtonClick.handleSettingsButtonClick(state, 0)
  expect(result).toBe(state)
  expect(mockRpc.invocations).toEqual([
    ['ContextMenu.show2', 1, MenuEntryId.ManageExtension, expect.any(Number), expect.any(Number), { menuId: MenuEntryId.ManageExtension }],
  ])
})

test('handleSettingsButtonClick returns state unchanged for negative index', async () => {
  const state: State = {
    ...createDefaultState(),
    deltaY: 0,
    headerHeight: 50,
    itemHeight: 30,
    items: [
      {
        categories: [],
        description: 'Test Description 1',
        icon: 'test-icon-1.png',
        id: 'test-extension-1',
        name: 'Test Extension 1',
        publisher: 'Test Publisher 1',
        size: 1000,
        updatedDate: 1000,
        uri: 'https://example.com/1',
      },
    ],
    uid: 1,
    x: 100,
    y: 100,
  }
  using mockRpc = RendererWorker.registerMockRpc({
    'ContextMenu.show2'() {},
  })
  const result = await HandleSettingsButtonClick.handleSettingsButtonClick(state, -1)
  expect(result).toBe(state)
  expect(mockRpc.invocations).toEqual([])
})

test('handleSettingsButtonClick returns state unchanged for index beyond items length', async () => {
  const state: State = {
    ...createDefaultState(),
    deltaY: 0,
    headerHeight: 50,
    itemHeight: 30,
    items: [
      {
        categories: [],
        description: 'Test Description 1',
        icon: 'test-icon-1.png',
        id: 'test-extension-1',
        name: 'Test Extension 1',
        publisher: 'Test Publisher 1',
        size: 1000,
        updatedDate: 1000,
        uri: 'https://example.com/1',
      },
    ],
    uid: 1,
    x: 100,
    y: 100,
  }
  using mockRpc = RendererWorker.registerMockRpc({
    'ContextMenu.show2'() {},
  })
  const result = await HandleSettingsButtonClick.handleSettingsButtonClick(state, 10)
  expect(result).toBe(state)
  expect(mockRpc.invocations).toEqual([])
})

test('handleSettingsButtonClick calculates correct menu position', async () => {
  const state: State = {
    ...createDefaultState(),
    deltaY: 0,
    headerHeight: 50,
    itemHeight: 30,
    items: [
      {
        categories: [],
        description: 'Test Description 1',
        icon: 'test-icon-1.png',
        id: 'test-extension-1',
        name: 'Test Extension 1',
        publisher: 'Test Publisher 1',
        size: 1000,
        updatedDate: 1000,
        uri: 'https://example.com/1',
      },
      {
        categories: [],
        description: 'Test Description 2',
        icon: 'test-icon-2.png',
        id: 'test-extension-2',
        name: 'Test Extension 2',
        publisher: 'Test Publisher 2',
        size: 2000,
        updatedDate: 2000,
        uri: 'https://example.com/2',
      },
    ],
    uid: 1,
    x: 100,
    y: 100,
  }
  using mockRpc = RendererWorker.registerMockRpc({
    'ContextMenu.show2'() {},
  })
  await HandleSettingsButtonClick.handleSettingsButtonClick(state, 1)

  expect(mockRpc.invocations).toEqual([
    ['ContextMenu.show2', 1, MenuEntryId.ManageExtension, expect.any(Number), expect.any(Number), { menuId: MenuEntryId.ManageExtension }],
  ])
})

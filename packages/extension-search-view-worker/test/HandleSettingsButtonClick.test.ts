import { expect, test } from '@jest/globals'
import { MenuEntryId } from '@lvce-editor/constants'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { State } from '../src/parts/State/State.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleSettingsButtonClick from '../src/parts/HandleSettingsButtonClick/HandleSettingsButtonClick.ts'

test('handleSettingsButtonClick shows context menu with builtin status', async () => {
  const state: State = {
    ...createDefaultState(),
    deltaY: 0,
    headerHeight: 50,
    itemHeight: 30,
    items: [
      {
        builtin: true,
        categories: [],
        description: 'Test Description 1',
        disabled: true,
        downloadCount: 'n/a',
        icon: 'test-icon-1.png',
        id: 'test-extension-1',
        linked: false,
        name: 'Test Extension 1',
        publisher: 'Test Publisher 1',
        rating: 'n/a',
        size: 1000,
        status: 'disabled',
        updatedDate: 1000,
        uri: 'https://example.com/1',
      },
      {
        builtin: false,
        categories: [],
        description: 'Test Description 2',
        disabled: false,
        downloadCount: 'n/a',
        icon: 'test-icon-2.png',
        id: 'test-extension-2',
        linked: false,
        name: 'Test Extension 2',
        publisher: 'Test Publisher 2',
        rating: 'n/a',
        size: 2000,
        status: '',
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
  const result = await HandleSettingsButtonClick.handleSettingsButtonClick(state, 0, 140, 165)
  expect(result).toEqual({ ...state, focusedIndex: 0 })
  expect(mockRpc.invocations).toEqual([
    [
      'ContextMenu.show2',
      1,
      MenuEntryId.ManageExtension,
      140,
      165,
      { builtin: true, disabled: true, menuId: MenuEntryId.ManageExtension, status: 'disabled' },
    ],
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
        builtin: false,
        categories: [],
        description: 'Test Description 1',
        disabled: false,
        downloadCount: 'n/a',
        icon: 'test-icon-1.png',
        id: 'test-extension-1',
        linked: false,
        name: 'Test Extension 1',
        publisher: 'Test Publisher 1',
        rating: 'n/a',
        size: 1000,
        status: '',
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
  const result = await HandleSettingsButtonClick.handleSettingsButtonClick(state, -1, 140, 165)
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
        builtin: false,
        categories: [],
        description: 'Test Description 1',
        disabled: false,
        downloadCount: 'n/a',
        icon: 'test-icon-1.png',
        id: 'test-extension-1',
        linked: false,
        name: 'Test Extension 1',
        publisher: 'Test Publisher 1',
        rating: 'n/a',
        size: 1000,
        status: '',
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
  const result = await HandleSettingsButtonClick.handleSettingsButtonClick(state, 10, 140, 165)
  expect(result).toBe(state)
  expect(mockRpc.invocations).toEqual([])
})

test('handleSettingsButtonClick uses pointer coordinates for menu position', async () => {
  const state: State = {
    ...createDefaultState(),
    deltaY: 0,
    headerHeight: 50,
    itemHeight: 30,
    items: [
      {
        builtin: false,
        categories: [],
        description: 'Test Description 1',
        disabled: false,
        downloadCount: 'n/a',
        icon: 'test-icon-1.png',
        id: 'test-extension-1',
        linked: false,
        name: 'Test Extension 1',
        publisher: 'Test Publisher 1',
        rating: 'n/a',
        size: 1000,
        status: '',
        updatedDate: 1000,
        uri: 'https://example.com/1',
      },
      {
        builtin: false,
        categories: [],
        description: 'Test Description 2',
        disabled: false,
        downloadCount: 'n/a',
        icon: 'test-icon-2.png',
        id: 'test-extension-2',
        linked: false,
        name: 'Test Extension 2',
        publisher: 'Test Publisher 2',
        rating: 'n/a',
        size: 2000,
        status: '',
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
  await HandleSettingsButtonClick.handleSettingsButtonClick(state, 1, 140, 165)

  expect(mockRpc.invocations).toEqual([
    [
      'ContextMenu.show2',
      1,
      MenuEntryId.ManageExtension,
      140,
      165,
      { builtin: false, disabled: false, menuId: MenuEntryId.ManageExtension, status: '' },
    ],
  ])
})

test('handleSettingsButtonClick positions keyboard activation at the settings button', async () => {
  const state: State = {
    ...createDefaultState(),
    deltaY: 15,
    headerHeight: 50,
    itemHeight: 30,
    items: [
      {
        builtin: false,
        categories: [],
        description: 'Test Description',
        disabled: false,
        downloadCount: 'n/a',
        icon: 'test-icon.png',
        id: 'test-extension',
        linked: false,
        name: 'Test Extension',
        publisher: 'Test Publisher',
        rating: 'n/a',
        size: 1000,
        status: '',
        updatedDate: 1000,
        uri: 'https://example.com',
      },
    ],
    uid: 1,
    width: 500,
    x: 100,
    y: 100,
  }
  using mockRpc = RendererWorker.registerMockRpc({
    'ContextMenu.show2'() {},
  })

  await HandleSettingsButtonClick.handleSettingsButtonClick(state, 0, 0, 0)

  expect(mockRpc.invocations).toEqual([
    [
      'ContextMenu.show2',
      1,
      MenuEntryId.ManageExtension,
      588,
      155,
      { builtin: false, disabled: false, menuId: MenuEntryId.ManageExtension, status: '' },
    ],
  ])
})

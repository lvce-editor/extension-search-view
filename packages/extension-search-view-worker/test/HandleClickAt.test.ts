import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import { MouseEventType } from '@lvce-editor/virtual-dom-worker'
import type { ExtensionListItem } from '../src/parts/ExtensionListItem/ExtensionListItem.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FocusId from '../src/parts/FocusId/FocusId.ts'
import { handleClickAt } from '../src/parts/HandleClickAt/HandleClickAt.ts'

test('handleClickAt returns state unchanged for non-left click', async () => {
  const state = createDefaultState()
  const result = await handleClickAt(state, 2, 100, 150)
  expect(result).toBe(state)
})

test('handleClickAt accepts completion by name', async () => {
  const state = {
    ...createDefaultState(),
    completionItems: [{ highlights: [0, 1], label: '@enabled' }],
    cursorOffset: 1,
    searchValue: '@',
    suggestOpen: true,
  }
  const result = await handleClickAt(state, MouseEventType.LeftClick, 0, 0, '@enabled')
  expect(result.searchValue).toBe('@enabled ')
  expect(result.suggestOpen).toBe(false)
})

test('handleClickAt does not open extension details when clicking an action button', async () => {
  const mockExtension: ExtensionListItem = {
    builtin: false,
    categories: [],
    description: 'test-description',
    disabled: false,
    downloadCount: 'n/a',
    icon: 'test-icon',
    id: 'test-extension-id',
    linked: false,
    name: 'Test Extension',
    publisher: 'test-publisher',
    rating: 'n/a',
    size: 1000,
    status: '',
    updatedDate: 1_000_000,
    uri: 'test-uri',
  }

  const state = {
    ...createDefaultState(),
    deltaY: 0,
    headerHeight: 0,
    itemHeight: 30,
    items: [mockExtension],
    x: 50,
    y: 100,
  }

  using mockRpc = RendererWorker.registerMockRpc({
    'Main.openUri'() {},
  })

  const result = await handleClickAt(state, MouseEventType.LeftClick, 50, 115, 'test-extension-id')

  expect(mockRpc.invocations).toEqual([])
  expect(result).toBe(state)
})

test('handleClickAt handles left click and opens URI', async () => {
  const mockExtension: ExtensionListItem = {
    builtin: false,
    categories: [],
    description: 'test-description',
    disabled: false,
    downloadCount: 'n/a',
    icon: 'test-icon',
    id: 'test-extension-id',
    linked: false,
    name: 'Test Extension',
    publisher: 'test-publisher',
    rating: 'n/a',
    size: 1000,
    status: '',
    updatedDate: 1_000_000,
    uri: 'test-uri',
  }

  const state = {
    ...createDefaultState(),
    deltaY: 0,
    focusedIndex: 0,
    headerHeight: 0,
    itemHeight: 30,
    items: [mockExtension],
    minLineY: 0,
    x: 50,
    y: 100,
  }

  using mockRpc = RendererWorker.registerMockRpc({
    'Main.openUri'() {},
  })

  const eventX = 50
  const eventY = 115
  const result = await handleClickAt(state, MouseEventType.LeftClick, eventX, eventY)

  expect(mockRpc.invocations).toEqual([['Main.openUri', { focus: undefined, uri: 'extension-detail:///test-extension-id' }]])
  expect(result.focus).toBe(FocusId.List)
})

test('handleClickAt calculates correct index from coordinates', async () => {
  const mockExtension1: ExtensionListItem = {
    builtin: false,
    categories: [],
    description: 'desc-1',
    disabled: false,
    downloadCount: 'n/a',
    icon: 'icon-1',
    id: 'extension-1',
    linked: false,
    name: 'Extension 1',
    publisher: 'publisher-1',
    rating: 'n/a',
    size: 1000,
    status: '',
    updatedDate: 1_000_000,
    uri: 'uri-1',
  }

  const mockExtension2: ExtensionListItem = {
    builtin: false,
    categories: [],
    description: 'desc-2',
    disabled: false,
    downloadCount: 'n/a',
    icon: 'icon-2',
    id: 'extension-2',
    linked: false,
    name: 'Extension 2',
    publisher: 'publisher-2',
    rating: 'n/a',
    size: 2000,
    status: '',
    updatedDate: 2_000_000,
    uri: 'uri-2',
  }

  const state = {
    ...createDefaultState(),
    deltaY: 48,
    focusedIndex: 0,
    headerHeight: 41,
    itemHeight: 72,
    items: [mockExtension1, mockExtension2],
    minLineY: 0,
    x: 100,
    y: 55,
  }

  using mockRpc = RendererWorker.registerMockRpc({
    'Main.openUri'() {},
  })

  const eventX = 100
  const eventY = 144
  const result = await handleClickAt(state, MouseEventType.LeftClick, eventX, eventY)

  expect(mockRpc.invocations).toEqual([['Main.openUri', { focus: undefined, uri: 'extension-detail:///extension-2' }]])
  expect(result.focusedIndex).toBe(1)
})

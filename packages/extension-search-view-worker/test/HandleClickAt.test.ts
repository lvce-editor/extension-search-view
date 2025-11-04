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

test('handleClickAt handles left click and opens URI', async () => {
  const mockExtension: ExtensionListItem = {
    name: 'Test Extension',
    id: 'test-extension-id',
    publisher: 'test-publisher',
    icon: 'test-icon',
    description: 'test-description',
    uri: 'test-uri',
    categories: [],
  }

  const state = {
    ...createDefaultState(),
    items: [mockExtension],
    minLineY: 0,
    x: 50,
    y: 100,
    itemHeight: 30,
    deltaY: 0,
    headerHeight: 0,
    focusedIndex: 0,
  }

  const mockRpc = RendererWorker.registerMockRpc({
    'Main.openUri'() {},
  })

  const eventX = 50
  const eventY = 115
  const result = await handleClickAt(state, MouseEventType.LeftClick, eventX, eventY)

  expect(mockRpc.invocations).toEqual([['Main.openUri', 'extension-detail://test-extension-id', undefined, undefined]])
  expect(result.focus).toBe(FocusId.List)
})

test('handleClickAt calculates correct index from coordinates', async () => {
  const mockExtension1: ExtensionListItem = {
    name: 'Extension 1',
    id: 'extension-1',
    publisher: 'publisher-1',
    icon: 'icon-1',
    description: 'desc-1',
    uri: 'uri-1',
    categories: [],
  }

  const mockExtension2: ExtensionListItem = {
    name: 'Extension 2',
    id: 'extension-2',
    publisher: 'publisher-2',
    icon: 'icon-2',
    description: 'desc-2',
    uri: 'uri-2',
    categories: [],
  }

  const state = {
    ...createDefaultState(),
    items: [mockExtension1, mockExtension2],
    minLineY: 0,
    x: 100,
    y: 55,
    itemHeight: 72,
    deltaY: 48,
    headerHeight: 41,
    focusedIndex: 0,
  }

  const mockRpc = RendererWorker.registerMockRpc({
    'Main.openUri'() {},
  })

  const eventX = 100
  const eventY = 144
  const result = await handleClickAt(state, MouseEventType.LeftClick, eventX, eventY)

  expect(mockRpc.invocations).toEqual([['Main.openUri', 'extension-detail://extension-2', undefined, undefined]])
  expect(result.focusedIndex).toBe(1)
})

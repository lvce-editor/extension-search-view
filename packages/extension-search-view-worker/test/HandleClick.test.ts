import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { ExtensionListItem } from '../src/parts/ExtensionListItem/ExtensionListItem.ts'
import type { State } from '../src/parts/State/State.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FocusId from '../src/parts/FocusId/FocusId.ts'
import { handleClick } from '../src/parts/HandleClick/HandleClick.ts'

test('handleClick opens URI and updates state with focus', async () => {
  const mockExtension: ExtensionListItem = {
    categories: [],
    description: 'test-description',
    icon: 'test-icon',
    id: 'test-extension-id',
    name: 'Test Extension',
    publisher: 'test-publisher',
    uri: 'test-uri',
  }

  const state = {
    ...createDefaultState(),
    focusedIndex: 0,
    items: [mockExtension],
    minLineY: 0,
  }

  const mockRpc = RendererWorker.registerMockRpc({
    'Main.openUri'() {},
  })

  const result = await handleClick(state, 0)

  expect(mockRpc.invocations).toEqual([['Main.openUri', 'extension-detail://test-extension-id', undefined, undefined]])
  expect(result.focus).toBe(FocusId.List)
  expect(result.focusedIndex).toBe(0)
})

test('handleClick calculates actualIndex correctly with minLineY', async () => {
  const mockExtension1: ExtensionListItem = {
    categories: [],
    description: 'desc-1',
    icon: 'icon-1',
    id: 'extension-1',
    name: 'Extension 1',
    publisher: 'publisher-1',
    uri: 'uri-1',
  }

  const mockExtension2: ExtensionListItem = {
    categories: [],
    description: 'desc-2',
    icon: 'icon-2',
    id: 'extension-2',
    name: 'Extension 2',
    publisher: 'publisher-2',
    uri: 'uri-2',
  }

  const state = {
    ...createDefaultState(),
    focusedIndex: 0,
    items: [mockExtension1, mockExtension2],
    minLineY: 1,
  }

  const mockRpc = RendererWorker.registerMockRpc({
    'Main.openUri'() {},
  })

  const result = await handleClick(state, 0)

  expect(mockRpc.invocations).toEqual([['Main.openUri', 'extension-detail://extension-2', undefined, undefined]])
  expect(result.focusedIndex).toBe(1)
  expect(result.focus).toBe(FocusId.List)
})

test('handleClick returns state with focus List and focusedIndex -1 when actualIndex is negative', async () => {
  const mockExtension: ExtensionListItem = {
    categories: [],
    description: 'test-description',
    icon: 'test-icon',
    id: 'test-extension-id',
    name: 'Test Extension',
    publisher: 'test-publisher',
    uri: 'test-uri',
  }

  const state: State = {
    ...createDefaultState(),
    focusedIndex: 0,
    items: [mockExtension],
    minLineY: 0,
  }

  const mockRpc = RendererWorker.registerMockRpc({
    'Main.openUri'() {},
  })

  const result = await handleClick(state, -1)

  expect(mockRpc.invocations).toEqual([])
  expect(result.focus).toBe(FocusId.List)
  expect(result.focusedIndex).toBe(-1)
})

test('handleClick returns state with focus List and focusedIndex -1 when actualIndex exceeds items length', async () => {
  const mockExtension: ExtensionListItem = {
    categories: [],
    description: 'test-description',
    icon: 'test-icon',
    id: 'test-extension-id',
    name: 'Test Extension',
    publisher: 'test-publisher',
    uri: 'test-uri',
  }

  const state: State = {
    ...createDefaultState(),
    focusedIndex: 0,
    items: [mockExtension],
    minLineY: 0,
  }

  const mockRpc = RendererWorker.registerMockRpc({
    'Main.openUri'() {},
  })

  const result = await handleClick(state, 1)

  expect(mockRpc.invocations).toEqual([])
  expect(result.focus).toBe(FocusId.List)
  expect(result.focusedIndex).toBe(-1)
})

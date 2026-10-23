import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { ExtensionListItem } from '../src/parts/ExtensionListItem/ExtensionListItem.ts'
import type { State } from '../src/parts/State/State.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FocusId from '../src/parts/FocusId/FocusId.ts'
import { handleClick } from '../src/parts/HandleClick/HandleClick.ts'

test('handleClick opens URI and updates state with focus', async () => {
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
    focusedIndex: 0,
    items: [mockExtension],
    minLineY: 0,
  }

  using mockRpc = RendererWorker.registerMockRpc({
    'Main.openUri'() {},
  })

  const result = await handleClick(state, 0)

  expect(mockRpc.invocations).toEqual([['Main.openUri', { focus: undefined, uri: 'extension-detail:///test-extension-id' }]])
  expect(result.focus).toBe(FocusId.List)
  expect(result.focusedIndex).toBe(0)
})

test('handleClick calculates actualIndex correctly with minLineY and preserves scroll position', async () => {
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
    deltaY: 20,
    focusedIndex: 0,
    items: [mockExtension1, mockExtension2],
    maxLineY: 2,
    minLineY: 1,
    scrollBarY: 10,
  }

  using mockRpc = RendererWorker.registerMockRpc({
    'Main.openUri'() {},
  })

  const result = await handleClick(state, 0)

  expect(mockRpc.invocations).toEqual([['Main.openUri', { focus: undefined, uri: 'extension-detail:///extension-2' }]])
  expect(result.focusedIndex).toBe(1)
  expect(result.focus).toBe(FocusId.List)
  expect(result.deltaY).toBe(20)
  expect(result.minLineY).toBe(1)
  expect(result.maxLineY).toBe(2)
  expect(result.scrollBarY).toBe(10)
})

test('handleClick returns state with focus List and focusedIndex -1 when actualIndex is negative', async () => {
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

  const state: State = {
    ...createDefaultState(),
    focusedIndex: 0,
    items: [mockExtension],
    minLineY: 0,
  }

  using mockRpc = RendererWorker.registerMockRpc({
    'Main.openUri'() {},
  })

  const result = await handleClick(state, -1)

  expect(mockRpc.invocations).toEqual([])
  expect(result.focus).toBe(FocusId.List)
  expect(result.focusedIndex).toBe(-1)
})

test('handleClick returns state with focus List and focusedIndex -1 when actualIndex exceeds items length', async () => {
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

  const state: State = {
    ...createDefaultState(),
    focusedIndex: 0,
    items: [mockExtension],
    minLineY: 0,
  }

  using mockRpc = RendererWorker.registerMockRpc({
    'Main.openUri'() {},
  })

  const result = await handleClick(state, 1)

  expect(mockRpc.invocations).toEqual([])
  expect(result.focus).toBe(FocusId.List)
  expect(result.focusedIndex).toBe(-1)
})

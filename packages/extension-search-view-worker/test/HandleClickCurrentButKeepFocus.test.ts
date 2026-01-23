import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { ExtensionListItem } from '../src/parts/ExtensionListItem/ExtensionListItem.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FocusId from '../src/parts/FocusId/FocusId.ts'
import { handleClickCurrentButKeepFocus } from '../src/parts/HandleClickCurrentButKeepFocus/HandleClickCurrentButKeepFocus.ts'

test('handleClickCurrentButKeepFocus opens URI for focused extension', async () => {
  const mockExtension: ExtensionListItem = {
    categories: [],
    description: 'test-description',
    icon: 'test-icon',
    id: 'test-extension-id',
    name: 'Test Extension',
    publisher: 'test-publisher',
    size: 1000,
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

  const result = await handleClickCurrentButKeepFocus(state)

  expect(mockRpc.invocations).toEqual([['Main.openUri', 'extension-detail://test-extension-id', undefined, undefined]])
  expect(result.focus).toBe(FocusId.List)
  expect(result.focusedIndex).toBe(0)
})

test('handleClickCurrentButKeepFocus uses focusedIndex correctly', async () => {
  const mockExtension1: ExtensionListItem = {
    categories: [],
    description: 'desc-1',
    icon: 'icon-1',
    id: 'extension-1',
    name: 'Extension 1',
    publisher: 'publisher-1',
    size: 1000,
    updatedDate: 1_000_000,
    uri: 'uri-1',
  }

  const mockExtension2: ExtensionListItem = {
    categories: [],
    description: 'desc-2',
    icon: 'icon-2',
    id: 'extension-2',
    name: 'Extension 2',
    publisher: 'publisher-2',
    size: 2000,
    updatedDate: 2_000_000,
    uri: 'uri-2',
  }

  const state = {
    ...createDefaultState(),
    focusedIndex: 1,
    items: [mockExtension1, mockExtension2],
    minLineY: 0,
  }

  using mockRpc = RendererWorker.registerMockRpc({
    'Main.openUri'() {},
  })

  const result = await handleClickCurrentButKeepFocus(state)

  expect(mockRpc.invocations).toEqual([['Main.openUri', 'extension-detail://extension-2', undefined, undefined]])
  expect(result.focusedIndex).toBe(1)
})

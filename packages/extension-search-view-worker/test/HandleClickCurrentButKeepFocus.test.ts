import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { ExtensionListItem } from '../src/parts/ExtensionListItem/ExtensionListItem.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FocusId from '../src/parts/FocusId/FocusId.ts'
import { handleClickCurrentButKeepFocus } from '../src/parts/HandleClickCurrentButKeepFocus/HandleClickCurrentButKeepFocus.ts'

test('handleClickCurrentButKeepFocus opens URI for focused extension', async () => {
  const mockExtension: ExtensionListItem = {
    name: 'Test Extension',
    id: 'test-extension-id',
    publisher: 'test-publisher',
    icon: 'test-icon',
    description: 'test-description',
    uri: 'test-uri',
  }

  const state = {
    ...createDefaultState(),
    items: [mockExtension],
    minLineY: 0,
    focusedIndex: 0,
  }

  const mockRpc = RendererWorker.registerMockRpc({
    'Main.openUri'() {},
  })

  const result = await handleClickCurrentButKeepFocus(state)

  expect(mockRpc.invocations).toEqual([['Main.openUri', 'extension-detail://test-extension-id', undefined, undefined]])
  expect(result.focus).toBe(FocusId.List)
  expect(result.focusedIndex).toBe(0)
})

test('handleClickCurrentButKeepFocus uses focusedIndex correctly', async () => {
  const mockExtension1: ExtensionListItem = {
    name: 'Extension 1',
    id: 'extension-1',
    publisher: 'publisher-1',
    icon: 'icon-1',
    description: 'desc-1',
    uri: 'uri-1',
  }

  const mockExtension2: ExtensionListItem = {
    name: 'Extension 2',
    id: 'extension-2',
    publisher: 'publisher-2',
    icon: 'icon-2',
    description: 'desc-2',
    uri: 'uri-2',
  }

  const state = {
    ...createDefaultState(),
    items: [mockExtension1, mockExtension2],
    minLineY: 0,
    focusedIndex: 1,
  }

  const mockRpc = RendererWorker.registerMockRpc({
    'Main.openUri'() {},
  })

  const result = await handleClickCurrentButKeepFocus(state)

  expect(mockRpc.invocations).toEqual([['Main.openUri', 'extension-detail://extension-2', undefined, undefined]])
  expect(result.focusedIndex).toBe(1)
})

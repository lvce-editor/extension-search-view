import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { ExtensionListItem } from '../src/parts/ExtensionListItem/ExtensionListItem.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as FocusId from '../src/parts/FocusId/FocusId.ts'
import { handleClickCurrentButKeepFocus } from '../src/parts/HandleClickCurrentButKeepFocus/HandleClickCurrentButKeepFocus.ts'

test('handleClickCurrentButKeepFocus opens URI for focused extension', async () => {
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

  const result = await handleClickCurrentButKeepFocus(state)

  expect(mockRpc.invocations).toEqual([['Main.openUri', { focus: undefined, uri: 'extension-detail:///test-extension-id' }]])
  expect(result.focus).toBe(FocusId.List)
  expect(result.focusedIndex).toBe(0)
})

test('handleClickCurrentButKeepFocus uses focusedIndex correctly', async () => {
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
    focusedIndex: 1,
    items: [mockExtension1, mockExtension2],
    minLineY: 0,
  }

  using mockRpc = RendererWorker.registerMockRpc({
    'Main.openUri'() {},
  })

  const result = await handleClickCurrentButKeepFocus(state)

  expect(mockRpc.invocations).toEqual([['Main.openUri', { focus: undefined, uri: 'extension-detail:///extension-2' }]])
  expect(result.focusedIndex).toBe(1)
})

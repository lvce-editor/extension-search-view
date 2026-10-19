import { expect, test } from '@jest/globals'
import { MenuEntryId } from '@lvce-editor/constants'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { getMenuEntries2 } from '../src/parts/GetMenuEntries2/GetMenuEntries2.ts'
import { handleExtensionsMoreActions } from '../src/parts/HandleExtensionsMoreActions/HandleExtensionsMoreActions.ts'
import { renderEventListeners } from '../src/parts/RenderEventListeners/RenderEventListeners.ts'

test('toolbar event opens the menu below the title bar', async () => {
  const state = { ...createDefaultState(), uid: 42, width: 300, x: 900, y: 80 }
  using rpc = RendererWorker.registerMockRpc({ 'ContextMenu.show2'() {} })
  expect(renderEventListeners()).toContainEqual({ name: 'handleExtensionsMoreActions', params: ['handleExtensionsMoreActions'] })
  expect(await handleExtensionsMoreActions(state)).toBe(state)
  expect(rpc.invocations).toEqual([
    ['ContextMenu.show2', 42, MenuEntryId.ExtensionSearchFilter, 1172, 80, { menuId: MenuEntryId.ExtensionSearchFilter, subMenu: 'moreActions' }],
  ])
})

test('more actions opens Running Extensions using the application URI command', () => {
  expect(getMenuEntries2(createDefaultState(), { menuId: MenuEntryId.ExtensionSearchFilter, subMenu: 'moreActions' })).toEqual([
    { args: ['running-extensions://'], command: 'Main.openUri', flags: 0, id: 'showRunningExtensions', label: 'Show Running Extensions' },
  ])
})

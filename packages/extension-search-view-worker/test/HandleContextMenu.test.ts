import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { State } from '../src/parts/State/State.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleContextMenu from '../src/parts/HandleContextMenu/HandleContextMenu.ts'
import * as MenuEntryId from '../src/parts/MenuEntryId/MenuEntryId.ts'

test('handleContextMenu shows context menu for valid index', async () => {
  const state: State = {
    ...createDefaultState(),
    deltaY: 0,
    headerHeight: 0,
    itemHeight: 20,
    items: Array(5).fill(null),
    uid: 123,
    x: 50,
    y: 100,
  }
  const mockRpc = RendererWorker.registerMockRpc({
    'ContextMenu.show2'() {},
  })
  const result = await HandleContextMenu.handleContextMenu(state, 0, 100, 120)
  expect(result).toBe(state)
  expect(mockRpc.invocations).toEqual([
    ['RendererWorker.showContextMenu2', 123, MenuEntryId.ManageExtension, 100, 120, { menuId: MenuEntryId.ManageExtension }],
  ])
})

test('handleContextMenu returns state unchanged for negative index', async () => {
  const state: State = {
    ...createDefaultState(),
    deltaY: 0,
    headerHeight: 0,
    itemHeight: 20,
    items: Array(5).fill(null),
    uid: 123,
    x: 50,
    y: 100,
  }
  const mockRpc = RendererWorker.registerMockRpc({
    'ContextMenu.show2'() {},
  })
  const result = await HandleContextMenu.handleContextMenu(state, 0, 100, 50)
  expect(result).toBe(state)
  expect(mockRpc.invocations).toEqual([])
})

test('handleContextMenu returns state unchanged for index greater than items length', async () => {
  const state: State = {
    ...createDefaultState(),
    deltaY: 0,
    headerHeight: 0,
    itemHeight: 20,
    items: Array(5).fill(null),
    uid: 123,
    x: 50,
    y: 100,
  }
  const mockRpc = RendererWorker.registerMockRpc({
    'ContextMenu.show2'() {},
  })
  const result = await HandleContextMenu.handleContextMenu(state, 0, 100, 300)
  expect(result).toBe(state)
  expect(mockRpc.invocations).toEqual([])
})

test('handleContextMenu returns state unchanged for index equal to items length', async () => {
  const state: State = {
    ...createDefaultState(),
    deltaY: 0,
    headerHeight: 0,
    itemHeight: 20,
    items: Array(5).fill(null),
    uid: 123,
    x: 50,
    y: 100,
  }
  const mockRpc = RendererWorker.registerMockRpc({
    'ContextMenu.show2'() {},
  })
  const result = await HandleContextMenu.handleContextMenu(state, 0, 100, 200)
  expect(result).toBe(state)
  expect(mockRpc.invocations).toEqual([])
})

test('handleContextMenu shows context menu for index 0', async () => {
  const state: State = {
    ...createDefaultState(),
    deltaY: 0,
    headerHeight: 0,
    itemHeight: 30,
    items: Array(10).fill(null),
    uid: 456,
    x: 0,
    y: 0,
  }
  const mockRpc = RendererWorker.registerMockRpc({
    'ContextMenu.show2'() {},
  })
  const result = await HandleContextMenu.handleContextMenu(state, 0, 0, 15)
  expect(result).toBe(state)
  expect(mockRpc.invocations).toEqual([
    ['RendererWorker.showContextMenu2', 456, MenuEntryId.ManageExtension, 0, 15, { menuId: MenuEntryId.ManageExtension }],
  ])
})

test('handleContextMenu shows context menu with scrolled state', async () => {
  const state: State = {
    ...createDefaultState(),
    deltaY: 40,
    headerHeight: 10,
    itemHeight: 20,
    items: Array(10).fill(null),
    uid: 789,
    x: 100,
    y: 50,
  }
  const mockRpc = RendererWorker.registerMockRpc({
    'ContextMenu.show2'() {},
  })
  const result = await HandleContextMenu.handleContextMenu(state, 0, 150, 100)
  expect(result).toBe(state)
  expect(mockRpc.invocations.length).toBeGreaterThan(0)
  expect(mockRpc.invocations[0][0]).toBe('RendererWorker.showContextMenu2')
  expect(mockRpc.invocations[0][1]).toBe(789)
  expect(mockRpc.invocations[0][2]).toBe(MenuEntryId.ManageExtension)
  expect(mockRpc.invocations[0][3]).toBe(150)
  expect(mockRpc.invocations[0][4]).toBe(100)
  expect(mockRpc.invocations[0][5]).toEqual({ menuId: MenuEntryId.ManageExtension })
})

import { expect, test } from '@jest/globals'
import { ExtensionManagementWorker } from '@lvce-editor/rpc-registry'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleUninstallSelected from '../src/parts/HandleUninstallSelected/HandleUninstallSelected.ts'

test('uninstalls the focused extension', async () => {
  using extensionManagementWorker = ExtensionManagementWorker.registerMockRpc({
    'Extensions.uninstall'() {},
  })
  const extension = { id: 'test-id', status: 'enabled' } as any
  const state = { ...CreateDefaultState.createDefaultState(), focusedIndex: 0, items: [extension] }

  const result = await HandleUninstallSelected.handleUninstallSelected(state)

  expect(extensionManagementWorker.invocations).toEqual([['Extensions.uninstall', 'test-id']])
  expect(result.items[0].status).toBe('not-installed')
})

test('does nothing when no extension is focused', async () => {
  const state = { ...CreateDefaultState.createDefaultState(), focusedIndex: -1, items: [] }
  const result = await HandleUninstallSelected.handleUninstallSelected(state)
  expect(result).toBe(state)
})

test('does nothing when focused index is outside the filtered results', async () => {
  const state = { ...CreateDefaultState.createDefaultState(), focusedIndex: 1, items: [] }
  const result = await HandleUninstallSelected.handleUninstallSelected(state)
  expect(result).toBe(state)
})

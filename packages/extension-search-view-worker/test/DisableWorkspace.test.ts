import { expect, test } from '@jest/globals'
import { ExtensionManagementWorker } from '@lvce-editor/rpc-registry'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { disableWorkspace } from '../src/parts/DisableWorkspace/DisableWorkspace.ts'

test('disableWorkspace disables the focused extension in the workspace', async () => {
  using mockRpc = ExtensionManagementWorker.registerMockRpc({
    'Extensions.disableWorkspace'() {},
  })
  const extension = { id: 'test-id' } as any
  const state = { ...createDefaultState(), allExtensions: [extension], focusedIndex: 0, items: [extension] }
  const result = await disableWorkspace(state)
  expect(result.items[0].status).toBe('disabled')
  expect(mockRpc.invocations).toEqual([['Extensions.disableWorkspace', 'test-id']])
})

test('disableWorkspace returns the same state when no extension is focused', async () => {
  const state = { ...createDefaultState(), focusedIndex: -1, items: [] }
  expect(await disableWorkspace(state)).toBe(state)
})

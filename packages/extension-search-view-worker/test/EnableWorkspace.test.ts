import { expect, test } from '@jest/globals'
import { ExtensionManagementWorker } from '@lvce-editor/rpc-registry'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { enableWorkspace } from '../src/parts/EnableWorkspace/EnableWorkspace.ts'

test('enableWorkspace enables the focused extension in the workspace', async () => {
  using mockRpc = ExtensionManagementWorker.registerMockRpc({
    'Extensions.enableWorkspace'() {},
  })
  const extension = { id: 'test-id' } as any
  const state = { ...createDefaultState(), allExtensions: [extension], focusedIndex: 0, items: [extension] }
  const result = await enableWorkspace(state)
  expect(result.items[0].status).toBe('enabled')
  expect(mockRpc.invocations).toEqual([['Extensions.enableWorkspace', 'test-id']])
})

test('enableWorkspace returns the same state when no extension is focused', async () => {
  const state = { ...createDefaultState(), focusedIndex: -1, items: [] }
  expect(await enableWorkspace(state)).toBe(state)
})

import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { disable } from '../src/parts/Disable/Disable.ts'

test('disable disables the focused extension', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'ExtensionManagement.disable'() {},
  })
  const extension = { id: 'test-id' } as any
  const state = { ...createDefaultState(), allExtensions: [extension], focusedIndex: 0, items: [extension] }
  const result = await disable(state)
  expect(result.items[0].status).toBe('disabled')
  expect(mockRpc.invocations).toEqual([['ExtensionManagement.disable', 'test-id']])
})

test('disable returns the same state when no extension is focused', async () => {
  const state = { ...createDefaultState(), focusedIndex: -1, items: [] }
  expect(await disable(state)).toBe(state)
})

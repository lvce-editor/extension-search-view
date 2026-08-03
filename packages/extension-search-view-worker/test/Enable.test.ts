import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { enable } from '../src/parts/Enable/Enable.ts'

test('enable enables the focused extension', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'ExtensionManagement.enable'() {},
  })
  const extension = { id: 'test-id' } as any
  const state = { ...createDefaultState(), allExtensions: [extension], focusedIndex: 0, items: [extension] }
  const result = await enable(state)
  expect(result.items[0].status).toBe('enabled')
  expect(mockRpc.invocations).toEqual([['ExtensionManagement.enable', 'test-id']])
})

test('enable returns the same state when no extension is focused', async () => {
  const state = { ...createDefaultState(), focusedIndex: -1, items: [] }
  expect(await enable(state)).toBe(state)
})

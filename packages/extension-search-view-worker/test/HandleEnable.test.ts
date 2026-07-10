import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleEnable } from '../src/parts/HandleEnable/HandleEnable.ts'

test('handleEnable enables extension and updates status', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'ExtensionManagement.enable'() {},
  })
  const extension = { id: 'test-id' } as any
  const state = { ...createDefaultState(), allExtensions: [extension], items: [extension] }
  const result = await handleEnable(state, 'test-id')
  expect(mockRpc.invocations).toEqual([['ExtensionManagement.enable', 'test-id']])
  expect(result.items[0].status).toBe('enabled')
})

test('handleEnable preserves state on error', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'ExtensionManagement.enable'() {
      return new Error('Failed')
    },
  })
  const state = createDefaultState()
  const result = await handleEnable(state, 'test-id')
  expect(mockRpc.invocations).toEqual([['ExtensionManagement.enable', 'test-id']])
  expect(result).toBe(state)
})

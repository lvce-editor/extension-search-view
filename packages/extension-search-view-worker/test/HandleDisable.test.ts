import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleDisable from '../src/parts/HandleDisable/HandleDisable.ts'

test('handleDisable disables extension and updates status', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'ExtensionManagement.disable'() {},
  })
  const extension = { id: 'test-id' } as any
  const state = { ...CreateDefaultState.createDefaultState(), allExtensions: [extension], items: [extension] }
  const result = await HandleDisable.handleDisable(state, 'test-id')
  expect(mockRpc.invocations).toEqual([['ExtensionManagement.disable', 'test-id']])
  expect(result.items[0].status).toBe('disabled')
})

test('handleDisable preserves state on error', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'ExtensionManagement.disable'() {
      return new Error('Failed')
    },
  })
  const state = CreateDefaultState.createDefaultState()
  const result = await HandleDisable.handleDisable(state, 'test-id')
  expect(mockRpc.invocations).toEqual([['ExtensionManagement.disable', 'test-id']])
  expect(result).toBe(state)
})

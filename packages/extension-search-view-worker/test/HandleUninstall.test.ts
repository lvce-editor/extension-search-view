import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleUninstall from '../src/parts/HandleUninstall/HandleUninstall.ts'

test('handleUninstall uninstalls extension and updates status', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'ExtensionManagement.uninstall'() {},
  })
  const extension = { id: 'test-id' } as any
  const state = { ...CreateDefaultState.createDefaultState(), allExtensions: [extension], items: [extension] }
  const id = 'test-id'

  const result = await HandleUninstall.handleUninstall(state, id)
  expect(mockRpc.invocations).toEqual([['ExtensionManagement.uninstall', 'test-id']])
  expect(result.items[0].status).toBe('not-installed')
})

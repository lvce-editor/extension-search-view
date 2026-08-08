import { expect, test } from '@jest/globals'
import { ExtensionManagementWorker, RendererWorker } from '@lvce-editor/rpc-registry'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleUninstall from '../src/parts/HandleUninstall/HandleUninstall.ts'

test('handleUninstall uninstalls extension and updates status', async () => {
  using extensionManagementWorker = ExtensionManagementWorker.registerMockRpc({
    'Extensions.uninstall'() {},
  })
  const extension = { id: 'test-id' } as any
  const state = { ...CreateDefaultState.createDefaultState(), allExtensions: [extension], items: [extension] }
  const id = 'test-id'

  const result = await HandleUninstall.handleUninstall(state, id)
  expect(extensionManagementWorker.invocations).toEqual([['Extensions.uninstall', 'test-id']])
  expect(result.items[0].status).toBe('not-installed')
})

test('handleUninstall shows an error dialog and preserves status when uninstall fails', async () => {
  const error = new Error('Failed to uninstall extension')
  using rendererWorker = RendererWorker.registerMockRpc({
    'ErrorHandling.showErrorDialog'() {},
  })
  using extensionManagementWorker = ExtensionManagementWorker.registerMockRpc({
    'Extensions.uninstall'() {
      throw error
    },
  })
  const extension = { id: 'test-id', status: 'enabled' } as any
  const state = { ...CreateDefaultState.createDefaultState(), allExtensions: [extension], items: [extension] }

  const result = await HandleUninstall.handleUninstall(state, 'test-id')

  expect(extensionManagementWorker.invocations).toEqual([['Extensions.uninstall', 'test-id']])
  expect(rendererWorker.invocations).toEqual([['ErrorHandling.showErrorDialog', error]])
  expect(result).toBe(state)
})

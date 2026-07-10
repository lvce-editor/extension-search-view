import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { State } from '../src/parts/State/State.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleInstall from '../src/parts/HandleInstall/HandleInstall.ts'

test('handleInstall installs extension and updates status', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'ExtensionManagement.install'() {},
  })
  const extension = { id: 'test-id' } as any
  const state: State = { ...createDefaultState(), allExtensions: [extension], items: [extension] }
  const id = 'test-id'

  const result = await HandleInstall.handleInstall(state, id)
  expect(mockRpc.invocations).toEqual([['ExtensionManagement.install', 'test-id']])
  expect(result.items[0].status).toBe('enabled')
})

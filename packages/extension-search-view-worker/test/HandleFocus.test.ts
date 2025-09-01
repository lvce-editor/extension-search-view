import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleFocus } from '../src/parts/HandleFocus/HandleFocus.ts'

test.skip('handleFocus invokes RPC focus method', async () => {
  const mockRpc = RendererWorker.registerMockRpc({
    'Focus.setFocus'() {},
  })
  const state = createDefaultState()
  expect(await handleFocus(state)).toBe(state)
  expect(mockRpc.invocations).toEqual([['Focus.setFocus', 15]])
})

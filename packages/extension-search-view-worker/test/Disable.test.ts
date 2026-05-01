import { expect, test } from '@jest/globals'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { disable } from '../src/parts/Disable/Disable.ts'

test('disable shows placeholder confirm and returns state', async () => {
  using mockRpc = RendererWorker.registerMockRpc({
    'ConfirmPrompt.prompt'() {
      return false
    },
  })
  const state = createDefaultState()
  const result = await disable(state, 'test-id')
  expect(result).toBe(state)
  expect(mockRpc.invocations).toEqual([['ConfirmPrompt.prompt', 'not implemented', undefined]])
})

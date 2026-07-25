import { expect, test } from '@jest/globals'
import { DialogWorker } from '@lvce-editor/rpc-registry'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { installAnotherVersion } from '../src/parts/InstallAnotherVersion/InstallAnotherVersion.ts'

test('installAnotherVersion shows placeholder confirm and returns state', async () => {
  using mockRpc = DialogWorker.registerMockRpc({
    'ConfirmPrompt.prompt'() {
      return false
    },
  })
  const state = createDefaultState()
  const result = await installAnotherVersion(state)
  expect(result).toBe(state)
  expect(mockRpc.invocations).toEqual([['ConfirmPrompt.prompt', 'not implemented', undefined]])
})

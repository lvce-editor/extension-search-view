import { expect, test } from '@jest/globals'
import * as RendererWorker from '../src/parts/RendererWorker/RendererWorker.ts'
import { setFocus } from '../src/parts/SetFocus/SetFocus.ts'

test('setFocus calls RPC with correct parameters', async () => {
  const mockRpc = RendererWorker.registerMockRpc({
    'Focus.setFocus'() {},
  })
  const focusId = 123
  await setFocus(focusId)
  expect(mockRpc.invocations).toEqual([["Focus.setFocus", focusId]])
})

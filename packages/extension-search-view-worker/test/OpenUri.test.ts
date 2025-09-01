import { expect, test } from '@jest/globals'
import * as OpenUri from '../src/parts/OpenUri/OpenUri.ts'
import * as RendererWorker from '../src/parts/RendererWorker/RendererWorker.ts'

test('openUri calls Main.openUri with correct parameters', async () => {
  const uri = 'https://example.com'
  const mockRpc = RendererWorker.registerMockRpc({
    'Main.openUri'() {},
  })
  await OpenUri.openUri(uri)
  expect(mockRpc.invocations).toEqual([["Main.openUri", uri, undefined, undefined]])
})

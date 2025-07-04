import { expect, jest, test } from '@jest/globals'
import * as OpenUri from '../src/parts/OpenUri/OpenUri.ts'
import * as RendererWorker from '../src/parts/RendererWorker/RendererWorker.ts'

test('openUri calls Main.openUri with correct parameters', async () => {
  const uri = 'https://example.com'
  const mockFn = jest.fn()
  const mockRpc = {
    invoke: mockFn,
  } as any
  RendererWorker.set(mockRpc)
  await OpenUri.openUri(uri)
  expect(mockFn).toHaveBeenCalledWith('Main.openUri', uri, undefined, undefined)
})

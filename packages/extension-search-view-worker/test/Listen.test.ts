import { beforeEach, expect, jest, test } from '@jest/globals'

beforeEach(() => {
  jest.resetAllMocks()
})

const mockCreate = jest.fn()

jest.unstable_mockModule('@lvce-editor/rpc', () => {
  return {
    WebWorkerRpcClient: {
      create: mockCreate,
    },
  }
})

const Listen = await import('../src/parts/Listen/Listen.ts')

test('listen', async () => {
  await Listen.listen()
  expect(mockCreate).toHaveBeenCalledWith({
    commandMap: expect.any(Object),
  })
})

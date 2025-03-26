import { expect, test, jest } from '@jest/globals'
import * as Terminate from '../src/parts/Terminate/Terminate.ts'

test('terminate calls globalThis.close', () => {
  const mockClose = jest.fn()
  globalThis.close = mockClose

  Terminate.terminate()
  expect(mockClose).toHaveBeenCalled()
})

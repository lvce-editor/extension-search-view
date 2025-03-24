import { expect, test, jest } from '@jest/globals'

jest.unstable_mockModule('../src/parts/Main/Main.ts', () => ({
  main: jest.fn(),
}))

const Main = await import('../src/parts/Main/Main.ts')

test('calls main function when imported', async () => {
  await import('../src/extensionSearchViewWorkerMain.ts')
  expect(Main.main).toHaveBeenCalledTimes(1)
})

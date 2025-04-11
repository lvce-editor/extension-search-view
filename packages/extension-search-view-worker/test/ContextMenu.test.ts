import { expect, test } from '@jest/globals'
import * as ContextMenu from '../src/parts/ContextMenu/ContextMenu.ts'

test.skip('show function validates input parameters', async () => {
  await expect(ContextMenu.show(100, 200, 1)).resolves.not.toThrow()
  await expect(ContextMenu.show(0, 0, 0)).resolves.not.toThrow()
})

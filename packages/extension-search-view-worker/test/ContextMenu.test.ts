import { expect, test } from '@jest/globals'
import * as ContextMenu from '../src/parts/ContextMenu/ContextMenu.ts'

test('show function validates input parameters', async () => {
  await expect(ContextMenu.show(100, 200, 1)).resolves.not.toThrow()
  await expect(ContextMenu.show(0, 0, 0)).resolves.not.toThrow()
})

test('show function throws for invalid parameters', async () => {
  await expect(ContextMenu.show(Number.NaN, 200, 1)).rejects.toThrow()
  await expect(ContextMenu.show(100, Number.NaN, 1)).rejects.toThrow()
  await expect(ContextMenu.show(100, 200, Number.NaN)).rejects.toThrow()
})

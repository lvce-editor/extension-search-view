import { expect, test } from '@jest/globals'
import * as GetRenderer from '../src/parts/GetRenderer/GetRenderer.ts'
import * as DiffType from '../src/parts/DiffType/DiffType.ts'
import * as RenderItems from '../src/parts/RenderItems/RenderItems.ts'
import * as RenderMessage from '../src/parts/RenderMessage/RenderMessage.ts'

test('returns renderItems renderer for RenderItems diff type', () => {
  const renderer = GetRenderer.getRenderer(DiffType.RenderItems)
  expect(renderer).toBe(RenderItems.renderItems)
})

test('returns renderMessage renderer for RenderMessage diff type', () => {
  const renderer = GetRenderer.getRenderer(DiffType.RenderMessage)
  expect(renderer).toBe(RenderMessage.renderMessage)
})

test('throws error for unknown diff type', () => {
  expect(() => GetRenderer.getRenderer(999)).toThrow('unknown renderer')
})

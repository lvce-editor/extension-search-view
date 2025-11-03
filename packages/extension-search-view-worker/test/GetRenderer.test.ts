import { expect, test } from '@jest/globals'
import * as DiffType from '../src/parts/DiffType/DiffType.ts'
import * as GetRenderer from '../src/parts/GetRenderer/GetRenderer.ts'
import { renderFocus } from '../src/parts/RenderFocus/RenderFocus.ts'
import { renderFocusContext } from '../src/parts/RenderFocusContext/RenderFocusContext.ts'
import * as RenderHeader from '../src/parts/RenderHeader/RenderHeader.ts'
import { renderItems2 } from '../src/parts/RenderItems2/RenderItems2.ts'
import * as RenderMessage from '../src/parts/RenderMessage/RenderMessage.ts'
import * as RenderScrollBar from '../src/parts/RenderScrollBar/RenderScrollBar.ts'
import * as RenderSearchValue from '../src/parts/RenderSearchValue/RenderSearchValue.ts'

test('returns renderHeader renderer for RenderHeader diff type', () => {
  const renderer = GetRenderer.getRenderer(DiffType.RenderHeader)
  expect(renderer).toBe(RenderHeader.renderHeader)
})

test('returns renderFocus renderer for RenderFocus diff type', () => {
  const renderer = GetRenderer.getRenderer(DiffType.RenderFocus)
  expect(renderer).toBe(renderFocus)
})

test('returns renderItems renderer for RenderItems diff type', () => {
  const renderer = GetRenderer.getRenderer(DiffType.RenderItems)
  expect(renderer).toBe(renderItems2)
})

test('returns renderScrollBar renderer for RenderScrollBar diff type', () => {
  const renderer = GetRenderer.getRenderer(DiffType.RenderScrollBar)
  expect(renderer).toBe(RenderScrollBar.renderScrollBar)
})

test('returns renderMessage renderer for RenderMessage diff type', () => {
  const renderer = GetRenderer.getRenderer(DiffType.RenderMessage)
  expect(renderer).toBe(RenderMessage.renderMessage)
})

test('returns renderSearchValue renderer for RenderSearchValue diff type', () => {
  const renderer = GetRenderer.getRenderer(DiffType.RenderSearchValue)
  expect(renderer).toBe(RenderSearchValue.renderSearchValue)
})

test('returns renderFocusContext renderer for RenderFocusContext diff type', () => {
  const renderer = GetRenderer.getRenderer(DiffType.RenderFocusContext)
  expect(renderer).toBe(renderFocusContext)
})

test('throws error for unknown diff type', () => {
  expect(() => GetRenderer.getRenderer(999)).toThrow('unknown renderer')
})

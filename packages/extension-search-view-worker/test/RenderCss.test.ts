import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { renderCss } from '../src/parts/RenderCss/RenderCss.ts'

test('returns SetCss command with uid and generated css', () => {
  const result = renderCss({ ...createDefaultState(), uid: 5 })
  expect(result[0]).toBe('Viewlet.setCss')
  expect(result[1]).toBe(5)
  expect(result[2]).toContain('.ExtensionSearchCompletionWidget')
})

test('positions completion widget from cursor offset', () => {
  const result = renderCss({ ...createDefaultState(), cursorOffset: 4, headerHeight: 41, width: 500 })
  expect(result[2]).toContain('left: 38px;')
  expect(result[2]).toContain('top: 31px;')
})

test('clamps completion widget to view width', () => {
  const result = renderCss({ ...createDefaultState(), cursorOffset: 100, width: 500 })
  expect(result[2]).toContain('left: 332px;')
})

test('includes scrollbar position', () => {
  const result = renderCss({ ...createDefaultState(), scrollBarHeight: 100, scrollBarY: 25.7 })
  expect(result[2]).toContain('height: 100px;')
  expect(result[2]).toContain('translate: 0 26px;')
})

test('includes list item offset', () => {
  const result = renderCss({ ...createDefaultState(), deltaY: 50, itemHeight: 24 })
  expect(result[2]).toContain('margin-top: -2px;')
})

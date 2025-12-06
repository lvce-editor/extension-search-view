import { expect, test } from '@jest/globals'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as GetScrollBarVirtualDom from '../src/parts/GetScrollBarVirtualDom/GetScrollBarVirtualDom.ts'
import * as MergeClassNames from '../src/parts/MergeClassNames/MergeClassNames.ts'
import * as Px from '../src/parts/Px/Px.ts'

test('returns empty array when scrollBarHeight is 0', () => {
  const result = GetScrollBarVirtualDom.getScrollBarVirtualDom(0, 0)
  expect(result).toEqual([])
})

test('returns empty array when scrollBarHeight is negative', () => {
  const result = GetScrollBarVirtualDom.getScrollBarVirtualDom(-10, 0)
  expect(result).toEqual([])
})

test('returns scrollbar virtual dom when scrollBarHeight is positive', () => {
  const scrollBarHeight = 100
  const scrollBarTop = 50
  const result = GetScrollBarVirtualDom.getScrollBarVirtualDom(scrollBarHeight, scrollBarTop)
  expect(result).toHaveLength(2)
  expect(result[0]).toEqual({
    childCount: 1,
    className: MergeClassNames.mergeClassNames(ClassNames.ScrollBar, ClassNames.ScrollBarSmall),
    onPointerDown: DomEventListenerFunctions.HandleScrollBarPointerDown,
    type: VirtualDomElements.Div,
  })
  expect(result[1]).toEqual({
    childCount: 0,
    className: ClassNames.ScrollBarThumb,
    height: Px.px(scrollBarHeight),
    translate: Px.position(0, scrollBarTop),
    type: VirtualDomElements.Div,
  })
})

test('returns scrollbar virtual dom with correct height and position', () => {
  const scrollBarHeight = 200
  const scrollBarTop = 150
  const result = GetScrollBarVirtualDom.getScrollBarVirtualDom(scrollBarHeight, scrollBarTop)
  expect(result[1].height).toBe('200px')
  expect(result[1].translate).toBe('0px 150px')
})

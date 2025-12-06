import { expect, test } from '@jest/globals'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as AriaRoles from '../src/parts/AriaRoles/AriaRoles.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as GetIconVirtualDom from '../src/parts/GetIconVirtualDom/GetIconVirtualDom.ts'

test('creates virtual dom node with default div type', () => {
  const result = GetIconVirtualDom.getIconVirtualDom('test')
  expect(result).toEqual({
    childCount: 0,
    className: `${ClassNames.MaskIcon} MaskIcontest`,
    role: AriaRoles.None,
    type: VirtualDomElements.Div,
  })
})

test('creates virtual dom node with custom type', () => {
  const result = GetIconVirtualDom.getIconVirtualDom('test', VirtualDomElements.Button)
  expect(result).toEqual({
    childCount: 0,
    className: `${ClassNames.MaskIcon} MaskIcontest`,
    role: AriaRoles.None,
    type: VirtualDomElements.Button,
  })
})

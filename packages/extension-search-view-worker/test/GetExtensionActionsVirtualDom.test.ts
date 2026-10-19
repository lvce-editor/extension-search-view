import { expect, test } from '@jest/globals'
import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as GetExtensionActionsVirtualDom from '../src/parts/GetExtensionActionsVirtualDom/GetExtensionActionsVirtualDom.ts'

test('renders a settings button for enabled extensions', () => {
  const result = GetExtensionActionsVirtualDom.getExtensionActionsVirtualDom('publisher.extension', false, false, 'enabled', 4)
  expect(result).toHaveLength(2)
  expect(result[1]).toMatchObject({
    ariaLabel: 'Extension settings',
    className: 'ExtensionListItemActionManage',
    name: '4',
    onClick: DomEventListenerFunctions.HandleSettingsButtonClick,
    type: VirtualDomElements.Button,
  })
})

test('preserves install action for extensions not installed', () => {
  const result = GetExtensionActionsVirtualDom.getExtensionActionsVirtualDom('publisher.extension', false, false, 'not-installed', 4)
  expect(result.some((node) => node.onClick === DomEventListenerFunctions.HandleInstall)).toBe(true)
})

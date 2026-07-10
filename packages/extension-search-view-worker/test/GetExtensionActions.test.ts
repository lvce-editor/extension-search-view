import { expect, test } from '@jest/globals'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as ExtensionStatus from '../src/parts/ExtensionStatus/ExtensionStatus.ts'
import * as GetExtensionActions from '../src/parts/GetExtensionActions/GetExtensionActions.ts'

test('returns install action for a not installed extension', () => {
  expect(GetExtensionActions.getExtensionActions(false, false, ExtensionStatus.NotInstalled)).toEqual([
    expect.objectContaining({ disabled: false, label: 'Install', onClick: DomEventListenerFunctions.HandleInstall }),
  ])
})

test('returns disabled installing action', () => {
  expect(GetExtensionActions.getExtensionActions(false, false, ExtensionStatus.Installing)).toEqual([
    expect.objectContaining({ disabled: true, label: 'Installing' }),
  ])
})

test('returns enable and uninstall actions for a disabled extension', () => {
  expect(GetExtensionActions.getExtensionActions(false, true, ExtensionStatus.Disabled).map((action) => action.label)).toEqual([
    'Enable',
    'Uninstall',
  ])
})

test('returns disable and uninstall actions for an enabled extension', () => {
  expect(GetExtensionActions.getExtensionActions(false, false, ExtensionStatus.Enabled).map((action) => action.label)).toEqual([
    'Disable',
    'Uninstall',
  ])
})

test('does not return uninstall for a builtin extension', () => {
  expect(GetExtensionActions.getExtensionActions(true, false, ExtensionStatus.Enabled).map((action) => action.label)).toEqual(['Disable'])
  expect(GetExtensionActions.getExtensionActions(true, true, ExtensionStatus.Disabled).map((action) => action.label)).toEqual(['Enable'])
})

test('returns disabled uninstalling action for a user extension', () => {
  expect(GetExtensionActions.getExtensionActions(false, false, ExtensionStatus.Uninstalling)).toEqual([
    expect.objectContaining({ disabled: true, label: 'Uninstalling' }),
  ])
})

test('does not return uninstalling action for a builtin extension', () => {
  expect(GetExtensionActions.getExtensionActions(true, false, ExtensionStatus.Uninstalling)).toEqual([])
})

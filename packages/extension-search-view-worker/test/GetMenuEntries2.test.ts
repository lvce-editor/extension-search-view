import { expect, test } from '@jest/globals'
import { MenuEntryId } from '@lvce-editor/constants'
import { getMenuEntries2 } from '../src/parts/GetMenuEntries2/GetMenuEntries2.ts'
import { getMenuEntries } from '../src/parts/GetMenuEntries/GetMenuEntries.ts'
import { getMenuEntriesFilter } from '../src/parts/GetMenuEntriesFilter/GetMenuEntriesFilter.ts'

test('returns filter menu entries when menuId is ExtensionSearchFilter', () => {
  const state = {
    allExtensions: [],
    assetDir: '',
    deltaY: 0,
    finalDeltaY: 0,
    focus: 0,
    focused: false,
    focusedIndex: 0,
    handleOffset: 0,
    headerHeight: 0,
    height: 0,
    initial: false,
    inputActions: [],
    inputSource: 0,
    itemHeight: 0,
    items: [],
    maxLineY: 0,
    message: '',
    minimumSliderSize: 0,
    minLineY: 0,
    negativeMargin: 0,
    placeholder: '',
    platform: 0,
    scrollBarActive: false,
    scrollBarHeight: 0,
    scrollBarY: 0,
    searchValue: '',
    size: 0,
    suggestOpen: false,
    uid: 0,
    width: 0,
    x: 0,
    y: 0,
  }
  const props = {
    menuId: MenuEntryId.ExtensionSearchFilter as 95,
  }
  const result = getMenuEntries2(state, props)
  expect(result).toEqual(getMenuEntriesFilter())
})

test('returns default menu entries when menuId is not ExtensionSearchFilter', () => {
  const state = {
    allExtensions: [],
    assetDir: '',
    deltaY: 0,
    finalDeltaY: 0,
    focus: 0,
    focused: false,
    focusedIndex: 0,
    handleOffset: 0,
    headerHeight: 0,
    height: 0,
    initial: false,
    inputActions: [],
    inputSource: 0,
    itemHeight: 0,
    items: [],
    maxLineY: 0,
    message: '',
    minimumSliderSize: 0,
    minLineY: 0,
    negativeMargin: 0,
    placeholder: '',
    platform: 0,
    scrollBarActive: false,
    scrollBarHeight: 0,
    scrollBarY: 0,
    searchValue: '',
    size: 0,
    suggestOpen: false,
    uid: 0,
    width: 0,
    x: 0,
    y: 0,
  }
  const props = {
    menuId: MenuEntryId.ManageExtension as 8,
  }
  const result = getMenuEntries2(state, props)
  expect(result).toEqual(getMenuEntries())
})

import { expect, test } from '@jest/globals'
import * as GetCommandIds from '../src/parts/GetCommandIds/GetCommandIds.ts'

test('returns the commandIds array', () => {
  expect(GetCommandIds.getCommandIds()).toEqual([
    'clearSearchResults',
    'closeSuggest',
    'focusFirst',
    'focusLast',
    'focusNext',
    'focusNextPage',
    'focusPrevious',
    'focusPreviousPage',
    'handleBlur',
    'handleClick',
    'handleContextMenu',
    'handleDisable',
    'handleFocus',
    'handleInput',
    'handleInstall',
    'handleScrollBarCaptureLost',
    'handleScrollBarClick',
    'handleScrollBarMove',
    'handleUninstall',
    'handleWheel',
    'openSuggest',
    'render',
    'saveState',
    'scrollDown',
    'selectIndex',
    'setDeltaY',
    'toggleSuggest',
    'handleScrollBarThumbPointerMove',
  ])
})

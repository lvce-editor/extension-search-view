import { expect, test } from '@jest/globals'
import * as GetKeyBindings from '../src/parts/GetKeyBindings/GetKeyBindings.ts'
import * as KeyCode from '../src/parts/KeyCode/KeyCode.ts'
import * as KeyModifier from '../src/parts/KeyModifier/KeyModifier.ts'
import * as WhenExpression from '../src/parts/WhenExpression/WhenExpression.ts'

test('returns array of key bindings', () => {
  const keyBindings = GetKeyBindings.getKeyBindings()
  expect(keyBindings).toEqual([
    {
      command: 'Extensions.focusFirst',
      key: KeyCode.Home,
      when: WhenExpression.FocusExtensions,
    },
    {
      command: 'Extensions.focusLast',
      key: KeyCode.End,
      when: WhenExpression.FocusExtensions,
    },
    {
      command: 'Extensions.focusPreviousPage',
      key: KeyCode.PageUp,
      when: WhenExpression.FocusExtensions,
    },
    {
      command: 'Extensions.focusNextPage',
      key: KeyCode.PageDown,
      when: WhenExpression.FocusExtensions,
    },
    {
      command: 'Extensions.focusPrevious',
      key: KeyCode.UpArrow,
      when: WhenExpression.FocusExtensions,
    },
    {
      command: 'Extensions.focusNext',
      key: KeyCode.DownArrow,
      when: WhenExpression.FocusExtensions,
    },
    {
      command: 'Extensions.handleClickCurrentButKeepFocus',
      key: KeyCode.Space,
      when: WhenExpression.FocusExtensions,
    },
    {
      command: 'Extensions.handleClickCurrent',
      key: KeyCode.Enter,
      when: WhenExpression.FocusExtensions,
    },
    {
      command: 'Extensions.toggleSuggest',
      key: KeyModifier.CtrlCmd | KeyCode.Space,
      when: WhenExpression.FocusExtensions,
    },
    {
      command: 'Extensions.scrollDown',
      key: KeyModifier.CtrlCmd | KeyCode.DownArrow,
      when: WhenExpression.FocusExtensions,
    },
  ])
})

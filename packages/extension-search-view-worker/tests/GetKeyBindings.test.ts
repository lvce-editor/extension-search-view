import { expect, test } from '@jest/globals'
import * as GetKeyBindings from '../src/parts/GetKeyBindings/GetKeyBindings'
import * as KeyCode from '../src/parts/KeyCode/KeyCode'
import * as KeyModifier from '../src/parts/KeyModifier/KeyModifier'
import * as WhenExpression from '../src/parts/WhenExpression/WhenExpression'

test('returns array of key bindings', () => {
  const keyBindings = GetKeyBindings.getKeyBindings()
  expect(keyBindings).toEqual([
    {
      key: KeyCode.Home,
      command: 'Extensions.focusFirst',
      when: WhenExpression.FocusExtensions,
    },
    {
      key: KeyCode.End,
      command: 'Extensions.focusLast',
      when: WhenExpression.FocusExtensions,
    },
    {
      key: KeyCode.PageUp,
      command: 'Extensions.focusPreviousPage',
      when: WhenExpression.FocusExtensions,
    },
    {
      key: KeyCode.PageDown,
      command: 'Extensions.focusNextPage',
      when: WhenExpression.FocusExtensions,
    },
    {
      key: KeyCode.UpArrow,
      command: 'Extensions.focusPrevious',
      when: WhenExpression.FocusExtensions,
    },
    {
      key: KeyCode.DownArrow,
      command: 'Extensions.focusNext',
      when: WhenExpression.FocusExtensions,
    },
    {
      key: KeyCode.Space,
      command: 'Extensions.handleClickCurrentButKeepFocus',
      when: WhenExpression.FocusExtensions,
    },
    {
      key: KeyCode.Enter,
      command: 'Extensions.handleClickCurrent',
      when: WhenExpression.FocusExtensions,
    },
    {
      key: KeyModifier.CtrlCmd | KeyCode.Space,
      command: 'Extensions.toggleSuggest',
      when: WhenExpression.FocusExtensions,
    },
    {
      key: KeyModifier.CtrlCmd | KeyCode.DownArrow,
      command: 'Extensions.scrollDown',
      when: WhenExpression.FocusExtensions,
    },
  ])
})

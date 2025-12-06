import type { KeyBinding } from '../KeyBinding/KeyBinding.ts'
import * as KeyCode from '../KeyCode/KeyCode.ts'
import * as KeyModifier from '../KeyModifier/KeyModifier.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const getKeyBindings = (): readonly KeyBinding[] => {
  return [
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
  ]
}

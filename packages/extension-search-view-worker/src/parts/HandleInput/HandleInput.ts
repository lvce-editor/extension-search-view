import type { AsyncCommandContext } from '@lvce-editor/viewlet-registry'
import type { State } from '../State/State.ts'
import * as FocusId from '../FocusId/FocusId.ts'
import { getCompletionItems } from '../GetCompletionItems/GetCompletionItems.ts'
import * as HandleChange from '../HandleChange/HandleChange.ts'
import * as InputSource from '../InputSource/InputSource.ts'

export const handleInputWithContext = async (
  context: AsyncCommandContext<State>,
  value: string,
  inputSource = InputSource.User,
  cursorOffset = value.length,
): Promise<void> => {
  const completionItems = getCompletionItems(value, cursorOffset)
  await HandleChange.handleChangeWithContext(context, {
    completionFocusedIndex: 0,
    completionItems,
    cursorOffset,
    focus: FocusId.Input,
    inputSource,
    searchValue: value,
    suggestOpen: inputSource === InputSource.User && completionItems.length > 0,
  })
}

export const handleInput = async (state: State, value: string, inputSource = InputSource.User, cursorOffset = value.length): Promise<State> => {
  const completionItems = getCompletionItems(value, cursorOffset)
  return HandleChange.handleChange(state, {
    completionFocusedIndex: 0,
    completionItems,
    cursorOffset,
    focus: FocusId.Input,
    inputSource,
    searchValue: value,
    suggestOpen: inputSource === InputSource.User && completionItems.length > 0,
  })
}

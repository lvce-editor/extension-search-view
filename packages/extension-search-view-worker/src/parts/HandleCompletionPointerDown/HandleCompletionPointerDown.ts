import type { State } from '../State/State.ts'
import { acceptCompletion } from '../AcceptCompletion/AcceptCompletion.ts'

export const handleCompletionPointerDown = (state: State, label: string): Promise<State> => {
  const { completionItems } = state
  if (completionItems.every((item) => item.label !== label)) {
    return Promise.resolve(state)
  }
  return acceptCompletion(state, label)
}

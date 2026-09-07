import type { State } from '../State/State.ts'
import { closeSuggest } from '../CloseSuggest/CloseSuggest.ts'
import { openSuggest } from '../OpenSuggest/OpenSuggest.ts'

export const toggleSuggest = (state: State): State => {
  const { suggestOpen } = state
  return suggestOpen ? closeSuggest(state) : openSuggest(state)
}

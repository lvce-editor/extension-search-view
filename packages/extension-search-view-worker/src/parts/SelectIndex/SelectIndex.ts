import type { State } from '../State/State.ts'

export const selectIndex = (state: State, index: number): State => {
  return {
    ...state,
    focusedIndex: index,
  }
}

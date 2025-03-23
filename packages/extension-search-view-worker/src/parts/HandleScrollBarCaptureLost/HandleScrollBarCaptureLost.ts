import type { State } from '../State/State.ts'

export const handleScrollBarCaptureLost = (state: State): State => {
  return {
    ...state,
    scrollBarActive: false,
  }
}

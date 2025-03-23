import type { State } from '../State/State.ts'
import { handleClick } from '../HandleClick/HandleClick.ts'

export const handleClickCurrent = (state: State): Promise<any> => {
  const { focusedIndex } = state
  return handleClick(state, focusedIndex)
}

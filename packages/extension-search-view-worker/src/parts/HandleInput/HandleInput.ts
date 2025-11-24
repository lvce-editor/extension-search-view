import type { State } from '../State/State.ts'
import { handleChange } from '../HandleChange/HandleChange.ts'
import * as InputSource from '../InputSource/InputSource.ts'

export const handleInput = async (state: State, value: string, inputSource = InputSource.User): Promise<State> => {
  return handleChange(state, {
    searchValue: value,
    inputSource,
  })
}

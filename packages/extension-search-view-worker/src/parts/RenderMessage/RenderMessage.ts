import type { State } from '../State/State.ts'
import * as RenderMethod from '../RenderMethod/RenderMethod.ts'

export const renderMessage = (newState: State): readonly any[] => {
  return [/* method */ RenderMethod.SetMessage, /* message */ newState.message]
}

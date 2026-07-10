import type { State } from '../State/State.ts'
import * as RenderTitle from '../RenderTitle/RenderTitle.ts'

export const renderTitleCommand = (newState: State): readonly any[] => {
  if (newState.parentUid === undefined) {
    return []
  }
  return ['Viewlet.send', newState.parentUid, 'setTitle', RenderTitle.renderTitle(newState)]
}

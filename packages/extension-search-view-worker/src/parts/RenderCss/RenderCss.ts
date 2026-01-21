import { ViewletCommand } from '@lvce-editor/constants'
import type { State } from '../State/State.ts'

const getCss = (state: State): string => {
  return ''
}

export const renderCss = (newState: State): readonly any[] => {
  const { uid } = newState
  const css = getCss(newState)
  return [ViewletCommand.SetCss, uid, css]
}

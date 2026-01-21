import { ViewletCommand } from '@lvce-editor/constants'
import type { State } from '../State/State.ts'
import { getCss } from '../GetCss/GetCss.ts'

export const renderCss = (newState: State): readonly any[] => {
  const { uid } = newState
  const css = getCss(newState)
  return [ViewletCommand.SetCss, uid, css]
}

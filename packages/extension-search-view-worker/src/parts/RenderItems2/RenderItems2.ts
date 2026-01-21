import { ViewletCommand } from '@lvce-editor/constants'
import type { State } from '../State/State.ts'
import { getExtensionsViewVirtualDom } from '../GetExtensionsViewVirtualDom/GetExtensionsViewVirtualDom.ts'

export const renderItems2 = (newState: State): readonly any[] => {
  const { initial, uid } = newState
  if (initial) {
    return [ViewletCommand.SetDom2, uid, []]
  }
  const dom = getExtensionsViewVirtualDom(newState)
  return [ViewletCommand.SetDom2, uid, dom]
}

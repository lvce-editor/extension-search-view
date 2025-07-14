import type { State } from '../State/State.ts'
import { getExtensionsViewVirtualDom } from '../GetExtensionsViewVirtualDom/GetExtensionsViewVirtualDom.ts'

export const renderItems2 = (newState: State): readonly any[] => {
  const dom = getExtensionsViewVirtualDom(newState)
  return ['Viewlet.setDom2', newState.uid, dom]
}

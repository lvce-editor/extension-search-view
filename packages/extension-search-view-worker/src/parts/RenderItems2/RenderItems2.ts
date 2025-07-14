import { getExtensionsViewVirtualDom } from '../GetExtensionsViewVirtualDom/GetExtensionsViewVirtualDom.ts'
import type { State } from '../State/State.ts'

export const renderItems2 = (newState: State): readonly any[] => {
  const dom = getExtensionsViewVirtualDom(newState)
  return ['Viewlet.setDom2', newState.uid, dom]
}

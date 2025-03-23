import type { State } from '../State/State.ts'
import * as GetExtensionsVirtualDom from '../GetExtensionsVirtualDom/GetExtensionsVirtualDom.ts'
import * as GetVisibleExtensions from '../GetVisibleExtensions/GetVisibleExtensions.ts'

export const renderItems = (newState: State): readonly any[] => {
  // TODO render extensions incrementally when scrolling
  const visibleExtensions = GetVisibleExtensions.getVisible(newState)
  const dom = GetExtensionsVirtualDom.getExtensionsVirtualDom(visibleExtensions)
  return ['setExtensionsDom', dom]
}

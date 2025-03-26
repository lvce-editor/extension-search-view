import type { ExtensionListItem } from '../ExtensionListItem/ExtensionListItem.ts'
import type { VisibleItem } from '../VisibleItem/VisibleItem.ts'

export const getVisibleItem = (
  item: ExtensionListItem,
  setSize: number,
  itemHeight: number,
  minLineY: number,
  relative: number,
  i: number,
  focusedIndex: number,
): VisibleItem => {
  // TODO use normal parameters
  const { publisher, description, icon, id, name } = item
  return {
    setSize,
    posInSet: i + 1,
    top: (i - minLineY) * itemHeight - relative,
    focused: i === focusedIndex,
    publisher,
    description,
    icon,
    id,
    name,
  }
}

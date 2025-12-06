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
  const { description, icon, id, name, publisher } = item
  return {
    description,
    focused: i === focusedIndex,
    icon,
    id,
    name,
    posInSet: i + 1,
    publisher,
    setSize,
    top: (i - minLineY) * itemHeight - relative,
  }
}

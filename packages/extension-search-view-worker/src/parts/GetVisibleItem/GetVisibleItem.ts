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
  const { builtin, description, disabled, icon, id, name, publisher, status } = item
  return {
    builtin,
    description,
    disabled,
    focused: i === focusedIndex,
    icon,
    id,
    index: i,
    name,
    posInSet: i + 1,
    publisher,
    setSize,
    status,
    top: (i - minLineY) * itemHeight - relative,
  }
}

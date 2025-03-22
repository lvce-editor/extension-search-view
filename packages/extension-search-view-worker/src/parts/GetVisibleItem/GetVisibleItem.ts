export const getVisibleItem = (
  item: any,
  setSize: number,
  itemHeight: number,
  minLineY: number,
  relative: number,
  i: number,
  focusedIndex: number,
): any => {
  return {
    ...item,
    setSize,
    posInSet: i + 1,
    top: (i - minLineY) * itemHeight - relative,
    focused: i === focusedIndex,
  }
}

export const getListIndex = (
  eventX: number,
  eventY: number,
  x: number,
  y: number,
  deltaY: number,
  itemHeight: number,
  headerHeight: number,
): number => {
  const relativeY = eventY - y - headerHeight + deltaY
  const index = Math.floor(relativeY / itemHeight)
  return index
}

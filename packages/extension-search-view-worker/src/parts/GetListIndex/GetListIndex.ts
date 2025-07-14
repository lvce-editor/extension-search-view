export const getListIndex = (
  eventX: number,
  eventY: number,
  x: number,
  y: number,
  deltaY: number,
  itemHeight: number,
  headerHeight: number,
): number => {
  const relativeDeltaY = deltaY % itemHeight
  const relativeY = eventY - y - headerHeight + relativeDeltaY
  console.log({ eventY, relativeY, headerHeight, relativeDeltaY })
  const index = Math.floor(relativeY / itemHeight)
  return index
}

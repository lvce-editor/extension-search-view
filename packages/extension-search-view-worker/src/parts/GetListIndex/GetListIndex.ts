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
  const relativeY = eventY - y - headerHeight + deltaY
  console.log({ eventY, relativeY })
  const index = Math.floor(relativeY / itemHeight)
  return index
}

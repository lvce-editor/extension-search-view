interface Result {
  readonly percent: number
  readonly handleOffset: number
}

export const getNewDeltaPercent = (height: number, scrollBarHeight: number, relativeY: number): Result => {
  const halfScrollBarHeight = scrollBarHeight / 2
  if (relativeY <= halfScrollBarHeight) {
    // clicked at top
    return {
      percent: 0,
      handleOffset: relativeY,
    }
  }
  if (relativeY <= height - halfScrollBarHeight) {
    // clicked in middle
    return {
      percent: (relativeY - halfScrollBarHeight) / (height - scrollBarHeight),
      handleOffset: halfScrollBarHeight,
    }
  }
  // clicked at bottom
  return {
    percent: 1,
    handleOffset: scrollBarHeight - height + relativeY,
  }
}

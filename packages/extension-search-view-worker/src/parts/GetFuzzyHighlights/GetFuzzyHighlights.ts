export const getFuzzyHighlights = (label: string, query: string): readonly number[] | undefined => {
  const lowerLabel = label.toLowerCase()
  const lowerQuery = query.toLowerCase()
  const matchedIndexes: number[] = []
  let labelIndex = 0
  for (const character of lowerQuery) {
    labelIndex = lowerLabel.indexOf(character, labelIndex)
    if (labelIndex === -1) {
      return undefined
    }
    matchedIndexes.push(labelIndex)
    labelIndex++
  }
  const highlights: number[] = []
  for (const index of matchedIndexes) {
    const lastEnd = highlights.at(-1)
    if (lastEnd === index) {
      highlights[highlights.length - 1] = index + 1
    } else {
      highlights.push(index, index + 1)
    }
  }
  return highlights
}

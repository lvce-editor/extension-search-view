import type { CompletionItem } from '../CompletionItem/CompletionItem.ts'
import { getCompletionRange } from '../GetCompletionRange/GetCompletionRange.ts'
import { getFuzzyHighlights } from '../GetFuzzyHighlights/GetFuzzyHighlights.ts'
import { Suggestions } from '../Suggestions/Suggestions.ts'

export const getCompletionItems = (value: string, cursorOffset: number): readonly CompletionItem[] => {
  const range = getCompletionRange(value, cursorOffset)
  if (!range) {
    return []
  }
  const items: CompletionItem[] = []
  for (const label of Suggestions) {
    const highlights = getFuzzyHighlights(label, range.query)
    if (highlights) {
      items.push({ highlights, label })
    }
  }
  return items
}

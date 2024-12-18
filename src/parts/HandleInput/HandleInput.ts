import * as ErrorHandling from '../ErrorHandling/ErrorHandling.ts'
import * as ViewletExtensionsStrings from '../ExtensionStrings/ExtensionStrings.ts'
import * as GetFinalDeltaY from '../GetFinalDeltaY/GetFinalDeltaY.ts'
import { getListHeight } from '../GetListHeight/GetListHeight.ts'
import * as GetNumberOfVisibleItems from '../GetNumberOfVisibleItems/GetNumberOfVisibleItems.ts'
import * as ScrollBarFunctions from '../ScrollBarFunctions/ScrollBarFunctions.ts'
import * as SearchExtensions from '../SearchExtensions/SearchExtensions.ts'
import type { State } from '../State/State.ts'

// TODO debounce
export const handleInput = async (state: State, value: string): Promise<State> => {
  try {
    const { allExtensions, itemHeight, minimumSliderSize, height } = state
    // TODO cancel ongoing requests
    // TODO handle errors
    const items = await SearchExtensions.searchExtensions(allExtensions, value)
    if (items.length === 0) {
      return {
        ...state,
        items,
        minLineY: 0,
        deltaY: 0,
        allExtensions,
        maxLineY: 0,
        scrollBarHeight: 0,
        finalDeltaY: 0,
        message: ViewletExtensionsStrings.noExtensionsFound(),
        searchValue: value,
        placeholder: ViewletExtensionsStrings.searchExtensionsInMarketPlace(),
      }
    }
    // @ts-ignore
    const listHeight = getListHeight(state)
    const total = items.length
    const contentHeight = total * itemHeight
    const scrollBarHeight = ScrollBarFunctions.getScrollBarSize(height, contentHeight, minimumSliderSize)
    const numberOfVisible = GetNumberOfVisibleItems.getNumberOfVisibleItems(listHeight, itemHeight)
    const maxLineY = Math.min(numberOfVisible, total)
    const finalDeltaY = GetFinalDeltaY.getFinalDeltaY(listHeight, itemHeight, total)
    return {
      ...state,
      items,
      minLineY: 0,
      deltaY: 0,
      allExtensions,
      maxLineY,
      scrollBarHeight,
      finalDeltaY,
      message: '',
      searchValue: value,
      placeholder: ViewletExtensionsStrings.searchExtensionsInMarketPlace(),
    }

    // TODO handle out of order responses (a bit complicated)
    // for now just assume everything comes back in order
  } catch (error) {
    await ErrorHandling.handleError(error)
    return {
      ...state,
      searchValue: value,
      message: `${error}`,
    }
  }
}

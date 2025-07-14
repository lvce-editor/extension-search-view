import type { State } from '../State/State.ts'
import * as ErrorHandling from '../ErrorHandling/ErrorHandling.ts'
import * as ViewletExtensionsStrings from '../ExtensionStrings/ExtensionStrings.ts'
import * as FocusId from '../FocusId/FocusId.ts'
import * as GetFinalDeltaY from '../GetFinalDeltaY/GetFinalDeltaY.ts'
import * as GetListHeight from '../GetListHeight/GetListHeight.ts'
import * as GetNumberOfVisibleItems from '../GetNumberOfVisibleItems/GetNumberOfVisibleItems.ts'
import * as GetScrollBarSize from '../GetScrollBarSize/GetScrollBarSize.ts'
import * as ScrollBarFunctions from '../ScrollBarFunctions/ScrollBarFunctions.ts'
import * as SearchExtensions from '../SearchExtensions/SearchExtensions.ts'

// TODO debounce
export const handleInput = async (state: State, value: string): Promise<State> => {
  try {
    const { allExtensions, itemHeight, minimumSliderSize, height, platform, assetDir, deltaY, headerHeight } = state
    // TODO cancel ongoing requests
    // TODO handle errors
    const items = await SearchExtensions.searchExtensions(allExtensions, value, platform, assetDir)
    if (items.length === 0) {
      return {
        ...state,
        allExtensions,
        deltaY: 0,
        finalDeltaY: 0,
        focus: FocusId.InputField,
        items,
        maxLineY: 0,
        message: ViewletExtensionsStrings.noExtensionsFound(),
        minLineY: 0,
        placeholder: ViewletExtensionsStrings.searchExtensionsInMarketPlace(),
        scrollBarHeight: 0,
        searchValue: value,
      }
    }
    const total = items.length
    const listHeight = GetListHeight.getListHeight(total, itemHeight, height)
    const contentHeight = total * itemHeight
    const scrollBarHeight = GetScrollBarSize.getScrollBarSize(height, contentHeight, minimumSliderSize)
    const numberOfVisible = GetNumberOfVisibleItems.getNumberOfVisibleItems(listHeight, itemHeight)
    const maxLineY = Math.min(numberOfVisible, total)
    const finalDeltaY = GetFinalDeltaY.getFinalDeltaY(listHeight, itemHeight, total)
    const scrollBarY = ScrollBarFunctions.getScrollBarY(0, finalDeltaY, height - headerHeight, scrollBarHeight)
    return {
      ...state,
      allExtensions,
      deltaY: 0,
      finalDeltaY,
      items,
      maxLineY,
      message: '',
      minLineY: 0,
      placeholder: ViewletExtensionsStrings.searchExtensionsInMarketPlace(),
      scrollBarHeight,
      scrollBarY,
      searchValue: value,
    }

    // TODO handle out of order responses (a bit complicated)
    // for now just assume everything comes back in order
  } catch (error) {
    // TODO send error to error worker
    await ErrorHandling.handleError(error)
    return {
      ...state,
      searchValue: value,
      message: `${error}`,
    }
  }
}

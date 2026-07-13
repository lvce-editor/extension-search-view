import type { AsyncCommandContext } from '@lvce-editor/viewlet-registry'
import type { State } from '../State/State.ts'
import * as ErrorHandling from '../ErrorHandling/ErrorHandling.ts'
import * as ExtensionLoading from '../ExtensionLoading/ExtensionLoading.ts'
import * as ViewletExtensionsStrings from '../ExtensionStrings/ExtensionStrings.ts'
import * as FocusId from '../FocusId/FocusId.ts'
import * as GetFinalDeltaY from '../GetFinalDeltaY/GetFinalDeltaY.ts'
import * as GetInputActions from '../GetInputActions/GetInputActions.ts'
import * as GetListHeight from '../GetListHeight/GetListHeight.ts'
import * as GetNumberOfVisibleItems from '../GetNumberOfVisibleItems/GetNumberOfVisibleItems.ts'
import * as GetScrollBarSize from '../GetScrollBarSize/GetScrollBarSize.ts'
import * as ScrollBarFunctions from '../ScrollBarFunctions/ScrollBarFunctions.ts'
import * as SearchExtensions from '../SearchExtensions/SearchExtensions.ts'

type SearchResult = Pick<
  State,
  'deltaY' | 'finalDeltaY' | 'focus' | 'inputActions' | 'items' | 'maxLineY' | 'message' | 'minLineY' | 'placeholder' | 'scrollBarHeight'
> &
  Partial<Pick<State, 'scrollBarY'>>

const requestVersions = new Map<number, number>()
const requestVersionGenerator = { value: 0 }

const getSearchResult = async (state: State): Promise<SearchResult> => {
  const { allExtensions, assetDir, headerHeight, height, itemHeight, minimumSliderSize, platform, searchValue } = state
  const value = searchValue.trim()
  const inputActions = GetInputActions.getInputActions(value.length > 0)
  const items = await SearchExtensions.searchExtensions(allExtensions, value, platform, assetDir)
  if (items.length === 0) {
    return {
      deltaY: 0,
      finalDeltaY: 0,
      focus: FocusId.Input,
      inputActions,
      items,
      maxLineY: 0,
      message: ViewletExtensionsStrings.noExtensionsFound(),
      minLineY: 0,
      placeholder: ViewletExtensionsStrings.searchExtensionsInMarketPlace(),
      scrollBarHeight: 0,
    }
  }
  const total = items.length
  const listHeight = GetListHeight.getListHeight(total, itemHeight, height - headerHeight)
  const scrollBarHeight = GetScrollBarSize.getScrollBarSize(listHeight, total * itemHeight, minimumSliderSize)
  const maxLineY = Math.min(GetNumberOfVisibleItems.getNumberOfVisibleItems(listHeight, itemHeight), total)
  const finalDeltaY = GetFinalDeltaY.getFinalDeltaY(listHeight, itemHeight, total)
  const scrollBarY = ScrollBarFunctions.getScrollBarY(0, finalDeltaY, listHeight, scrollBarHeight)
  return {
    deltaY: 0,
    finalDeltaY,
    focus: state.focus,
    inputActions,
    items,
    maxLineY,
    message: '',
    minLineY: 0,
    placeholder: ViewletExtensionsStrings.searchExtensionsInMarketPlace(),
    scrollBarHeight,
    scrollBarY,
  }
}

export const handleChangeWithContext = async (
  context: AsyncCommandContext<State>,
  update: Partial<State>,
  waitForExtensions = true,
): Promise<void> => {
  const { uid } = context.getState()
  if (waitForExtensions) {
    await ExtensionLoading.wait(uid)
  }
  const requestVersion = ++requestVersionGenerator.value
  requestVersions.set(uid, requestVersion)
  const requestState: State = {
    ...context.getState(),
    ...update,
    initial: false,
  }
  try {
    const result = await getSearchResult(requestState)
    await context.updateState((state) => {
      if (requestVersions.get(state.uid) !== requestVersion) {
        return state
      }
      return {
        ...state,
        ...update,
        initial: false,
        ...result,
      }
    })
  } catch (error) {
    await ErrorHandling.handleError(error)
    await context.updateState((state) => {
      if (requestVersions.get(state.uid) !== requestVersion) {
        return state
      }
      return {
        ...state,
        ...update,
        initial: false,
        message: error instanceof Error ? error.message : String(error),
      }
    })
  } finally {
    if (requestVersions.get(uid) === requestVersion) {
      requestVersions.delete(uid)
    }
  }
}

// TODO debounce
export const handleChange = async (state: State, update: Partial<State>): Promise<State> => {
  const fullNewState: State = {
    ...state,
    ...update,
  }
  try {
    const result = await getSearchResult(fullNewState)
    return {
      ...fullNewState,
      ...result,
    }
  } catch (error) {
    // TODO send error to error worker
    await ErrorHandling.handleError(error)
    return {
      ...fullNewState,
      message: error instanceof Error ? error.message : String(error),
    }
  }
}

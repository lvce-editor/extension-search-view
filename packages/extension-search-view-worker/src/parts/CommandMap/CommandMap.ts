import * as ClearSearchResults from '../ClearSearchResults/ClearSearchResults.ts'
import * as CloseSuggest from '../CloseSuggest/CloseSuggest.ts'
import * as Create from '../Create/Create.ts'
import * as Diff from '../Diff/Diff.ts'
import * as FocusFirst from '../FocusFirst/FocusFirst.ts'
import * as FocusIndex from '../FocusIndex/FocusIndex.ts'
import * as FocusLast from '../FocusLast/FocusLast.ts'
import * as FocusNext from '../FocusNext/FocusNext.ts'
import * as FocusNextPage from '../FocusNextPage/FocusNextPage.ts'
import * as FocusPreviousPage from '../FocusPreviousPage/FocusPreviousPage.ts'
import * as GetActions from '../GetActions/GetActions.ts'
import * as GetKeyBindings from '../GetKeyBindings/GetKeyBindings.ts'
import * as HandleBlur from '../HandleBlur/HandleBlur.ts'
import * as HandleClick from '../HandleClick/HandleClick.ts'
import * as HandleClickCurrent from '../HandleClickCurrent/HandleClickCurrent.ts'
import * as HandleClickCurrentButKeepFocus from '../HandleClickCurrentButKeepFocus/HandleClickCurrentButKeepFocus.ts'
import * as HandleContextMenu from '../HandleContextMenu/HandleContextMenu.ts'
import * as HandleDisable from '../HandleDisable/HandleDisable.ts'
import * as HandleEnable from '../HandleEnable/HandleEnable.ts'
import * as HandleFocus from '../HandleFocus/HandleFocus.ts'
import * as HandleInstall from '../HandleInstall/HandleInstall.ts'
import * as HandleScrollBarCaptureLost from '../HandleScrollBarCaptureLost/HandleScrollBarCaptureLost.ts'
import * as HandleScrollBarClick from '../HandleScrollBarClick/HandleScrollBarClick.ts'
import * as HandleScrollBarMove from '../HandleScrollBarMove/HandleScrollBarMove.ts'
import * as HandleUninstall from '../HandleUninstall/HandleUninstall.ts'
import * as HandleWheel from '../HandleWheel/HandleWheel.ts'
import * as LoadContent from '../LoadContent/LoadContent.ts'
import * as OpenSuggest from '../OpenSuggest/OpenSuggest.ts'
import * as Render2 from '../Render2/Render2.ts'
import * as Render from '../Render/Render.ts'
import * as RenderActions from '../RenderActions/RenderActions.ts'
import * as RenderEventListeners from '../RenderEventListeners/RenderEventListeners.ts'
import * as SaveState from '../SaveState/SaveState.ts'
import * as ScrollDown from '../ScrollDown/ScrollDown.ts'
import * as SearchExtensions from '../SearchExtensions/SearchExtensions.ts'
import * as SelectIndex from '../SelectIndex/SelectIndex.ts'
import * as SetDeltaY from '../SetDeltaY/SetDeltaY.ts'
import * as ToggleSuggest from '../ToggleSuggest/ToggleSuggest.ts'
import * as WrapCommand from '../WrapCommand/WrapCommand.ts'

export const commandMap = {
  'SearchExtensions.clearSearchResults': WrapCommand.wrapCommand(ClearSearchResults.clearSearchResults),
  'SearchExtensions.closeSuggest': WrapCommand.wrapCommand(CloseSuggest.closeSuggest),
  'SearchExtensions.create': Create.create,
  'SearchExtensions.diff': Diff.diff,
  'SearchExtensions.focusFirst': WrapCommand.wrapCommand(FocusFirst.focusFirst),
  'SearchExtensions.focusIndex': WrapCommand.wrapCommand(FocusIndex.focusIndex),
  'SearchExtensions.focusLast': WrapCommand.wrapCommand(FocusLast.focusLast),
  'SearchExtensions.focusNext': WrapCommand.wrapCommand(FocusNext.focusNext),
  'SearchExtensions.focusNextPage': WrapCommand.wrapCommand(FocusNextPage.focusNextPage),
  'SearchExtensions.focusPreviousPage': WrapCommand.wrapCommand(FocusPreviousPage.focusPreviousPage),
  'SearchExtensions.getActions': GetActions.getActions,
  'SearchExtensions.getKeyBindings': GetKeyBindings.getKeyBindings,
  'SearchExtensions.handleBlur': WrapCommand.wrapCommand(HandleBlur.handleBlur),
  'SearchExtensions.handleClick': WrapCommand.wrapCommand(HandleClick.handleClick),
  'SearchExtensions.handleClickCurrent': WrapCommand.wrapCommand(HandleClickCurrent.handleClickCurrent),
  'SearchExtensions.handleClickCurrentButKeepFocus': WrapCommand.wrapCommand(HandleClickCurrentButKeepFocus.handleClickCurrentButKeepFocus),
  'SearchExtensions.handleContextMenu': WrapCommand.wrapCommand(HandleContextMenu.handleContextMenu),
  'SearchExtensions.handleDisable': WrapCommand.wrapCommand(HandleDisable.handleDisable),
  'SearchExtensions.handleEnable': WrapCommand.wrapCommand(HandleEnable.handleEnable),
  'SearchExtensions.handleFocus': WrapCommand.wrapCommand(HandleFocus.handleFocus),
  'SearchExtensions.handleInstall': WrapCommand.wrapCommand(HandleInstall.handleInstall),
  'SearchExtensions.handleScrollBarCaptureLost': WrapCommand.wrapCommand(HandleScrollBarCaptureLost.handleScrollBarCaptureLost),
  'SearchExtensions.handleScrollBarClick': WrapCommand.wrapCommand(HandleScrollBarClick.handleScrollBarClick),
  'SearchExtensions.handleScrollBarMove': WrapCommand.wrapCommand(HandleScrollBarMove.handleScrollBarMove),
  'SearchExtensions.handleUninstall': WrapCommand.wrapCommand(HandleUninstall.handleUninstall),
  'SearchExtensions.handleWheel': WrapCommand.wrapCommand(HandleWheel.handleWheel),
  'SearchExtensions.loadContent': LoadContent.loadContent,
  'SearchExtensions.openSuggest': WrapCommand.wrapCommand(OpenSuggest.openSuggest),
  'SearchExtensions.render': Render.doRender,
  'SearchExtensions.render2': Render2.render2,
  'SearchExtensions.renderActions': RenderActions.renderActions,
  'SearchExtensions.renderEventListeners': RenderEventListeners.renderEventListeners,
  'SearchExtensions.saveState': SaveState.saveState,
  'SearchExtensions.scrollDown': WrapCommand.wrapCommand(ScrollDown.scrollDown),
  'SearchExtensions.searchExtensions': SearchExtensions.searchExtensions,
  'SearchExtensions.selectIndex': WrapCommand.wrapCommand(SelectIndex.selectIndex),
  'SearchExtensions.setDeltaY': WrapCommand.wrapCommand(SetDeltaY.setDeltaY),
  'SearchExtensions.toggleSuggest': WrapCommand.wrapCommand(ToggleSuggest.toggleSuggest),
}

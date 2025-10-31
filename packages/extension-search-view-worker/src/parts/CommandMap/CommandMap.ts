import { terminate } from '@lvce-editor/viewlet-registry'
import * as ClearSearchResults from '../ClearSearchResults/ClearSearchResults.ts'
import * as CloseSuggest from '../CloseSuggest/CloseSuggest.ts'
import { copyExtensionId } from '../CopyExtensionId/CopyExtensionId.ts'
import * as Create from '../Create/Create.ts'
import * as Diff2 from '../Diff2/Diff2.ts'
import * as Dispose from '../Dispose/Dispose.ts'
import * as WrapCommand from '../ExtensionSearchViewStates/ExtensionSearchViewStates.ts'
import * as FocusFirst from '../FocusFirst/FocusFirst.ts'
import * as FocusIndex from '../FocusIndex/FocusIndex.ts'
import * as FocusLast from '../FocusLast/FocusLast.ts'
import * as FocusNext from '../FocusNext/FocusNext.ts'
import * as FocusNextPage from '../FocusNextPage/FocusNextPage.ts'
import * as FocusPrevious from '../FocusPrevious/FocusPrevious.ts'
import * as FocusPreviousPage from '../FocusPreviousPage/FocusPreviousPage.ts'
import * as GetActions from '../GetActions/GetActions.ts'
import * as GetCommandIds from '../GetCommandIds/GetCommandIds.ts'
import * as GetKeyBindings from '../GetKeyBindings/GetKeyBindings.ts'
import * as GetMenuEntries from '../GetMenuEntries/GetMenuEntries.ts'
import * as HandleBlur from '../HandleBlur/HandleBlur.ts'
import * as HandleClick from '../HandleClick/HandleClick.ts'
import * as HandleClickAt from '../HandleClickAt/HandleClickAt.ts'
import * as HandleClickCurrent from '../HandleClickCurrent/HandleClickCurrent.ts'
import * as HandleClickCurrentButKeepFocus from '../HandleClickCurrentButKeepFocus/HandleClickCurrentButKeepFocus.ts'
import * as HandleContextMenu from '../HandleContextMenu/HandleContextMenu.ts'
import * as HandleDisable from '../HandleDisable/HandleDisable.ts'
import * as HandleEnable from '../HandleEnable/HandleEnable.ts'
import * as HandleFocus from '../HandleFocus/HandleFocus.ts'
import * as HandleInput from '../HandleInput/HandleInput.ts'
import * as HandleInstall from '../HandleInstall/HandleInstall.ts'
import * as HandleScrollBarCaptureLost from '../HandleScrollBarCaptureLost/HandleScrollBarCaptureLost.ts'
import * as HandleScrollBarClick from '../HandleScrollBarClick/HandleScrollBarClick.ts'
import * as HandleScrollBarMove from '../HandleScrollBarMove/HandleScrollBarMove.ts'
import * as HandleUninstall from '../HandleUninstall/HandleUninstall.ts'
import * as HandleWheel from '../HandleWheel/HandleWheel.ts'
import * as LoadContent from '../LoadContent/LoadContent.ts'
import * as OpenSuggest from '../OpenSuggest/OpenSuggest.ts'
import * as Render3 from '../Render3/Render3.ts'
import * as RenderActions from '../RenderActions/RenderActions.ts'
import * as RenderEventListeners from '../RenderEventListeners/RenderEventListeners.ts'
import * as RestoreState from '../RestoreState/RestoreState.ts'
import * as SaveState from '../SaveState/SaveState.ts'
import * as ScrollDown from '../ScrollDown/ScrollDown.ts'
import * as SearchExtensions from '../SearchExtensions/SearchExtensions.ts'
import * as SelectIndex from '../SelectIndex/SelectIndex.ts'
import * as SetDeltaY from '../SetDeltaY/SetDeltaY.ts'
import * as ToggleSuggest from '../ToggleSuggest/ToggleSuggest.ts'

export const commandMap = {
  'SearchExtensions.clearSearchResults': WrapCommand.wrapCommand(ClearSearchResults.clearSearchResults),
  'SearchExtensions.closeSuggest': WrapCommand.wrapCommand(CloseSuggest.closeSuggest),
  'SearchExtensions.create': Create.create,
  'SearchExtensions.diff2': Diff2.diff2,
  'SearchExtensions.dispose': Dispose.dispose,
  'SearchExtensions.focusFirst': WrapCommand.wrapCommand(FocusFirst.focusFirst),
  'SearchExtensions.focusIndex': WrapCommand.wrapCommand(FocusIndex.focusIndex),
  'SearchExtensions.focusLast': WrapCommand.wrapCommand(FocusLast.focusLast),
  'SearchExtensions.focusNext': WrapCommand.wrapCommand(FocusNext.focusNext),
  'SearchExtensions.focusNextPage': WrapCommand.wrapCommand(FocusNextPage.focusNextPage),
  'SearchExtensions.focusPreviousPage': WrapCommand.wrapCommand(FocusPreviousPage.focusPreviousPage),
  'SearchExtensions.focusPrevious': WrapCommand.wrapCommand(FocusPrevious.focusPrevious),
  'SearchExtensions.getActions': GetActions.getActions,
  'SearchExtensions.getCommandIds': GetCommandIds.getCommandIds,
  'SearchExtensions.getKeyBindings': GetKeyBindings.getKeyBindings,
  'SearchExtensions.getMenuEntries': GetMenuEntries.getMenuEntries,
  'SearchExtensions.handleBlur': WrapCommand.wrapCommand(HandleBlur.handleBlur),
  'SearchExtensions.handleClick': WrapCommand.wrapCommand(HandleClick.handleClick),
  'SearchExtensions.handleClickAt': WrapCommand.wrapCommand(HandleClickAt.handleClickAt),
  'SearchExtensions.handleClickCurrent': WrapCommand.wrapCommand(HandleClickCurrent.handleClickCurrent),
  'SearchExtensions.handleClickCurrentButKeepFocus': WrapCommand.wrapCommand(HandleClickCurrentButKeepFocus.handleClickCurrentButKeepFocus),
  'SearchExtensions.handleContextMenu': WrapCommand.wrapCommand(HandleContextMenu.handleContextMenu),
  'SearchExtensions.handleDisable': WrapCommand.wrapCommand(HandleDisable.handleDisable),
  'SearchExtensions.handleEnable': WrapCommand.wrapCommand(HandleEnable.handleEnable),
  'SearchExtensions.handleFocus': WrapCommand.wrapCommand(HandleFocus.handleFocus),
  'SearchExtensions.handleInput': WrapCommand.wrapCommand(HandleInput.handleInput),
  'SearchExtensions.handleInstall': WrapCommand.wrapCommand(HandleInstall.handleInstall),
  'SearchExtensions.handleScrollBarCaptureLost': WrapCommand.wrapCommand(HandleScrollBarCaptureLost.handleScrollBarCaptureLost),
  'SearchExtensions.handleScrollBarClick': WrapCommand.wrapCommand(HandleScrollBarClick.handleScrollBarClick),
  'SearchExtensions.handleScrollBarMove': WrapCommand.wrapCommand(HandleScrollBarMove.handleScrollBarMove),
  'SearchExtensions.handleScrollBarThumbPointerMove': WrapCommand.wrapCommand(HandleScrollBarMove.handleScrollBarMove),
  'SearchExtensions.handleUninstall': WrapCommand.wrapCommand(HandleUninstall.handleUninstall),
  'SearchExtensions.handleWheel': WrapCommand.wrapCommand(HandleWheel.handleWheel),
  'SearchExtensions.loadContent': WrapCommand.wrapCommand(LoadContent.loadContent),
  'SearchExtensions.openSuggest': WrapCommand.wrapCommand(OpenSuggest.openSuggest),
  'SearchExtensions.copyExtensionId': WrapCommand.wrapCommand(copyExtensionId),
  'SearchExtensions.render3': Render3.render3,
  'SearchExtensions.renderActions': RenderActions.renderActions,
  'SearchExtensions.renderEventListeners': RenderEventListeners.renderEventListeners,
  'SearchExtensions.restoreState': RestoreState.restoreState,
  'SearchExtensions.saveState': WrapCommand.wrapGetter(SaveState.saveState),
  'SearchExtensions.scrollDown': WrapCommand.wrapCommand(ScrollDown.scrollDown),
  'SearchExtensions.searchExtensions': SearchExtensions.searchExtensions,
  'SearchExtensions.selectIndex': WrapCommand.wrapCommand(SelectIndex.selectIndex),
  'SearchExtensions.setDeltaY': WrapCommand.wrapCommand(SetDeltaY.setDeltaY),
  'SearchExtensions.terminate': terminate,
  'SearchExtensions.toggleSuggest': WrapCommand.wrapCommand(ToggleSuggest.toggleSuggest),
}

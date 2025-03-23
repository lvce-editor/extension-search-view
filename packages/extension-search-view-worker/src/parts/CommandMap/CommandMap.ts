import * as ClearSearchResults from '../ClearSearchResults/ClearSearchResults.ts'
import * as CloseSuggest from '../CloseSuggest/CloseSuggest.ts'
import * as Create from '../Create/Create.ts'
import * as Diff from '../Diff/Diff.ts'
import * as FocusIndex from '../FocusIndex/FocusIndex.ts'
import * as GetActions from '../GetActions/GetActions.ts'
import * as GetKeyBindings from '../GetKeyBindings/GetKeyBindings.ts'
import * as HandleBlur from '../HandleBlur/HandleBlur.ts'
import * as HandleContextMenu from '../HandleContextMenu/HandleContextMenu.ts'
import * as HandleDisable from '../HandleDisable/HandleDisable.ts'
import * as HandleClick from '../HandleClick/HandleClick.ts'
import * as HandleEnable from '../HandleEnable/HandleEnable.ts'
import * as HandleFocus from '../HandleFocus/HandleFocus.ts'
import * as HandleInstall from '../HandleInstall/HandleInstall.ts'
import * as LoadContent from '../LoadContent/LoadContent.ts'
import * as OpenSuggest from '../OpenSuggest/OpenSuggest.ts'
import * as Render from '../Render/Render.ts'
import * as SaveState from '../SaveState/SaveState.ts'
import * as SearchExtensions from '../SearchExtensions/SearchExtensions.ts'
import * as SetDeltaY from '../SetDeltaY/SetDeltaY.ts'
import * as ToggleSuggest from '../ToggleSuggest/ToggleSuggest.ts'

export const commandMap = {
  'SearchExtensions.clearSearchResults': ClearSearchResults.clearSearchResults,
  'SearchExtensions.closeSuggest': CloseSuggest.closeSuggest,
  'SearchExtensions.create': Create.create,
  'SearchExtensions.diff': Diff.diff,
  'SearchExtensions.focusIndex': FocusIndex.focusIndex,
  'SearchExtensions.getActions': GetActions.getActions,
  'SearchExtensions.getKeyBindings': GetKeyBindings.getKeyBindings,
  'SearchExtensions.handleBlur': HandleBlur.handleBlur,
  'SearchExtensions.handleClick': HandleClick.handleClick,
  'SearchExtensions.handleContextMenu': HandleContextMenu.handleContextMenu,
  'SearchExtensions.handleDisable': HandleDisable.handleDisable,
  'SearchExtensions.handleEnable': HandleEnable.handleEnable,
  'SearchExtensions.handleFocus': HandleFocus.handleFocus,
  'SearchExtensions.handleInstall': HandleInstall.handleInstall,
  'SearchExtensions.loadContent': LoadContent.loadContent,
  'SearchExtensions.openSuggest': OpenSuggest.openSuggest,
  'SearchExtensions.render': Render.doRender,
  'SearchExtensions.saveState': SaveState.saveState,
  'SearchExtensions.searchExtensions': SearchExtensions.searchExtensions,
  'SearchExtensions.setDeltaY': SetDeltaY.setDeltaY,
  'SearchExtensions.toggleSuggest': ToggleSuggest.toggleSuggest,
}

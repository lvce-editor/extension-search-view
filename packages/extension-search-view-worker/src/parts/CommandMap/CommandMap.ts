import * as ClearSearchResults from '../ClearSearchResults/ClearSearchResults.ts'
import * as CloseSuggest from '../CloseSuggest/CloseSuggest.ts'
import * as Create from '../Create/Create.ts'
import * as FocusIndex from '../FocusIndex/FocusIndex.ts'
import * as GetKeyBindings from '../GetKeyBindings/GetKeyBindings.ts'
import * as HandleBlur from '../HandleBlur/HandleBlur.ts'
import * as HandleContextMenu from '../HandleContextMenu/HandleContextMenu.ts'
import * as HandleFocus from '../HandleFocus/HandleFocus.ts'
import * as LoadContent from '../LoadContent/LoadContent.ts'
import * as OpenSuggest from '../OpenSuggest/OpenSuggest.ts'
import * as Render from '../Render/Render.ts'
import * as SaveState from '../SaveState/SaveState.ts'
import * as SearchExtensions from '../SearchExtensions/SearchExtensions.ts'
import * as SetDeltaY from '../SetDeltaY/SetDeltaY.ts'
import * as ToggleSuggest from '../ToggleSuggest/ToggleSuggest.ts'

export const commandMap = {
  'SearchExtensions.clearSearchResults': ClearSearchResults.clearSearchResults,
  'SearchExtensions.handleFocus': HandleFocus.handleFocus,
  'SearchExtensions.create': Create.create,
  'SearchExtensions.getKeyBindings': GetKeyBindings.getKeyBindings,
  'SearchExtensions.loadContent': LoadContent.loadContent,
  'SearchExtensions.render': Render.doRender,
  'SearchExtensions.saveState': SaveState.saveState,
  'SearchExtensions.handleBlur': HandleBlur.handleBlur,
  'SearchExtensions.searchExtensions': SearchExtensions.searchExtensions,
  'SearchExtensions.openSuggest': OpenSuggest.openSuggest,
  'SearchExtensions.closeSuggest': CloseSuggest.closeSuggest,
  'SearchExtensions.focusIndex': FocusIndex.focusIndex,
  'SearchExtensions.toggleSuggest': ToggleSuggest.toggleSuggest,
  'SearchExtensions.setDeltaY': SetDeltaY.setDeltaY,
  'SearchExtensions.handleContextMenu': HandleContextMenu.handleContextMenu,
}

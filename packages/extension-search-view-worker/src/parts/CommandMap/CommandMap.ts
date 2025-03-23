import * as ClearSearchResults from '../ClearSearchResults/ClearSearchResults.ts'
import * as Create from '../Create/Create.ts'
import * as GetKeyBindings from '../GetKeyBindings/GetKeyBindings.ts'
import * as LoadContent from '../LoadContent/LoadContent.ts'
import * as Render from '../Render/Render.ts'
import * as SaveState from '../SaveState/SaveState.ts'
import * as SearchExtensions from '../SearchExtensions/SearchExtensions.ts'

export const commandMap = {
  'SearchExtensions.clearSearchResults': ClearSearchResults.clearSearchResults,
  'SearchExtensions.create': Create.create,
  'SearchExtensions.getKeyBindings': GetKeyBindings.getKeyBindings,
  'SearchExtensions.loadContent': LoadContent.loadContent,
  'SearchExtensions.render': Render.doRender,
  'SearchExtensions.saveState': SaveState.saveState,
  'SearchExtensions.searchExtensions': SearchExtensions.searchExtensions,
}

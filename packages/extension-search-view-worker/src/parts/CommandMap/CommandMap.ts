import * as ClearSearchResults from '../ClearSearchResults/ClearSearchResults.ts'
import * as Create from '../Create/Create.ts'
import * as GetKeyBindings from '../GetKeyBindings/GetKeyBindings.ts'
import * as Render from '../Render/Render.ts'
import * as SearchExtensions from '../SearchExtensions/SearchExtensions.ts'

export const commandMap = {
  'SearchExtensions.clearSearchResults': ClearSearchResults.clearSearchResults,
  'SearchExtensions.create': Create.create,
  'SearchExtensions.getKeyBindings': GetKeyBindings.getKeyBindings,
  'SearchExtensions.render': Render.doRender,
  'SearchExtensions.searchExtensions': SearchExtensions.searchExtensions,
}

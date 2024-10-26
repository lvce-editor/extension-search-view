import * as ClearSearchResults from '../ClearSearchResults/ClearSearchResults.ts'
import * as Render from '../Render/Render.ts'
import * as SearchExtensions from '../SearchExtensions/SearchExtensions.ts'

export const commandMap = {
  'SearchExtensions.searchExtensions': SearchExtensions.searchExtensions,
  'SearchExtensions.render': Render.doRender,
  'SearchExtensions.clearSearchResults': ClearSearchResults.clearSearchResults,
}

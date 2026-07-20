import { VirtualDomElements } from '@lvce-editor/virtual-dom-worker'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as ExtensionStrings from '../ExtensionStrings/ExtensionStrings.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

const extensionListItemMetadataNode: VirtualDomNode = {
  childCount: 2,
  className: ClassNames.ExtensionListItemMetadata,
  type: VirtualDomElements.Div,
}

const getStatisticVirtualDom = (label: string, value: string, className: string): readonly VirtualDomNode[] => {
  const accessibleLabel = `${label}: ${value}`
  return [
    {
      ariaLabel: accessibleLabel,
      childCount: 1,
      className: MergeClassNames.mergeClassNames(ClassNames.ExtensionListItemStatistic, className),
      title: accessibleLabel,
      type: VirtualDomElements.Span,
    },
    text(value),
  ]
}

export const getExtensionStatisticsVirtualDom = (downloadCount: string, rating: string): readonly VirtualDomNode[] => {
  return [
    extensionListItemMetadataNode,
    ...getStatisticVirtualDom(ExtensionStrings.downloads(), downloadCount, ClassNames.ExtensionListItemDownloadCount),
    ...getStatisticVirtualDom(ExtensionStrings.rating(), rating, ClassNames.ExtensionListItemRating),
  ]
}

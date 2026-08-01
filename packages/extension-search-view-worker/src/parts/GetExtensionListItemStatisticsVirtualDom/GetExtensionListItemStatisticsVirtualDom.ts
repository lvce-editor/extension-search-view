import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import { getExtensionStatisticsVirtualDom } from '../GetExtensionStatisticsVirtualDom/GetExtensionStatisticsVirtualDom.ts'

export const getExtensionListItemStatisticsVirtualDom = (
  hasStatistics: boolean,
  downloadCount: string,
  rating: string,
): readonly VirtualDomNode[] => {
  if (!hasStatistics) {
    return []
  }
  return getExtensionStatisticsVirtualDom(downloadCount, rating)
}

export const getIsFirefox = (): boolean => {
  const globalWithNavigator = globalThis as typeof globalThis & { readonly navigator?: { readonly userAgent: string } }
  return globalWithNavigator.navigator?.userAgent.toLowerCase().includes('firefox') ?? false
}

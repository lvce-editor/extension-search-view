import { extensionCategories } from '../ExtensionCategories/ExtensionCategories.ts'

export const CategorySuggestions = extensionCategories.map((category) => `@category:"${category.toLowerCase()}"`)

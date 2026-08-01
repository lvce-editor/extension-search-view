const replace = (content, occurrence, replacement) => {
  if (!content.includes(occurrence) && !content.includes(replacement)) {
    throw new Error('extension detail builtin expression not found')
  }
  return content.includes(occurrence) ? content.replace(occurrence, replacement) : content
}

export const patchExtensionDetailWorker = (content) => {
  const legacyBuiltinExpression = 'extension?.isBuiltin || extension?.builtin || false'
  const builtinExpression = "extension?.isBuiltin || extension?.builtin || extension?.id?.startsWith('builtin') || false"
  if (!content.includes(legacyBuiltinExpression) && !content.includes(builtinExpression)) {
    throw new Error('extension detail builtin expression not found')
  }
  content = content.replaceAll(legacyBuiltinExpression, builtinExpression)

  const legacyHeaderExpression = 'const isBuiltin = extension?.builtin;'
  const builtinHeaderExpression = "const isBuiltin = extension?.builtin || extension?.id?.startsWith('builtin');"
  return replace(content, legacyHeaderExpression, builtinHeaderExpression)
}

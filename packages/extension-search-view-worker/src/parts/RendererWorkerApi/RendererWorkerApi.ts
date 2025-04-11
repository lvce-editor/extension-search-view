export interface RendererWorkerApi {
  readonly 'Main.openUri': (uri: string) => Promise<void>
  readonly 'Focus.setFocus': (focusId: number) => Promise<string>
  readonly 'ExtensionManagement.getAllExtensions': () => Promise<readonly any[]>
  readonly 'ContextMenu.show': (x: number, y: number, id: number) => Promise<void>
}

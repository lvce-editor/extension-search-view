export interface RendererWorkerApi {
  readonly 'Main.openUri': (uri: string) => Promise<void>
  readonly 'Focus.setFocus': (focusId: number) => Promise<string>
}

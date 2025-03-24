Z
export interface UidStateHandler {
  (uid: number, ...args: readonly any[]): Promise<void>
}

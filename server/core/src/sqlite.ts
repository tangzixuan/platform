export interface SqlStorage {
  exec: <T extends Record<string, SqlStorageValue>>(
    query: string,
    ...bindings: any[]
  ) => SqlStorageCursor<T>
  get databaseSize(): number
  Cursor: typeof SqlStorageCursor
  Statement: typeof SqlStorageStatement
}
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export declare abstract class SqlStorageStatement {}
type SqlStorageValue = ArrayBuffer | string | number | null
export declare abstract class SqlStorageCursor<
  T extends Record<string, SqlStorageValue>,
> {
  next ():
  | {
    done?: false
    value: T
  }
  | {
    done: true
    value?: never
  }
  toArray (): T[]
  one (): T
  raw<U extends SqlStorageValue[]>(): IterableIterator<U>
  get columnNames (): string[]
  get rowsRead (): number
  get rowsWritten (): number;
  [Symbol.iterator] (): IterableIterator<T>
}

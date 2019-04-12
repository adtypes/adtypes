export interface ISetoid<T extends ISetoid<T>> {
  equals(a: T): boolean
}

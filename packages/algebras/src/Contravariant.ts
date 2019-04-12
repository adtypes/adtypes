export interface IContravariant<T> {
  contramap<U>(f: (value: U) => T): IContravariant<U>
}

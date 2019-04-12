export interface ISemigroupoid<T> {
  compose<U>(f: (value: T) => ISemigroupoid<U>): ISemigroupoid<U>
}

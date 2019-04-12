export interface IFunctor<T> {
  map<U>(f: (value: T) => U): IFunctor<U>
}

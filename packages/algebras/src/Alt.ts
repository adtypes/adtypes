import { IFunctor } from './Functor'

export interface IAlt<T> extends IFunctor<T> {
  alt(value: IAlt<T>): IAlt<T>
}

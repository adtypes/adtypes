import { IFunctor } from './Functor'

export interface IApply<T> extends IFunctor<T> {
  ap<U>(other: IApply<(value: T) => U>): IApply<U>
}

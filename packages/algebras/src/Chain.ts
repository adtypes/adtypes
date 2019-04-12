import { IApply } from './Apply'

export interface IChain<T> extends IApply<T> {
  chain<U>(f: (value: T) => IChain<U>): IChain<U>
}

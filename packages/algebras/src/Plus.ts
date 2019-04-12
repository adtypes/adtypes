import { IAlt } from './Alt'

export interface IPlus<T> extends IAlt<T> {
  zero(): IPlus<T>
}

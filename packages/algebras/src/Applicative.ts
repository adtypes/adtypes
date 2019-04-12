import { IApply } from './Apply'

export interface IApplicative<T> extends IApply<T> {
  of(value: T): IApplicative<T>
}

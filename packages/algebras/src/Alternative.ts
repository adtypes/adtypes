import { IPlus } from './Plus'
import { IApplicative } from './Applicative'

export interface IAlternative<T> extends IPlus<T>, IApplicative<T> {}

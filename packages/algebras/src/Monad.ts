import { IChain } from './Chain'
import { IApplicative } from './Applicative'

export interface IMonad<T> extends IApplicative<T>, IChain<T> {}

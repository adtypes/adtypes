import {
  // IApplicative,
  // IApply,
  // IChain,
  // ISemigroupoid,
  IFunctor,
  // IMonad,
  ISetoid,
  IShow,
} from '@adtypes/algebras'

export class Id<T>
  implements
    IShow,
    IFunctor<T>,
    // IChain<T>,
    // IApply<T>,
    // ISemigroupoid<T>,
    // IApplicative<T>,
    // IMonad<T>,
    ISetoid<Id<T>> {

  public static of<T>(value: T): Id<T> {
    return new Id(value)
  }

  constructor(private readonly value: T) {}

  /** Returns the value stored in `this` */
  // public extract(): T {
  //   return this.value
  // }

  public toJSON(): T {
    return this.value
  }

  public inspect(): string {
    return `Id(${this.value})`
  }

  public toString(): string {
    return this.inspect()
  }

  // /** Applies a function to the value stored in `this` */
  public map<U>(f: (value: T) => U): Id<U> {
    return new Id(f(this.value))
  }

  // /** Transforms `this` with a function that returns an `Id` */
  // public chain<U>(f: (value: T) => Id<U>): Id<U> {
  //   return f(this.value)
  // }

  // /** Applies a function stored in Id to the value in `this` */
  // public ap<U>(f: Id<(value: T) => U>): Id<U> {
  //   return Id(f.value(this.value))
  // }

  // /** Compares the value in `this` with the value in the other `Id` */
  public equals(other: Id<T>): boolean {
    return this.value === other.value
  }
}

import { Id } from '../'

describe('Id', () => {
  describe('Setoid', () => {
    it('Reflexivity', () => {
      const a = Id.of(1)
      expect(a.equals(a)).toBe(true)
    })
    it('Symmetry', () => {
      const a = Id.of(1)
      const b = Id.of(1)
      expect(a.equals(b) === b.equals(a)).toBe(true)
    })
    it('Transitivity', () => {
      const a = Id.of(1)
      const b = Id.of(1)
      const c = Id.of(1)
      expect((a.equals(b) === b.equals(c)) === a.equals(c)).toBe(true)
    })
  })

  describe('Functor', () => {
    it('Identity', () => {
      const a = Id.of(1)
      expect(a.map((x) => x)).toEqual(a)
    })
  })
  // describe('Chain', () => {
  //   it('Associativity', () => {
  //     const a = Id.of(1)
  //     expect(a.chain((x) => Id.of(x))).toEqual(a)
  //   })
  // })
})

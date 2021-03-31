import { toArray } from './array'

describe(`Transform array`, () => {
  it(`toArray`, () => {
    expect(toArray(1)).toStrictEqual([1])
    expect([1]).toStrictEqual([1])
  })
})

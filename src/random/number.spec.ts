import { random } from './number'

describe(`Random number`, () => {
  it(`random`, () => {
    expect(random(2, 3)).toBeGreaterThanOrEqual(2)
    expect(random(2, 3)).toBeLessThan(3)

    expect(random(5)).toBeGreaterThanOrEqual(0)
    expect(random(5)).toBeLessThan(5)
  })
})

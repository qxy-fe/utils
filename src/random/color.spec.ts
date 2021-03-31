import { randomHexColor } from './color'

describe(`Random color`, () => {
  it(`randomHexColor`, () => {
    const RE_HEX_COLOR = /^#[0-9a-f]{6}$/
    expect(randomHexColor()).toMatch(RE_HEX_COLOR)
  })
})

/**
 * @file random number
 * @module random/number
 * @author ntnyq <https://github.com/ntnyq>
 */

/**
 * Random a number by given range
 * @param min range min
 * @param max range max
 * @returns a random number
 */
export function random(min: number, max?: number) {
  if (!max) {
    min = 0
    max = min
  }

  return ~~(Math.random() * (max - min)) + min
}

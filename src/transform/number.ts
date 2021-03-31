/**
 * @file transform of array
 * @module transform/array
 * @author ntnyq <https://github.com/ntnyq>
 */

/**
 * Transform given value to number
 * @param val given value
 * @returns given value or number
 */
export function toNumber(val: any): any {
  const n = parseFloat(val)

  return isNaN(n) ? val : n
}

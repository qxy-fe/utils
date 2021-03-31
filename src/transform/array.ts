/**
 * @file transform of array
 * @module transform/array
 * @author ntnyq <https://github.com/ntnyq>
 */

/**
 * Wrap given value in an array
 * @param val given value
 * @returns wrapped array
 */
export function toArray(val: unknown) {
  if (Array.isArray(val)) return val
  return [val]
}

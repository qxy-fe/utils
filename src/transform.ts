/**
 * Wrap value to an array
 * @param value given value
 */
export function toArray(value: any) {
  if (Array.isArray(value)) return value
  return [value]
}

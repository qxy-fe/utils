/**
 * @file random color
 * @module random/color
 * @author ntnyq <https://github.com/ntnyq>
 */

/**
 * Random a hex color
 * @returns a hex color
 */
export const randomHexColor = () => `#${Math.random().toString(16).slice(-6)}`

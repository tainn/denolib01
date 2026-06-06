import { randomInt } from "node:crypto";

/**
 * Random integer between two integer parameters, inclusive
 *
 * @example
 * ```ts
 * const dice = randint(1, 6)
 * ```
 */
export function randint(min: number, max: number): number | null {
  if (Number.isNaN(min) || Number.isNaN(max)) {
    return null;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return randomInt(min, max + 1);
}

/**
 * Sum of elements from a single iterable parameter
 *
 * @example
 * ```ts
 * sum([5, 10, 15])
 * ```
 */
export function sum(iterable: Iterable<number>): number {
  let total = 0;

  for (const value of iterable) {
    total += value;
  }

  return total;
}

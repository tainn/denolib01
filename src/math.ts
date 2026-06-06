export function sum(iterable: Iterable<number>): number {
  let total = 0;

  for (const value of iterable) {
    total += value;
  }

  return total;
}

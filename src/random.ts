import { randomInt } from "node:crypto";

export function randint(min: number, max: number): number | null {
  if (Number.isNaN(min) || Number.isNaN(max)) {
    return null;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return randomInt(min, max);
}

export const HOURS_PER_DAY = 24;
export const DAYS_PER_MONTH = 30;

export function generateArray(x: number, fillingNumber: number = 0) {
  return Array.from({ length: x }, () => fillingNumber);
}

export function generate3DArray(
  x: number,
  y: number,
  z: number,
  fillingNumber: number = 0
) {
  return Array.from({ length: x }, () =>
    Array.from({ length: y }, () =>
      Array.from({ length: z }, () => fillingNumber)
    )
  );
}

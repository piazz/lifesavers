export const random = (a: number, b?: number) => {
  let start: number, end: number

  if ((b === undefined && a < 1) || (b !== undefined && b <= a)) {
    throw new Error("Invalid range")
  }

  if (b !== undefined) {
    start = a
    end = b
  } else {
    start = 0
    end = a
  }

  return Math.floor(Math.random() * (end - start) + start)
}

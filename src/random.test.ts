import { random } from "./random"

test("picks a number between given range when start and end are specified", () => {
  const res = random(5, 300)
  expect(res).toBeGreaterThanOrEqual(5)
  expect(res).toBeLessThan(300)
})

test("picks a number between 0 and end when 1 number is specified", () => {
  const res = random(0, 5)
  expect(res).toBeGreaterThanOrEqual(0)
  expect(res).toBeLessThan(5)
})

test("invalid ranges", () => {
  expect(() => random(0)).toThrow()
  expect(() => random(-1)).toThrow()
  expect(() => random(1, 1)).toThrow()
  expect(() => random(2, 1)).toThrow()
})

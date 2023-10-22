import { describe, expect, test } from 'vitest'

const sum = (a: number, b: number): number => a + b;

type TestData = {
  a: number;
  b: number;
  expected: number;
}

const testData: TestData[] = [
  {
    a: 1,
    b: 1,
    expected: 2
  },
  {
    a: 3,
    b: 2,
    expected: 5
  }
]

describe.runIf(true)("describe.runIf", () => {
  test.each(testData)("test.each: sum $a + $b = $expected", ({ a, b, expected }) => {
    expect(sum(a, b)).toEqual(expected);
  })
})

describe.shuffle("describe.concurrent", () => {
  test.skipIf(true).each(testData)("test.skipIf.each: sum $a + $b = $expected", ({ a, b, expected }) => {
    expect(sum(a, b)).toEqual(expected);
  })
})
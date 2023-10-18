import { describe, expectTypeOf, test } from 'vitest'
import { KeysSameAsValues } from './types'

/**
 * @privateRemarks types
 */
describe("common types", () => {
  test("map object so keys are the same as values", () => {
    type TestData = {
      firstName: string;
      lastName: string;
      age: number;
    }
    type Expected = {
      firstName: "firstName";
      lastName: "lastName";
      age: "age";
    }
    expectTypeOf<KeysSameAsValues<TestData>>().toMatchTypeOf<Expected>()
  })
})
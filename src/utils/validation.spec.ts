import { test, expect } from "vitest";
import { isRequired, isRequiredLength } from "./validation";

/**
 * @deprecated
 */
test("value is not required", () => {
  expect(isRequired("")).toEqual(false);
})

/**
 * @deprecated
 */
test("value is required", () => {
  expect(isRequired("Waluigi")).toEqual(true);
})

/**
 * @beta
 * @internal
 */
test("value is not required length", () => {
  expect(isRequiredLength(4, "Luigi")).toEqual(false);
})
/**
 * @beta
 * @internal
 */
test("value is required length", () => {
  expect(isRequiredLength(7, "Waluigi")).toEqual(true);
})

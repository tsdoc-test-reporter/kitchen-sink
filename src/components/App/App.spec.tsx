import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { App } from "components/App/App";

/**
 * @remarks ui
 */
describe("App", () => {
  /**
   * @remarks accessibility
   */
  test("render h1 title", () => {
    render(<App />)
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Title")
  })
  /**
   * @flaky
   */
  test.skip("render app", () => {
    render(<App />)
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Title")
  })

  test.todo("render complex accordion with checkboxes that somehow also are buttons", () => {
    expect(true).toEqual(true)
  })
})
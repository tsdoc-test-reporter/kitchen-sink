import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { App } from "components/App/App";

describe("App", () => {
  /**
   * @remarks
   * accessibility,ui
   */
  test("render h1 title", () => {
    render(<App />)
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("@test")
  })
  /**
   * @parsesCustomTagsLikeThis
   */
  test.skip("this is a skipped test", () => {
    render(<App />)
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Title")
  })

  test.todo("this is a todo test")

  /**
   * @remarks
   * convert this to icon
   */
  test("this is a failing test", () => {
    const test = { content: "fail" };
    console.log(test)
    expect(true).toBeFalsy()
  })
})
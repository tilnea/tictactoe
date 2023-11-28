import { describe, expectTypeOf, it, vi, expect } from "vitest";
import { isDiagonalCell } from "./utils";

describe("Cheking if diagonal cell ", () => {
  it("should return true if cell is diagonal", () => {
    expect(isDiagonalCell(0, 1)).toBe(false);
  });
});

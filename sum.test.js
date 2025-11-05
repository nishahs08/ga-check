import { describe, it, expect } from "vitest";
import { twoSum } from "./sum";

describe("twoSum", () => {
  it("should add 2 to given number", () => {
    expect(twoSum(2)).toEqual(4);
    expect(twoSum(4)).toEqual(6);
    expect(twoSum(0)).toEqual(2);
  });

  it("should handle non-number values", () => {
    expect(() => twoSum(undefined)).toThrowError(
      "Not all numbers are of type number"
    );

    expect(() => twoSum(null)).toThrowError(
      "Not all numbers are of type number"
    );
  });
});

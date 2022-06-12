import { isBrowser } from "app/utils/isBrowser";

describe("isBrowser", () => {
  it("should return true if window is defined", () => {
    expect(isBrowser()).toBeTruthy();
  });
});

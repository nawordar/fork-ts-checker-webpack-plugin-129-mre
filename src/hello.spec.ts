import { hello } from "./hello";

describe("hello", () => {
  it("returns expected value", () => {
    const received = hello();
    expect(received).toEqual("Hello world");
  });
});

import sayHello from "./main";

it("says hello", () => {
  expect(sayHello("Bob")).toBe("Hello, Bob");
});

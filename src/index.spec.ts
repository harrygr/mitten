import sayHello from "./index";

it("says hello to a person", () => {
  expect(sayHello("Bob")).toBe("Hello, Bob");
});

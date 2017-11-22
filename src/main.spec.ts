import sayHello from "./main";

it("says hello to a person", () => {
  expect(sayHello("Bob")).toBe("Hello, Bob");
});

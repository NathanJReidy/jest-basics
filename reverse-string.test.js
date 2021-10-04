const reverseString = require("./reverse-string");

test("takes a string and returns it reversed", () => {
  expect(reverseString("example")).toBe("elpmaxe");
});

test("takes a string with spaces and returns it reversed", () => {
  expect(reverseString("example sentence")).toBe("ecnetnes elpmaxe");
});

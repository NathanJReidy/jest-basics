const capitalise = require("../src/capitalise");

test("return first character of string capitalised", () => {
  expect(capitalise("this is an example string")).toBe("T");
});

const capitalise = require("./capitalise");

test("return first character of string capitalised", () => {
  expect(capitalise("this is an example string")).toBe("T");
});

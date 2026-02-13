import { tokenize } from "../lexer.js";
import { parse } from "../parser.js";

describe("Step 2 - Values & Arrays", () => {
  test("parses strings", () => {
    expect(parse(tokenize('"hello"'))).toBe("hello");
  });

  test("parses numbers", () => {
    expect(parse(tokenize("123"))).toBe(123);
  });

  test("parses booleans", () => {
    expect(parse(tokenize("true"))).toBe(true);
  });

  test("parses array", () => {
    expect(parse(tokenize("[1,2,3]"))).toEqual([1,2,3]);
  });
});

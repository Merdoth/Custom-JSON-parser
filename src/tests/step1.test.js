import { tokenize } from "../lexer.js";
import { parse } from "../parser.js";

describe("Step 1 - Basic Objects", () => {
  test("parses empty object", () => {
    const result = parse(tokenize("{}"));
    expect(result).toEqual({});
  });

  test("parses simple object", () => {
    const result = parse(tokenize('{"a":"b"}'));
    expect(result).toEqual({ a: "b" });
  });
});

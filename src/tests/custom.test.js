import { tokenize } from "../lexer.js";
import { parse } from "../parser.js";

describe("Custom Tests", () => {
  test("nested object", () => {
    const input = '{"user":{"name":"Meya","age":27}}';
    const result = parse(tokenize(input));

    expect(result).toEqual({
      user: {
        name: "Meya",
        age: 27
      }
    });
  });

  test("array of objects", () => {
    const input = '[{"a":1},{"b":2}]';
    const result = parse(tokenize(input));

    expect(result).toEqual([
      { a: 1 },
      { b: 2 }
    ]);
  });
});

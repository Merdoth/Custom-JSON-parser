import { tokenize } from "./lexer";
import { parse } from "./parser";


const input = {};

try {
  const tokens = tokenize(input);
  const result = parse(tokens);

  console.log("Valid JSON:", result);
} catch (err) {
  console.error("Invalid JSON:", err.message);
}
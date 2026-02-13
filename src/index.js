import { tokenize } from "./lexer.js";
import { parse } from "./parser.js";


// const input = "{}";
const input = '{"key":"value"}';


try {
  const tokens = tokenize(input);
  const result = parse(tokens);

  console.log("Valid JSON:", result);
} catch (err) {
  console.error("Invalid JSON:", err.message);
}
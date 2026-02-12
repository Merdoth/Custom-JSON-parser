
export function parser(tokens) {
  let position = 0;

  function expect(type) {
    const token = tokens[position];

    if (!token || token.type !== type) {
      throw new Error(`Expected ${type}`);
    }

    position++;
    return token;
  }

  // JSON must start with {
  expect("LBRACE");

  // JSON must end with }
  expect("RBRACE");

  // No extra tokens allowed
  if (position !== tokens.length) {
    throw new Error("Unexpected tokens after JSON end");
  }

  return {};
}
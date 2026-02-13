
export function parse(tokens) {
  let position = 0;

  function expect(type) {
    const token = tokens[position];

    if (!token || token.type !== type) {
      throw new Error(`Expected ${type}`);
    }

    position++;
    return token;
  }

  function parseObj() {
    const obj = {};

    // JSON must start with {
    expect("LBRACE");

    if (tokens[position].type === "RBRACE") {
      expect("RBRACE");
      return obj;
    }

    const key = expect('STRING').value;
    expect("COLON");
    
    // For simplicity, we only support string values in this example
    const value = expect('STRING').value;
    obj[key] = value;

    expect("RBRACE");
    return obj;
  }

  // // No extra tokens allowed
  // if (position !== tokens.length) {
  //   throw new Error("Unexpected tokens after JSON end");
  // }

  return parseObj();
}
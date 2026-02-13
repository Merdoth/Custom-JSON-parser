export function parse(tokens) {
  let position = 0;

  function expect(type) {
    const token = tokens[position];

    if (!token || token.type !== type) {
      throw new Error(`Expected ${type} but got ${token?.type}`);
    }

    position++;
    return token;
  }

  function parseValue() {
    const token = tokens[position];

    if (!token) {
      throw new Error("Unexpected end of input");
    }

    if (token.type === "STRING") {
      position++;
      return token.value;
    }

    if (token.type === "NUMBER") {
      position++;
      return token.value;
    }

    if (token.type === "BOOLEAN") {
      position++;
      return token.value;
    }

    if (token.type === "NULL") {
      position++;
      return null;
    }

    if (token.type === "LBRACE") {
      return parseObject();
    }

    if (token.type === "LBRACKET") {
      return parseArray();
    }

    throw new Error(`Invalid value: ${token.type}`);
  }

  function parseObject() {
    const obj = {};

    expect("LBRACE");

    // Handle empty object {}
    if (tokens[position]?.type === "RBRACE") {
      expect("RBRACE");
      return obj;
    }

    while (true) {
      const key = expect("STRING").value;
      expect("COLON");

      const value = parseValue();
      obj[key] = value;

      if (tokens[position]?.type === "COMMA") {
        expect("COMMA");
        continue;
      }

      break;
    }

    expect("RBRACE");
    return obj;
  }

  function parseArray() {
    const arr = [];

    expect("LBRACKET");

    // Handle empty array []
    if (tokens[position]?.type === "RBRACKET") {
      expect("RBRACKET");
      return arr;
    }

    while (true) {
      const value = parseValue();
      arr.push(value);

      if (tokens[position]?.type === "COMMA") {
        expect("COMMA");
        continue;
      }

      break;
    }

    expect("RBRACKET");
    return arr;
  }

  const result = parseValue();

  if (position !== tokens.length) {
    throw new Error("Unexpected extra tokens after valid JSON");
  }

  return result;
}

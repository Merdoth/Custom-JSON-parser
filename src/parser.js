
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

    throw new Error("Invalid value");
  }

  function parseObj() {
    const obj = {};

    expect("LBRACE");

    // Handle empty object {}
    if (tokens[position].type === "RBRACE") {
      expect("RBRACE");
      return obj;
    }

    while (true) {
      const key = expect("STRING").value;
      expect("COLON");

      const value = parseValue(); // ✅ USE parseValue
      obj[key] = value;

      // If comma → continue
      if (tokens[position]?.type === "COMMA") {
        expect("COMMA");
        continue;
      }

      break; // no comma → done
    }

    expect("RBRACE");
    return obj;
  }

  return parseObj();
}
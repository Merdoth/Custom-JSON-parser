
export function tokenize(input) {
  const tokens = [];
  let i = 0;

  while (i < input.length) {
    const char = input[i];
    
    // let's ignore whitespaces
    if (char === " " || char === "\n" || char === "\t") {
      i++;
      continue;
    }
    
    // Characters
    if (char === "{") {
      tokens.push({ type: "LBRACE", value: "{" });
      i++;
      continue;
    }

    if (char === "}") {
      tokens.push({ type: "RBRACE", value: "}" });
      i++;
      continue; 
    }

    // Strings
    if (char === '"') {
      let value = "";
      i++;

      while (input[i] !== '"') {
        if (i >= input.length) {
          throw new Error("Unterminated string");
        }
        value += input[i];
        i++;
      }

      i++;
      tokens.push({ type: "STRING", value });
      continue;
    }

    if (char === ":") {
      tokens.push({ type: "COLON", value: ":" });
      i++;
      continue;
    }

    if (char === ",") {
      tokens.push({ type: "COMMA", value: "," });
      i++;
      continue;
    }

    // Numbers
    if (/0-9/.test(char)) {
      let num = "";

      while (/0-9/.test(input[i])) {
        num += input[i];
        i++;
      }
      tokens.push({ type: "NUMBER", value: Number(num)});
    }

    // Booleans
    if (input.startsWith("true", i)) {
      tokens.push({ type: "BOOLEAN", value: true });
      i += 4;
      continue;
    }

    if (input.startsWith("false", i)) {
      tokens.push({ type: "BOOLEAN", value: false });
      i += 5;
      continue;
    }

    // Null
    if (input.startsWith("null", i)) {
      tokens.push({ type: "NULL", value: null });
      i += 4;
      continue;
    }

    throw new Error(`Unexpected character: ${char}`);
  }

  return tokens;
}
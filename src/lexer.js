
export function tokenize(input) {
  const tokens = [];
  let i = 0;

  while (i < input.length) {
    const character = input[i];
    
    // let's ignore whitespaces
    if (character === " " || character === "\n" || character === "\t") {
      i++;
      continue;
    }
    
    // Characters
    if (character === "{") {
      tokens.push({ type: "LBRACE", value: "{" });
      i++;
      continue;
    }

    if (character === "}") {
      tokens.push({ type: "RBRACE", value: "}" });
      i++;
      continue; 
    }

    // Strings
  if (character === '"') {
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

  if (character === ":") {
    tokens.push({ type: "COLON", value: ":" });
    i++;
    continue;
  }

  if (character === ",") {
    tokens.push({ type: "COMMA", value: "," });
    i++;
    continue;
  }

    throw new Error('Unexpected character: ${character}');
  }

  return tokens;
}
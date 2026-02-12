
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

    throw new Error('Unexpected character: ${character}');
  }

  return tokens;
}
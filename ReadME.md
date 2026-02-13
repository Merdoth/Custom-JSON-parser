# JSON Parser Implementation

A complete JSON parser built from scratch using ES6 JavaScript.

A **JSON parser** has two main jobs:

** **Lexer** (Tokenizer) which reads raw text character-by-character, and groups characters into tokens like: {, }, :, "string", true, 123 (Think of it as cutting words out of a sentence).

** **Parser** which takes tokens, checks if they follow JSON grammar rules, and builds a JavaScript object (Think of it as checking if the sentence makes sense).

## Features
- Step-by-step implementation following the challenge requirements
- Full ES6 syntax (classes, arrow functions, modules)
- CLI tool with proper exit codes
- Comprehensive test suite

## Installation
```bash
git clone <repo-url>
cd custom-json-parser
npm install

```

## Usage
```bash

# Run all tests
npm test

# Run specific step
npm run test:step1
npm run test:step2
# etc.

# Run custom tests
npm run test:custom

```

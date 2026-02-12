# JSON Parser Implementation

A complete JSON parser built from scratch using ES6 JavaScript.

## Features
- Step-by-step implementation following the challenge requirements
- Full ES6 syntax (classes, arrow functions, modules)
- CLI tool with proper exit codes
- Comprehensive test suite

## Installation
```bash
git clone <repo-url>
cd json-parser-project
npm install

```

## Usage
```bash
# Parse a JSON file
node src/index.js path/to/file.json

# Pipe JSON via stdin
echo '{"key": "value"}' | node src/index.js

# Use as CLI tool (after npm link)
json-parser file.json

# Run all tests
npm test

# Run specific step
npm run test:step1
npm run test:step2
# etc.

# Run custom tests
npm run test:custom

```
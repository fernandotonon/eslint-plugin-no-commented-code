# ESLint Plugin - eslint-plugin-no-commented-code

An ESLint plugin to disallow commented-out code in JavaScript files.

## Installation

```bash
npm install eslint eslint-plugin-no-commented-code --save-dev
```

## Usage
Once you have installed the plugin, you need to add it to your ESLint configuration.

## Configuration
Create an `.eslintrc.yml` or `.eslintrc.js` configuration file in the root of your project (if you haven't already) and extend the plugin and define the rule:

```yaml
plugins:
  - "no-commented-code"
rules:
  no-commented-code/no-commented-code: error
```

The rule setting can be adjusted according to your needs. Possible configurations are:

"off" or 0 - turn the rule off
"warn" or 1 - turn the rule on as a warning (doesn't affect exit code)
"error" or 2 - turn the rule on as an error (exit code is 1 when triggered)

Example of turning the rule a warning instead of an error:

```yaml
rules:
  no-commented-code/no-commented-code: warn
```

## Use Cases

### Valid

The following test cases represent valid code or comments that should not trigger the rule:

```javascript
const name = "John";
function sayHello() { console.log("Hello"); }
if (x === 42) { /* do something */ }
const x = 10; /* some comment */
return result;
class MyClass {}
const sum = (a, b) => a + b;
const obj = { key: "value" };
const arr = [1, 2, 3];
console.log("Logging something");
// This is a valid comment
/*
    The code should return something like this:
    "Hello World"
*/
/* eslint-disable */ 
// import { add } from './test.js';
// const name = "John";
/* const age = 30; */
// if (condition) { /* do something */ }
/* eslint-enable */
```

### Invalid

The following test cases represent invalid code that should trigger the rule:

```javascript
// import { add } from './test.js';
// const name = "John";
/* const age = 30; */
// if (condition) { /* do something */ }
/* return value; */
// class Rectangle { /* class implementation */ }
/* const sum = (a, b) => a + b; */
// { key: "value" };
// [1, 2, 3];
// console.log("Debugging");
// expect(result).toBe(5);
```

## Disabling the Rule
In some cases, you may want to disable the rule for specific lines of code or blocks of code where commented-out code is intentional or necessary. To do this, you can use ESLint's comment directive syntax.

To disable the rule for a specific line, add the following comment before the line:

```javascript
// eslint-disable-next-line no-commented-code/no-commented-code
//const name = "John"; // This line will be ignored by the rule
```

To disable the rule for a block of code, use the following comments:
```javascript
/* eslint-disable */
// const name = "John";
// const age = 30;
/* eslint-enable */
```

The code within the block will be ignored by the rule. However, use these directives with caution and only when necessary, as it's generally best to avoid commented-out code and keep your codebase clean and maintainable.

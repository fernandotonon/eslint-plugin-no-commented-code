const { RuleTester } = require('eslint');
const rule = require('../rules/no-commented-code');

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 2021 },
});

ruleTester.run('no-commented-code', rule, {
  valid: [
    // Test cases with valid code (should not trigger the rule)
    'const name = "John";',
    'function sayHello() { console.log("Hello"); }',
    'if (x === 42) { /* do something */ }',
    'const x = 10; /* some comment */',
    'return result;',
    'class MyClass {}',
    'const sum = (a, b) => a + b;',
    'const obj = { key: "value" };',
    'const arr = [1, 2, 3];',
    'console.log("Logging something");',
    '// This is a valid comment',
    '/* eslint-disable */\n// Some code\n/* eslint-enable */',
  ],

  invalid: [
    // Test cases with invalid code (should trigger the rule)
    {
      code: '// const name = "John";',
      errors: [{ message: 'Commented-out code.' }],
    },
    {
      code: '/* const age = 30; */',
      errors: [{ message: 'Commented-out code.' }],
    },
    {
      code: '// if (condition) { /* do something */ }',
      errors: [{ message: 'Commented-out code.' }],
    },
    {
      code: '/* return value; */',
      errors: [{ message: 'Commented-out code.' }],
    },
    {
      code: '// class Rectangle { /* class implementation */ }',
      errors: [{ message: 'Commented-out code.' }],
    },
    {
      code: '/* const sum = (a, b) => a + b; */',
      errors: [{ message: 'Commented-out code.' }],
    },
    {
      code: '// { key: "value" };',
      errors: [{ message: 'Commented-out code.' }],
    },
    {
      code: '// [1, 2, 3];',
      errors: [{ message: 'Commented-out code.' }],
    },
    {
      code: '// console.log("Debugging");',
      errors: [{ message: 'Commented-out code.' }],
    },
  ],
});

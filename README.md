# ESLint Plugin - eslint-plugin-no-commented-out-code

An ESLint plugin to disallow commented-out code in JavaScript files.

## Installation

```bash
npm install --save-dev eslint-plugin-no-commented-out-code
```

## Usage
Once you have installed the plugin, you need to add it to your ESLint configuration.

## Configuration
Create an .eslintrc.yml or .eslintrc.js configuration file in the root of your project (if you haven't already) and extend the plugin and define the rule:

```yaml
plugins:
  - "no-commented-out-code"
rules:
  no-commented-out-code/no-commented-out-code: error
```
In this example, we are extending the @paciolan/react configuration (you can use any other configuration you prefer) and enabling the @fernandotonon/custom-rules/no-commented-out-code rule with an error level. The rule will now disallow commented-out code in your JavaScript files and report any instances of commented-out code as an error.

## Disabling the Rule
In some cases, you may want to disable the rule for specific lines of code or blocks of code where commented-out code is intentional or necessary. To do this, you can use ESLint's comment directive syntax.

To disable the rule for a specific line, add the following comment before the line:

```javascript
// eslint-disable-next-line no-commented-out-code
//const name = "John"; // This line will be ignored by the rule
```

To disable the rule for a block of code, use the following comments:
```javascript
/* eslint-disable no-commented-out-code */
// const name = "John";
// const age = 30;
/* eslint-enable no-commented-out-code */
```

The code within the block will be ignored by the rule. However, use these directives with caution and only when necessary, as it's generally best to avoid commented-out code and keep your codebase clean and maintainable.

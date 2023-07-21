// index.js

module.exports = {
    rules: {
      'no-commented-out-code': require('./lib/rules/no-commented-out-code'),
    },
    test: {
        'no-commented-out-code': require('./lib/tests/no-commented-out-code.test'),
    }
  };
  
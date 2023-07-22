// index.js

module.exports = {
    rules: {
      'no-commente-code': require('./lib/rules/no-commented-code'),
    },
    test: {
        'no-commented-code': require('./lib/tests/no-commented-code.test'),
    }
  };
  
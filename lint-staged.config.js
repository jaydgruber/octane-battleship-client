/* eslint-env node */

module.exports = {
  '**/*.js': 'eslint --fix',
  'app/**/*.hbs': 'ember-template-lint'
};

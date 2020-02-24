'use strict';

module.exports = {
  /**
  * cannot use prettier w/ template-lint 2.0 yet
  * ref: https://github.com/ember-template-lint/ember-template-lint/issues/1150
  */
  // plugins: ["ember-template-lint-plugin-prettier"],
  // extends: ["recommended", "ember-template-lint-plugin-prettier:recommended"],

  extends: ["octane", "stylistic"],
};
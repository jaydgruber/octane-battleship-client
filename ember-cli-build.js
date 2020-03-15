'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const tailwindcss = require('tailwindcss');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        plugins: [tailwindcss('./app/styles/tailwind.config.js')]
      }
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  const { Webpack } = require('@embroider/webpack');
  return require('@embroider/compat').compatBuild(app, Webpack, {
    // to enable route splitting, ref: https://github.com/embroider-build/embroider/blob/master/packages/core/src/options.ts#L26
    // splitAtRoutes: ['routeName', /routeNameRegex/],
    staticAddonTestSupportTrees: true,
    staticAddonTrees: true,
    staticHelpers: true,
    staticComponents: true,
    packagerOptions: {
      webpackConfig: {}
    }
  });
};

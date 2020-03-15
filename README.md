# octane-battleship-client

We are learning Ember Octane!

We are making a Battleship game while we do it!

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Ember CLI](https://ember-cli.com/)
- [Google Chrome](https://google.com/chrome/)

## Installation

- `git clone <repository-url>` this repository
- `cd octane-battleship-client`
- `npm install`

## Running / Development

- `npm start` runs `ember serve`
- Visit your app at [http://localhost:4200](http://localhost:4200).
- Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

- `npm run test:ember` runs `ember test`
- remember to passthrough flags with an extra dash: `npm run test:ember -- --server`

### Linting

- `npm run lint:hbs`
- `npm run lint:js`
- `npm run lint:js -- --fix`
- `npm run lint` runs all lint scripts using [npm-run-all](https://github.com/mysticatea/npm-run-all/blob/HEAD/docs/npm-run-all.md)

### Building

- `npx ember build` (development)
- `npm build` runs `ember build --environment production`

### Git hooks

- pre-commit - runs [lint-staged](https://github.com/okonet/lint-staged)
- pre-push - runs `npm run test` (also runs lint)

### Deploying

We do not deploy this application anywhere yet

## Further Reading / Useful Links

- [ember.js](https://emberjs.com/)
- [ember-cli](https://ember-cli.com/)
- Development Browser Extensions
  - [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  - [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

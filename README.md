stylelint-config-css
====================

The ComparaOnline [stylelint](https://stylelint.io) shareable configuration for CSS projects.

# Installation

First, you need stylelint, if it isn't installed yet...

```
$ npm install --save-dev stylelint
```

Then,

```
$ npm install --save-dev @comparaonline/stylelint-config-css
```

# Usage

Add this package into the `extends` section of your `.stylelintrc.js` file.

```js
{
  extends: '@comparaonline/stylelint-config-css'
}
```

Now you can execute `stylelint` in a npm script, as example:

```json
"scripts": {
  "lint:styles": "stylelint './app/**/*.scss'"
}
```

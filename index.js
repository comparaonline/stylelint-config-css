"use strict"

 module.exports = {
  "extends": "stylelint-config-standard",
  "plugins": [
    "stylelint-order"
  ],

  "rules": {
    "rule-empty-line-before": [
      "always-multi-line",
      {
        "except": ["first-nested"],
        "ignore": ["after-comment"]
      }
    ],

    "color-named": [
      "always-where-possible",
      { "ignore": ["inside-function"] }
    ],

    "at-rule-no-vendor-prefix": true,
    "declaration-no-important": true,
    "font-weight-notation": "numeric",
    "max-line-length": 80,
    "max-nesting-depth": 2,
    "media-feature-name-no-vendor-prefix": true,
    "order/properties-alphabetical-order": true,
    "property-no-vendor-prefix": true,
    "selector-max-compound-selectors": 2,
    "selector-no-id": true,
    "selector-no-vendor-prefix": true,
    "selector-pseudo-element-colon-notation": "double",
    "value-no-vendor-prefix": true
  }
 };

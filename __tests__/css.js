'use strict'

const config = require('../');
const stylelint = require('stylelint');

const invalidPropertyNoVendorPrefix = (
`.selector-1 {
  -webkit-transition: all 4s ease;
}
`);

const validPropertyNoVendorPrefix = (
`.selector-1 {
  transition: all 4s ease;
}
`);

const invalidSelectorNoVendorPrefix = (
`input::-moz-placeholder {
  color: transparent;
}
`);

const validSelectorNoVendorPrefix = (
`input::placeholder {
  color: transparent;
}
`);

const invalidValueNoVendorPrefix = (
`a {
  background: -webkit-linear-gradient(135deg, red, blue);
}
`);

const validValueNoVendorPrefix = (
`a {
  background: linear-gradient(135deg, red, blue);
}
`);

const tooLongLine = (
`div.a-super-super-long-selector-with-a-children > div.children-with-after::after {
  color: blue;
}
`
);

const validCompoundSelectorOrder = `
.selector > div { color: blue; }
`
const invalidCompoundSelectorOrder = `
.selector > div > span > span > { color: blue; }
`;

let result;

describe('vendor prefix', () => {
  describe('property-no-vendor-prefix', () => {
    it("fails", () => {
      result = stylelint.lint({ code: invalidPropertyNoVendorPrefix, config });
      return result.then(data => expect(data.errored).toBe(true));
    });

    it("passes", () => {
      result = stylelint.lint({ code: validPropertyNoVendorPrefix, config });
      return result.then(data => expect(data.errored).toBe(false));
    });
  });

  describe('selector-no-vendor-prefix', () => {
    it("fails", () => {
      result = stylelint.lint({ code: invalidSelectorNoVendorPrefix, config });
      return result.then(data => expect(data.errored).toBe(true));
    });

    it("passes", () => {
      result = stylelint.lint({ code: validSelectorNoVendorPrefix, config });
      return result.then(data => expect(data.errored).toBe(false));
    });
  });

  describe('value-no-vendor-prefix', () => {
    it("fails", () => {
      result = stylelint.lint({ code: invalidValueNoVendorPrefix, config });
      return result.then(data => expect(data.errored).toBe(true));
    });

    it("passes", () => {
      result = stylelint.lint({ code: validValueNoVendorPrefix, config });
      return result.then(data => expect(data.errored).toBe(false));
    });
  });
});

const invalidAlphabeticalOrder = (
`.selector {
  transition: all 4s ease;
  color: blue;
}
`);

const validAlphabeticalOrder = (
`.selector {
  color: blue;
  transition: all 4s ease;
}
`);

describe('order/properties-alphabetical-order', () => {
  it("fails", () => {
    result = stylelint.lint({ code: invalidAlphabeticalOrder, config });
    return result.then(data => expect(data.errored).toBe(true));
  });

  it("passes", () => {
    result = stylelint.lint({ code: validAlphabeticalOrder, config });
    return result.then(data => expect(data.errored).toBe(false));
  });
});


describe('max-line-length', () => {
  it("fails", () => {
    result = stylelint.lint({ code: tooLongLine, config });
    return result.then(data => expect(data.errored).toBe(true));
  });
});

describe('selector-max-compound-selectors', () => {
  it("fails", () => {
    result = stylelint.lint({ code: invalidCompoundSelectorOrder, config });
    return result.then(data => expect(data.errored).toBe(true));
  });

  it("passes", () => {
    result = stylelint.lint({ code: validCompoundSelectorOrder, config });
    return result.then(data => expect(data.errored).toBe(false));
  });
})



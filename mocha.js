module.exports = {
  extends: "./index.js",
  rules: {
    "object-curly-newline": [
      "error", {
        ObjectExpression: {
          multiline: true,
          minProperties: 1,
        },
      },
    ],
    "max-nested-callbacks": [
      "error", {
        max: 5,
      },
    ],
    "padded-blocks": [
      "error", "always", {
        allowSingleLineBlocks: true,
      },
    ],
    "function-paren-newline": ["error", "multiline"],
    "func-names": ["off"],
    "prefer-arrow-callback": ["off"],
    "no-magic-numbers": ["off"],
    "no-invalid-this": ["off"],
  },
}

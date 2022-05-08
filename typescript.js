module.exports = {
  extends: ["plugin:@typescript-eslint/recommended", "./index.js"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/adjacent-overload-signatures": ["error"],
    "@typescript-eslint/await-thenable": ["error"],
    "@typescript-eslint/ban-ts-comment": [
      "error", {
        "ts-expect-error": "allow-with-description",
        "ts-ignore": "allow-with-description",
        "ts-nocheck": "allow-with-description",
        "ts-check": "allow-with-description",
        minimumDescriptionLength: 8,
      },
    ],
    "@typescript-eslint/consistent-type-exports": [
      "error", {
        // eslint-disable-next-line id-length
        fixMixedExportsWithInlineTypeSpecifier: false,
      },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error", {
        prefer: "type-imports",
        disallowTypeAnnotations: true,
      },
    ],
    "@typescript-eslint/member-delimiter-style": [
      "error", {
        multiline: {
          delimiter: "none",
          requireLast: true,
        },
        singleline: {
          delimiter: "comma",
          requireLast: false,
        },
        multilineDetection: "brackets",
      },
    ],
    "@typescript-eslint/method-signature-style": ["error", "property"],
    "@typescript-eslint/no-floating-promises": ["error"],
    "@typescript-eslint/no-misused-promises": ["error"],
    "@typescript-eslint/no-non-null-assertion": ["error"],
    "@typescript-eslint/no-unsafe-argument": ["error"],
    "@typescript-eslint/no-unsafe-assignment": ["error"],
    "@typescript-eslint/no-unsafe-call": ["error"],
    "@typescript-eslint/no-unsafe-member-access": ["error"],
    "@typescript-eslint/no-unsafe-return": ["error"],
    "@typescript-eslint/prefer-reduce-type-parameter": ["error"],
    "@typescript-eslint/promise-function-async": ["error"],
    "@typescript-eslint/type-annotation-spacing": ["error"],
  },
}

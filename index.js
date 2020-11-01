/* eslint-disable max-lines */
module.exports = {
  extends: "eslint:recommended",
  env: {
    node: true,
    browser: true,
    es2021: true,
    worker: true
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  parser: "babel-eslint",
  rules: {
    "no-console": ["error"],
    "no-promise-executor-return": ["error"],
    "no-template-curly-in-string": ["error"],
    "no-unreachable-loop": ["error"],
    "require-atomic-updates": ["error"],
    "array-callback-return": ["error"],
    "block-scoped-var": ["error"],
    "class-methods-use-this": ["error"],
    complexity: [
      "error", {
        max: 5
      }
    ],
    "consistent-return": ["error"],
    "default-case": ["error"],
    "default-case-last": ["error"],
    "default-param-last": ["error"],
    curly: ["error"],
    "dot-location": ["error", "property"],
    "dot-notation": ["error"],
    eqeqeq: ["error"],
    "grouped-accessor-pairs": ["error"],
    "guard-for-in": ["error"],
    "max-classes-per-file": ["error"],
    "no-caller": ["error"],
    "no-constructor-return": ["error"],
    "no-else-return": ["error"],
    "no-empty-function": ["error"],
    "no-eq-null": ["error"],
    "no-eval": ["error"],
    "no-extend-native": ["error"],
    "no-extra-bind": ["error"],
    "no-floating-decimal": ["error"],
    "no-implicit-coercion": ["error"],
    "no-implied-eval": ["error"],
    "no-invalid-this": ["error"],
    "no-iterator": ["error"],
    "no-labels": ["error"],
    "no-lone-blocks": ["error"],
    "no-loop-func": ["error"],
    "no-magic-numbers": [
      "error", {
        ignoreDefaultValues: true
      }
    ],
    "no-multi-spaces": ["error"],
    "no-new": ["error"],
    "no-new-func": ["error"],
    "no-new-wrappers": ["error"],
    "no-octal-escape": ["error"],
    "no-param-reassign": ["error"],
    "no-proto": ["error"],
    "no-return-assign": ["error"],
    "no-return-await": ["error"],
    "no-script-url": ["error"],
    "no-self-compare": ["error"],
    "no-sequences": ["error"],
    "no-throw-literal": ["error"],
    "no-unmodified-loop-condition": ["error"],
    "no-unused-expressions": ["error"],
    "no-useless-call": ["error"],
    "no-useless-concat": ["error"],
    "no-useless-return": ["error"],
    "no-void": ["error"],
    "prefer-promise-reject-errors": ["error"],
    radix: ["error"],
    "require-await": ["error"],
    "require-unicode-regexp": ["error"],
    "wrap-iife": ["error", "inside"],
    yoda: ["error", "never"],
    "init-declarations": ["error", "always"],
    "no-label-var": ["error"],
    "no-shadow": ["error"],
    "no-undefined": ["error"],
    "array-bracket-newline": [
      "error", {
        multiline: true
      }
    ],
    "array-bracket-spacing": ["error", "never"],
    "array-element-newline": ["error", "consistent"],
    "block-spacing": ["error", "always"],
    "brace-style": [
      "error", "1tbs", {
        allowSingleLine: true
      }
    ],
    camelcase: ["error"],
    "capitalized-comments": ["error", "always"],
    "comma-dangle": ["error", "never"],
    "comma-spacing": [
      "error", {
        before: false,
        after: true
      }
    ],
    "comma-style": ["error", "last"],
    "computed-property-spacing": ["error", "never"],
    "consistent-this": ["error", "that"],
    "eol-last": ["error", "always"],
    "func-call-spacing": ["error", "never"],
    "func-names": ["error", "as-needed"],
    "func-style": ["error", "expression"],
    "function-call-argument-newline": ["error", "consistent"],
    "function-paren-newline": ["error", "multiline"],
    "id-length": [
      "error", {
        min: 2,
        max: 30
      }
    ],
    indent: [
      // eslint-disable-next-line no-magic-numbers
      "error", 2, {
        SwitchCase: 1,
        VariableDeclarator: "first",
        MemberExpression: 2,
        FunctionDeclaration: {
          body: 1,
          parameters: "first"
        },
        FunctionExpression: {
          body: 1,
          parameters: "first"
        },
        CallExpression: {
          arguments: "first"
        },
        ArrayExpression: "first",
        ObjectExpression: "first",
        ImportDeclaration: "first",
        offsetTernaryExpressions: true
      }
    ],
    "jsx-quotes": ["error", "prefer-double"],
    "key-spacing": [
      "error", {
        beforeColon: false,
        afterColon: true
      }
    ],
    "keyword-spacing": [
      "error", {
        before: true,
        after: true
      }
    ],
    "line-comment-position": [
      "error", {
        position: "above"
      }
    ],
    "linebreak-style": ["error", "unix"],
    "lines-around-comment": [
      "error", {
        beforeBlockComment: true,
        afterBlockComment: true,
        beforeLineComment: true,
        afterLineComment: false,
        allowArrayStart: true,
        allowObjectStart: true
      }
    ],
    "lines-between-class-members": ["error", "always"],
    "max-depth": [
      "error", {
        max: 3
      }
    ],
    "max-len": [
      "error", {
        ignoreUrls: true
      }
    ],
    "max-lines": [
      "error", {
        max: 250,
        skipBlankLines: true,
        skipComments: true
      }
    ],
    "max-lines-per-function": [
      "error", {
        max: 50,
        skipBlankLines: true,
        skipComments: true
      }
    ],
    "max-nested-callbacks": [
      "error", {
        max: 1
      }
    ],
    "max-params": [
      "error", {
        max: 3
      }
    ],
    "max-statements-per-line": [
      "error", {
        max: 1
      }
    ],
    "multiline-comment-style": ["error", "starred-block"],
    "newline-per-chained-call": [
      "error", {
        ignoreChainWithDepth: 1
      }
    ],
    "no-array-constructor": ["error"],
    "no-bitwise": ["error"],
    "no-continue": ["error"],
    "no-lonely-if": ["error"],
    "no-mixed-operators": ["error"],
    "no-multi-assign": ["error"],
    "no-multiple-empty-lines": ["error"],
    "no-negated-condition": ["error"],
    "no-nested-ternary": ["error"],
    "no-new-object": ["error"],
    "no-plusplus": [
      "error", {
        allowForLoopAfterthoughts: true
      }
    ],
    "no-restricted-syntax": [
      "error", {
        selector: "Identifier[name='then']",
        message: `Use async/await and not even think of using 
                    this identifier for something, you fool!`
      }
    ],
    "no-tabs": ["error"],
    "no-trailing-spaces": ["error"],
    "no-underscore-dangle": ["error"],
    "no-unneeded-ternary": ["error"],
    "no-whitespace-before-property": ["error"],
    "object-curly-newline": [
      "error", {
        ObjectExpression: "always",
        ObjectPattern: {
          multiline: true
        },
        ImportDeclaration: {
          consistent: true,
          minProperties: 3
        },
        ExportDeclaration: "always"
      }
    ],
    "object-curly-spacing": ["error", "always"],
    "one-var-declaration-per-line": ["error", "always"],
    "object-property-newline": ["error"],
    "operator-assignment": ["error", "always"],
    "operator-linebreak": ["error", "before"],
    "padded-blocks": ["error", "always"],
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "*",
        next: "return"
      },
      {
        blankLine: "always",
        prev: ["const", "let", "var"],
        next: "*"
      },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"]
      },
      {
        blankLine: "always",
        prev: ["case", "default"],
        next: "*"
      }
    ],
    "prefer-exponentiation-operator": ["error"],
    "prefer-object-spread": ["error"],
    "quote-props": ["error", "as-needed"],
    quotes: ["error", "double"],
    semi: ["error", "never"],
    "space-before-blocks": ["error", "always"],
    "space-before-function-paren": ["error", "always"],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": ["error"],
    "space-unary-ops": [
      "error", {
        words: true,
        nonwords: false
      }
    ],
    "spaced-comment": ["error", "always"],
    "switch-colon-spacing": [
      "error", {
        after: true,
        before: false
      }
    ],
    "template-tag-spacing": ["error", "always"],
    "unicode-bom": ["error", "never"],
    "wrap-regex": ["error"],
    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": ["error"],
    "no-confusing-arrow": ["error"],
    "no-duplicate-imports": ["error"],
    "no-useless-computed-key": ["error"],
    "no-useless-constructor": ["error"],
    "no-useless-rename": ["error"],
    "no-var": ["error"],
    "object-shorthand": ["error"],
    "prefer-arrow-callback": ["error"],
    "prefer-const": ["error"],
    "prefer-destructuring": ["error"],
    "prefer-numeric-literals": ["error"],
    "prefer-spread": ["error"],
    "prefer-template": ["error"],
    "rest-spread-spacing": ["error", "never"],
    "symbol-description": ["error"],
    "template-curly-spacing": ["error"],
    "yield-star-spacing": ["error", "before"]
  }
}

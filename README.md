# @heyma/eslint-config

# About

The package comes with severals eslint-config each for a different type of use.

* **`@heyma`** or **`@heyma/eslint-config`** it's designed for general purpose use
* **`@heyma/eslint-config/mocha`** it's designed for mocha tests

# Installation

``` sh
$ npm install --save-dev eslint @heyma/eslint-config
```

# Usage

Once the `@heyma/eslint-config` package is installed, you can use it by specifying `@heyma` (or any other eslint configuration above described) in the [extends](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

``` js
{
    "extends": "@heyma",
    "rules": {
        // Additional, per-project rules...
    }
}
```

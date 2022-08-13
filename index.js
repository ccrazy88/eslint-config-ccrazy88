// eslint-disable-next-line import/no-unused-modules
module.exports = {
  extends: ["prettier"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
  },
  plugins: ["import", "prettier"],
  rules: {
    // Possible errors
    "for-direction": "error",
    "getter-return": ["error", { allowImplicit: true }],
    "no-async-promise-executor": "error",
    "no-await-in-loop": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",
    "no-console": "error",
    "no-constant-condition": "error",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-dupe-args": "error",
    "no-dupe-else-if": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty": "error",
    "no-empty-character-class": "error",
    "no-ex-assign": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-parens": "off",
    "no-extra-semi": "off",
    "no-func-assign": "error",
    "no-import-assign": "error",
    "no-inner-declarations": "error",
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-loss-of-precision": "error",
    "no-misleading-character-class": "error",
    "no-obj-calls": "error",
    "no-promise-executor-return": "error",
    "no-prototype-builtins": "error",
    "no-regex-spaces": "error",
    "no-setter-return": "error",
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "error",
    "no-unexpected-multiline": "off",
    "no-unreachable": "error",
    "no-unreachable-loop": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-unsafe-optional-chaining": "error",
    "no-unused-private-class-members": "error",
    "no-useless-backreference": "error",
    "require-atomic-updates": "error",
    "use-isnan": "error",
    "valid-typeof": "error",

    // Best practices
    "accessor-pairs": "off",
    "array-callback-return": "error",
    "block-scoped-var": "error",
    "class-methods-use-this": "error",
    complexity: "off",
    "consistent-return": "error",
    curly: "error",
    "default-case": "error",
    "default-case-last": "error",
    "default-param-last": "error",
    "dot-location": "off",
    "dot-notation": "error",
    eqeqeq: ["error", "always", { null: "ignore" }],
    "grouped-accessor-pairs": "off",
    "guard-for-in": "error",
    "max-classes-per-file": "off",
    "no-alert": "warn",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-constructor-return": "error",
    "no-div-regex": "off",
    "no-else-return": "error",
    "no-empty-function": "error",
    "no-empty-pattern": "error",
    "no-eq-null": "off",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-fallthrough": "error",
    "no-floating-decimal": "off",
    "no-global-assign": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "off",
    "no-implied-eval": "error",
    "no-invalid-this": "off",
    "no-iterator": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-magic-numbers": "off",
    "no-multi-spaces": "off",
    "no-multi-str": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-nonoctal-decimal-escape": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: [
          "ctx", // Koa routing
        ],
      },
    ],
    "no-proto": "error",
    "no-redeclare": "error",
    "no-restricted-properties": "off",
    "no-return-assign": ["error", "always"],
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "off",
    "no-unused-expressions": ["error", { allowTaggedTemplates: true }],
    "no-unused-labels": "error",
    "no-useless-call": "error",
    "no-useless-catch": "error",
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    "no-useless-return": "error",
    "no-void": "error",
    "no-warning-comments": "off",
    "no-with": "error",
    "prefer-named-capture-group": "error",
    "prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],
    "prefer-regex-literals": "error",
    radix: "error",
    "require-await": "off",
    "require-unicode-regexp": "off",
    "vars-on-top": "error",
    "wrap-iife": "off",
    yoda: "error",

    // Strict mode
    strict: "error",

    // Variables
    "init-declarations": "off",
    "no-delete-var": "error",
    "no-label-var": "error",
    "no-restricted-globals": "off",
    "no-shadow": "error",
    "no-shadow-restricted-names": "error",
    "no-undef": "error",
    "no-undef-init": "error",
    "no-undefined": "error",
    "no-unused-vars": ["error", { ignoreRestSiblings: true }],
    "no-use-before-define": "error",

    // Node.js and CommonJS
    "callback-return": "off",
    "global-require": "error",
    "handle-callback-err": "off",
    "no-buffer-constructor": "error",
    "no-mixed-requires": "off",
    "no-new-require": "error",
    "no-path-concat": "error",
    "no-process-env": "off",
    "no-process-exit": "off",
    "no-restricted-modules": "off",
    "no-sync": "off",

    // Stylistic issues
    "array-bracket-newline": "off",
    "array-bracket-spacing": "off",
    "block-spacing": "off",
    "brace-style": "off",
    camelcase: "off",
    "capitalized-comments": [
      "error",
      "always",
      { ignoreConsecutiveComments: true },
    ],
    "comma-dangle": "off",
    "comma-spacing": "off",
    "comma-style": "off",
    "computed-property-spacing": "off",
    "consistent-this": "off",
    "eol-last": "off",
    "func-call-spacing": "off",
    "func-name-matching": "off",
    "func-names": "warn",
    "func-style": "error",
    "function-paren-newline": "off",
    "id-denylist": "off",
    "id-length": "off",
    "id-match": "off",
    "implicit-arrow-linebreak": "off",
    indent: "off",
    "jsx-quotes": "off",
    "key-spacing": "off",
    "keyword-spacing": "off",
    "line-comment-position": "off",
    "linebreak-style": "off",
    "lines-around-comment": "off",
    "lines-between-class-members": "error",
    "max-depth": "off",
    "max-len": "off",
    "max-lines": "off",
    "max-lines-per-function": "off",
    "max-nested-callbacks": "off",
    "max-params": "off",
    "max-statements": "off",
    "max-statements-per-line": "off",
    "multiline-comment-style": "off",
    "multiline-ternary": "off",
    "new-cap": "error",
    "new-parens": "off",
    "newline-per-chained-call": "off",
    "no-array-constructor": "error",
    "no-bitwise": "error",
    "no-continue": "error",
    "no-inline-comments": "off",
    "no-lonely-if": "error",
    "no-mixed-operators": "off",
    "no-mixed-spaces-and-tabs": "off",
    "no-multi-assign": "error",
    "no-multiple-empty-lines": "off",
    "no-negated-condition": "off",
    "no-nested-ternary": "error",
    "no-new-object": "error",
    "no-plusplus": "error",
    "no-restricted-syntax": "off",
    "no-tabs": "off",
    "no-ternary": "off",
    "no-trailing-spaces": "off",
    "no-underscore-dangle": "error",
    "no-unneeded-ternary": ["error", { defaultAssignment: false }],
    "no-whitespace-before-property": "off",
    "nonblock-statement-body-position": "off",
    "object-curly-newline": "off",
    "object-curly-spacing": "off",
    "object-property-newline": "off",
    "one-var": ["error", "never"],
    "one-var-declaration-per-line": "off",
    "operator-assignment": "error",
    "operator-linebreak": "off",
    "padded-blocks": "off",
    "padding-line-between-statements": "off",
    "prefer-exponentiation-operator": "error",
    "prefer-object-spread": "error",
    "quote-props": "off",
    quotes: "off",
    "require-jsdoc": "off",
    semi: "off",
    "semi-spacing": "off",
    "semi-style": "off",
    "sort-keys": "off",
    "sort-vars": "off",
    "space-before-blocks": "off",
    "space-before-function-paren": "off",
    "space-in-parens": "off",
    "space-infix-ops": "off",
    "space-unary-ops": "off",
    "spaced-comment": "error",
    "switch-colon-spacing": "off",
    "template-tag-spacing": "off",
    "unicode-bom": "off",
    "wrap-regex": "off",

    // ECMAScript 6
    "arrow-body-style": "off",
    "arrow-parens": "off",
    "arrow-spacing": "off",
    "constructor-super": "error",
    "generator-star-spacing": "off",
    "no-class-assign": "error",
    "no-confusing-arrow": "off",
    "no-const-assign": "error",
    "no-constant-binary-expression": "error",
    "no-dupe-class-members": "error",
    "no-duplicate-imports": "off", // Use import/no-duplicates instead.
    "no-new-symbol": "error",
    "no-restricted-exports": "off",
    "no-restricted-imports": "off",
    "no-this-before-super": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-arrow-callback": "off",
    "prefer-const": "error",
    "prefer-destructuring": "error",
    "prefer-numeric-literals": "error",
    "prefer-object-has-own": "off",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "require-yield": "error",
    "rest-spread-spacing": "off",
    "sort-imports": "off", // Use import/order instead.
    "symbol-description": "error",
    "template-curly-spacing": "off",
    "yield-star-spacing": "off",

    // Import -> Static analysis
    "import/no-unresolved": ["error", { commonjs: true }],
    "import/named": "error",
    "import/default": "error",
    "import/namespace": "error",
    "import/no-restricted-paths": "off",
    "import/no-absolute-path": "error",
    "import/no-dynamic-require": "error",
    "import/no-internal-modules": "off",
    "import/no-webpack-loader-syntax": "error",
    "import/no-self-import": "error",
    "import/no-cycle": "error",
    "import/no-useless-path-segments": "error",
    "import/no-relative-parent-imports": "off",
    "import/no-relative-packages": "error",

    // Import -> Helpful warnings
    "import/export": "error",
    "import/no-named-as-default": "error",
    "import/no-named-as-default-member": "error",
    "import/no-deprecated": "off",
    "import/no-extraneous-dependencies": "error",
    "import/no-mutable-exports": "error",
    "import/no-unused-modules": [
      "error",
      { missingExports: true, unusedExports: true },
    ],

    // Import -> Module systems
    "import/unambiguous": "off",
    "import/no-commonjs": "off",
    "import/no-amd": "error",
    "import/no-nodejs-modules": "off",
    "import/no-import-module-exports": "error",

    // Import -> Style guide
    "import/first": "error",
    "import/exports-last": "off",
    "import/no-duplicates": "error",
    "import/no-namespace": "off",
    "import/extensions": "error",
    "import/order": "error",
    "import/newline-after-import": "error",
    "import/prefer-default-export": "error",
    "import/max-dependencies": "off",
    "import/no-unassigned-import": "off",
    "import/no-named-default": "error",
    "import/no-default-export": "off",
    "import/no-named-export": "off",
    "import/no-anonymous-default-export": "error",
    "import/group-exports": "off",
    "import/dynamic-import-chunkname": "off",

    // Prettier
    "prettier/prettier": "error",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};

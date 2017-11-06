module.exports = {
  extends: ["prettier"],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true,
      jsx: true
    }
  },
  plugins: ["import", "prettier"],
  rules: {
    // Possible errors
    "for-direction": "error",
    "getter-return": ["error", { allowImplicit: true }],
    "no-await-in-loop": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",
    "no-console": "error",
    "no-constant-condition": "error",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-dupe-args": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty": "error",
    "no-empty-character-class": "error",
    "no-ex-assign": "error",
    "no-extra-boolean-cast": "error",
    "no-func-assign": "error",
    "no-inner-declarations": "error",
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-obj-calls": "error",
    "no-prototype-builtins": "error",
    "no-regex-spaces": "error",
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "error",
    "no-unreachable": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "use-isnan": "error",
    "valid-jsdoc": "off",
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
    "dot-notation": "error",
    eqeqeq: ["error", "always", { null: "ignore" }],
    "guard-for-in": "error",
    "no-alert": "warn",
    "no-caller": "error",
    "no-case-declarations": "error",
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
    "no-multi-str": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-param-reassign": ["error", { props: true }],
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
    "no-useless-concat": "error",
    "no-useless-escape": "error",
    "no-useless-return": "error",
    "no-void": "error",
    "no-warning-comments": "off",
    "no-with": "error",
    "prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],
    radix: "error",
    "require-await": "off",
    "vars-on-top": "error",
    yoda: "error",

    // Strict mode
    strict: "error",

    // Variables
    "init-declarations": "off",
    "no-catch-shadow": "off",
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
    camelcase: "off",
    "capitalized-comments": [
      "error",
      "always",
      { ignoreConsecutiveComments: true }
    ],
    "consistent-this": "off",
    "func-name-matching": "off",
    "func-names": "warn",
    "func-style": "error",
    "id-blacklist": "off",
    "id-length": "off",
    "id-match": "off",
    "line-comment-position": "off",
    "linebreak-style": "error",
    "lines-between-class-members": "error",
    "max-depth": "off",
    "max-lines": "off",
    "max-nested-callbacks": "off",
    "max-params": "off",
    "max-statements": "off",
    "max-statements-per-line": "off",
    "multiline-comment-style": "off",
    "new-cap": "error",
    "no-array-constructor": "error",
    "no-bitwise": "error",
    "no-continue": "error",
    "no-inline-comments": "off",
    "no-lonely-if": "error",
    "no-multi-assign": "error",
    "no-negated-condition": "off",
    "no-nested-ternary": "error",
    "no-new-object": "error",
    "no-plusplus": "error",
    "no-restricted-syntax": "off",
    "no-ternary": "off",
    "no-underscore-dangle": "error",
    "no-unneeded-ternary": ["error", { defaultAssignment: false }],
    "one-var": ["error", "never"],
    "operator-assignment": "error",
    "padding-line-between-statements": "off",
    "require-jsdoc": "off",
    "sort-keys": "off",
    "sort-vars": "off",
    "spaced-comment": "error",

    // ECMAScript 6
    "arrow-body-style": [
      "error",
      "as-needed",
      { requireReturnForObjectLiteral: true }
    ],
    "constructor-super": "error",
    "no-class-assign": "error",
    "no-const-assign": "error",
    "no-dupe-class-members": "error",
    "no-duplicate-imports": "off", // Use import/no-duplicates instead.
    "no-new-symbol": "error",
    "no-restricted-imports": "off",
    "no-this-before-super": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-destructuring": "error",
    "prefer-numeric-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "require-yield": "error",
    "sort-imports": "off", // Use import/order instead.
    "symbol-description": "error",

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

    // Import -> Helpful warnings
    "import/export": "error",
    "import/no-named-as-default": "error",
    "import/no-named-as-default-member": "error",
    "import/no-deprecated": "off",
    "import/no-extraneous-dependencies": "error",
    "import/no-mutable-exports": "error",

    // Import -> Module systems
    "import/unambiguous": "off",
    "import/no-commonjs": "off",
    "import/no-amd": "error",
    "import/no-nodejs-modules": "off",

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
    "import/no-anonymous-default-export": "error",

    // Prettier
    "prettier/prettier": "error"
  }
};

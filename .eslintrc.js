module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true
    }
  },
  plugins: [
    'vue'
  ],
  rules: {
    'no-undef': 0,
    'no-constant-condition': [2, {checkLoops: false}],
    'no-empty': [2, {allowEmptyCatch: true}],
    'no-prototype-builtins': 2,
    'default-case': 2,
    'dot-notation': 2,
    eqeqeq: [2, 'smart'],
    'no-else-return': [2, {allowElseIf: false}],
    'no-extra-bind': 2,
    'no-unused-vars': [1, {args: 'none'}],
    'array-bracket-spacing': 2,
    'block-spacing': [2, 'never'],
    'brace-style': [2, '1tbs', {allowSingleLine: true}],
    'comma-dangle': [2, 'only-multiline'],
    'comma-spacing': 2,
    'comma-style': 2,
    'implicit-arrow-linebreak': 0,
    'key-spacing': 2,
    'keyword-spacing': 2,
    'no-lonely-if': 2,
    'object-curly-spacing': [2, 'never'],
    'operator-assignment': 2,
    'quote-props': [2, 'as-needed'],
    quotes: [2, 'single', {avoidEscape: true, allowTemplateLiterals: true}],
    semi: [2, 'always'],
    'semi-spacing': 2,
    'semi-style': 2,
    'space-before-blocks': 2,
    'space-before-function-paren': [2, {named: 'never'}],
    'space-infix-ops': 2,
    'space-unary-ops': 2,
    'spaced-comment': 2,
    'switch-colon-spacing': 2,
    'arrow-body-style': 0,
    'arrow-parens': 2,
    'arrow-spacing': 2,
    'no-var': 2,
    'object-shorthand': 1,
    'prefer-arrow-callback': 2,
    'no-inner-declarations': 0,
    indent: [2, 2, {SwitchCase: 1, ignoreComments: true, flatTernaryExpressions: true}],
    'vue/multi-word-component-names': 0,
  }
};

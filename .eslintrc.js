module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'unused-imports',
    'typescript-sort-keys',
    'prettier',
    'import'
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'unused-imports/no-unused-imports': 'error',
    'typescript-sort-keys/string-enum': ['error', 'asc'],
    'typescript-sort-keys/interface': ['error', 'asc'],
    'prettier/prettier': ['error', {
      'parser': 'typescript',
      'endOfLine': 'auto'
    }],
    'import/first':'error',
    'import/newline-after-import': 'error',
    'import/no-empty-named-blocks': 'error',
    'import/no-duplicates': 'error',
    'import/no-deprecated': 'warn',
    'import/no-extraneous-dependencies': 'off',
    'import/no-useless-path-segments': ['error', {
      'noUselessIndex': true
    }],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'alphabetize': {
          'order': 'asc'
        }
      }
    ]
  },
};

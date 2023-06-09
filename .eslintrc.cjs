module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/strict',
  ],
  ignorePatterns: ['bin'],
  overrides: [{
    files: ['**/*.test.ts, *.ts'],
    plugins: ['jest'],
    extends: ['plugin:jest/recommended'],
    rules: {
      'jest/expect-expect': ['error'],
      'jest/no-disabled-tests': ['error'],
    }
  }],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'sourceType': 'module', 'project': './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'indent': ['error', 2],
    'quotes': ['warn', 'single'],
    'semi': ['warn', 'never'],
    'space-unary-ops': ['error'],
    'consistent-return': ['error'],
    'no-else-return': ['warn'],
    'no-console': ['error'],
  },
  root: true,
}

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended', // Add React plugin
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Enable JSX parsing
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react-refresh', 'react'], // Add React plugin here
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react-hooks/rules-of-hooks': 'error', // Ensure hooks are used correctly
    'react-hooks/exhaustive-deps': 'warn', // Warn if missing dependencies in hooks
    'react/react-in-jsx-scope': 'off', // Turn off this rule since React 17+ doesn't require importing React in every file
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the version of React
    },
  },
};

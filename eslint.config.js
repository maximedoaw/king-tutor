export default [
   {
      root: true,
      parser: '@typescript-eslint/parser',
      parserOptions: {
         project: './tsconfig.json',
         ecmaVersion: 'latest',
         ecmaFeatures: {
            jsx: true,
         },
         sourceType: 'module',
      },
      extends: [
         'plugin:prettier/recommended',
         'prettier',
         'eslint:recommended',
         'plugin:react/recommended',
         'plugin:@typescript-eslint/recommended',
      ],
      overrides: [],
      plugins: ['@typescript-eslint', 'unused-imports'],
      rules: {
         'import/no-unresolved': [
            2,
            {
               caseSensitive: false,
            },
         ],
         'react/react-in-jsx-scope': 'off',
         camelcase: 'error',
         'spaced-comment': 'error',
         quotes: ['error', 'single'],
         'no-duplicate-imports': 'error',
         '@typescript-eslint/no-unused-imports': 'off',
         'unused-imports/no-unused-imports': 'off',
         'no-console': 'off',
         'react/prop-types': [
            2,
            {
               ignore: ['className'],
            },
         ],
         'import/no-extraneous-dependencies': [
            'error',
            {
               devDependencies: [
                  '**/vite.config.js',
                  '**/*.test.js',
                  '**/*.spec.js',
                  '**/*.config.js',
               ],
            },
         ],
      },
      settings: {
         react: {
            version: 'detect',
         },
         'import/resolver': {
            node: {
               extensions: ['.js', '.jsx', '.ts', '.tsx'],
               moduleDirectory: ['node_modules/', 'src/'],
            },
         },
      },
      env: {
         node: true,
         browser: true,
         amd: true,
      },
      ignores: [
         'node_modules/*',
         '__generated__',
         'build/*',
         '**/App.test.tsx',
         '**/tailwind.config.js',
         '**/setupTests.ts',
         '**/commitlint.config.js',
         '.vscode/*',
         'package-lock.json',
         'package.json',
         'public/index.html',
         'README.md',
         'tsconfig.json',
         '**/react-app-env.d.ts',
      ],
      files: ['**/*.ts', '**/*.tsx', '**/*.js'],
   },
];

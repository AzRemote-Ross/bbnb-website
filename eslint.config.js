import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';
import astro from 'eslint-plugin-astro';
import importPlugin from 'eslint-plugin-import';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  // Base configuration for all files
  {
    ignores: ["dist/**", "node_modules/**", ".astro/**", "playwright-report/**"]
  },
  
  // Base configuration with recommended rules
  js.configs.recommended,
  
  // JavaScript/TypeScript files
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true }
      },
      globals: {
        ...globalThis.console && { console: 'readonly' },
        ...typeof window !== 'undefined' && { 
          window: 'readonly',
          document: 'readonly',
          localStorage: 'readonly',
          MutationObserver: 'readonly',
          URL: 'readonly',
          Response: 'readonly'
        },
        ...typeof process !== 'undefined' && { process: 'readonly' }
      }
    },
    settings: {
      react: { version: 'detect' }
    },
    plugins: {
      '@typescript-eslint': typescript,
      'react': react,
      'react-hooks': reactHooks,
      'import': importPlugin
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      
      // Custom rules
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-object-type': 'warn',
      '@typescript-eslint/triple-slash-reference': 'off',
      'no-undef': 'off', // TypeScript handles this
      'import/order': [
        'warn',
        {
          'newlines-between': 'always',
          'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'alphabetize': { order: 'asc', caseInsensitive: true }
        }
      ]
    }
  },
  
  // Browser environment files
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      globals: {
        window: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
        MutationObserver: 'readonly',
        URL: 'readonly',
        Response: 'readonly'
      }
    }
  },
  
  // Node environment files
  {
    files: ['**/*.config.{js,mjs,cjs,ts}', 'tests/**/*.ts'],
    languageOptions: {
      globals: {
        process: 'readonly',
        console: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        document: 'readonly' // for test files
      }
    }
  },
  
  // Astro files configuration
  ...astro.configs.recommended,
  {
    files: ['**/*.astro'],
    plugins: {
      '@typescript-eslint': typescript,
    },
    rules: {
      'react/no-unknown-property': 'off',
      'react/jsx-key': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-unused-vars': 'off', // Use TypeScript version instead
      'no-empty': 'warn'
    }
  },
  
  // Prettier config (should be last)
  prettier
];
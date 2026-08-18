// eslint.config.js
// Configuração flat config do ESLint 10 + integração com Prettier.
// Regra-chave: "comma-dangle: never" — remove a vírgula final de listas
// e objetos (reforçada pelo Prettier com trailingComma: "none").

import js from '@eslint/js';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
  // Regras recomendadas do ESLint (JS puro)
  js.configs.recommended,

  // Desliga regras do ESLint que conflitam com o Prettier
  // (vem ANTES do bloco abaixo para que a regra comma-dangle,
  // redefinida depois, tenha prioridade e fique ativa)
  eslintConfigPrettier,

  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node
      }
    },
    plugins: {
      prettier: eslintPluginPrettier
    },
    rules: {
      // Executa o Prettier como regra do ESLint (usa o .prettierrc.json)
      'prettier/prettier': 'error',
      // Remove a vírgula final de listas/objetos
      'comma-dangle': ['error', 'never']
    }
  }
];

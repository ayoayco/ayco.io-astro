import globals from 'globals'
import eslintPluginAstro from 'eslint-plugin-astro'
import jsPlugin from '@eslint/js'
import astroSwGlobals from '@ayco/astro-sw/globals'

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...astroSwGlobals,
      },
    },
  },
  // add more generic rule sets here, such as:
  jsPlugin.configs.recommended,
  ...eslintPluginAstro.configs['recommended'],
  ...eslintPluginAstro.configs['jsx-a11y-recommended'],
  {
    ignores: [
      'dist/*',
      '.output/*',
      '.astro/*',
      'node_modules*',
      'site/*',
      'templates/*',
    ],
  },
]

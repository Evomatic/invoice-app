import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
)
  .override('nuxt/vue/rules', {
    rules: {
      'vue/require-default-prop': 'off'
    }
  })
  .override('nuxt/typescript/rules', {
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn'
    }
  })

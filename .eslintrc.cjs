module.exports = {
  root: true,
  extends: ['@nuxt/eslint-config'],
  rules: {
    // override/add rules settings here, such as:
    'vue/multi-word-component-names': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-v-html': 0,
  },
}

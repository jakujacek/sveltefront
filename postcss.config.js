const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.svelte', './src/**/*.html'],
  whitelistPatterns: [/svelte-/],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...(!process.env.ROLLUP_WATCH ? [purgecss] : [])
  ]
}
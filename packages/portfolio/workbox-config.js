module.exports = {
  globDirectory: 'build/',
  globPatterns: ['**/*.{json,ico,png,jpg,html,txt,css,js}'],
  swDest: 'build/sw.js',
  // ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
  swSrc: 'src/sw-template.js',
}

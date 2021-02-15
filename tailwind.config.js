module.exports = {
  theme: {
    minHeight : {
      '500': '500px'
    },
    extend: {
      spacing: {
        '26': '6.7rem',
        '30': '8.9rem',
        '80': '20rem',
        '108': '27rem'
      }
    },
    container: {
      padding: '1rem'
    },  
    fontFamily: {
      'heading': ['Nunito Sans', 'Arial', 'sans-serif'],
      'body': ['Nunito Sans', 'Open Sans', 'sans-serif']
    }
  },
  variants: {},
  plugins: [],
  purge: {
    layers: ['utilities'],
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'layouts/**/*.html',
      'layouts/**/*.js',
      'layouts/**/*.vue',
      'components/**/*.html',
      'components/**/*.js',
      'components/**/*.vue',
      'modules/**/*.html',
      'modules/**/*.js',
      'modules/**/*.vue',
      'pages/**/*.vue',
      'pages/**/*.html',
      'pages/**/*.js',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  }
}
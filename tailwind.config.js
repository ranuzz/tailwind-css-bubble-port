module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    radialGradientShapes: { // defaults to this value
      'default': 'ellipse',
      'circle': 'circle',
    },
    radialGradientSizes: { // defaults to this value
      'default': 'closest-side',
      'none': '',
    },
    radialGradientPositions: { // defaults to these values
      'default': 'center',
      't': 'top',
      'tr': 'top right',
      'r': 'right',
      'br': 'bottom right',
      'b': 'bottom',
      'bl': 'bottom left',
      'l': 'left',
      'tl': 'top left',
      'custom-one': '50% 0px',
      'custom-two': '50% 55%',
      'custom-three': '50% 80%',
      'custom-four': '130% 130%',
    },
    radialGradientColors: { // defaults to {}
      'red': '#f00',
      'black-white-with-stops': ['#000', '#000 45%', '#fff 55%', '#fff'],
      'blue-shades-with-stops': [
        '#81e8f6', '#76deef 10%', '#055194 80%', '#062745 100%',
      ],
      'white-with-stops': ['#ffffff', 'rgba(255, 255, 255, 0) 58%'],
      'bubble-with-stops': [
        'rgba(240, 245, 255, 0.9)',
        'rgba(240, 245, 255, 0.9) 40%',
        'rgba(225, 238, 255, 0.8) 60%',
        'rgba(43, 130, 255, 0.4)',
      ],
      'bubble-after-with-stops': [
        'rgba(255, 255, 255, 0)',
        'rgba(255, 255, 255, 0) 74%',
        'white 80%, white 84%',
        'rgba(255, 255, 255, 0) 100%',
      ],
      'bubble-before-with-stops': [
        'rgba(255, 255, 255, 0) 0',
        'rgba(255, 255, 255, 0) 46%',
        'rgba(255, 255, 255, 0.8) 50%',
        'rgba(255, 255, 255, 0.8) 58%',
        'rgba(255, 255, 255, 0) 60%',
        'rgba(255, 255, 255, 0) 100%',
      ],
    },
    extend: {
      animation: {
        'bubble-anim': 'bubble-keyframes 2s ease-out infinite',
      },
      keyframes: {
        'bubble-keyframes': {
          '0%': {transform: 'scale(1)'},
          '20%': {transform: 'scaleY(0.95) scaleX(1.05)'},
          '48%': {transform: 'scaleY(1.1) scaleX(0.9)'},
          '68%': {transform: 'scaleY(0.98) scaleX(1.02)'},
          '80%': {transform: 'scaleY(1.02) scaleX(0.98)'},
          '97%, 100%': {transform: 'scale(1)'},
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-gradients'),
  ],
};


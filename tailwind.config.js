const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    colors: {
      light: {
        neutral: {
          25: '#FFFFFF',
          50: '#F0F0F3',
          100: '#C3C9CD',
          200: '#E3E6E8',
          600: '#A3ADB2',
          700: '#677278',
          800: '#292E30',
          900: '#231F20',
        },
        link: {
          500: '#1990FF',
        },
        success: {
          400: '#4C9F87',
          500: '#00754A',
        },
        pending: {
          400: '#E0A84D',
          500: '#EAC338',
        },
        error: {
          400: '#EA7B62',
          500: '#FF5961',
        },
      },
      ...colors,
    },
    fontSize: {
      'heading-1': ['3rem', { letterSpacing: '0.01em', lineHeight: '4rem' }],
      'heading-2': [
        '2.5rem',
        { letterSpacing: '0.01em', lineHeight: '3.5rem' },
      ],
      'heading-3': ['2rem', { letterSpacing: '0.01em', lineHeight: '2.5rem' }],
      'title-1': ['1.5rem', { letterSpacing: '0.01em', lineHeight: '2rem' }],
      'title-2': [
        '1.25rem',
        { letterSpacing: '0.01em', lineHeight: '1.75rem' },
      ],
      'title-3': ['1rem', { letterSpacing: '0.01em', lineHeight: '1.5rem' }],
      'title-4': [
        '0.875rem',
        { letterSpacing: '0.01em', lineHeight: '1.25rem' },
      ],
      'body-1': ['1rem', { letterSpacing: '0.01em', lineHeight: '1.5rem' }],
      'body-2': [
        '0.875rem',
        { letterSpacing: '0.01em', lineHeight: '1.25rem' },
      ],
      'body-3': ['0.75rem', { letterSpacing: '0.01em', lineHeight: '1rem' }],
      'caption-1': ['1rem', { letterSpacing: '0.01em', lineHeight: '1.5rem' }],
      'caption-2': [
        '0.875rem',
        { letterSpacing: '0.01em', lineHeight: '1.25rem' },
      ],
      'caption-3': ['0.75rem', { letterSpacing: '0.01em', lineHeight: '1rem' }],
      'menu-1': ['1rem', { letterSpacing: '0.01em', lineHeight: '1.5rem' }],
      'menu-2': [
        '0.875rem',
        { letterSpacing: '0.01em', lineHeight: '1.25rem' },
      ],
    },
    extend: {
      boxShadow: {
        'custom-md':
          '-10px -10px 30px #FFFFFF, 10px 10px 30px rgba(174, 174, 192, 0.5)',
        'custom-sm':
          '-5px -5px 20px #FFFFFF, 5px 5px 20px rgba(174, 174, 192, 0.5)',
        'inner-sm':
          'inset 5px 5px 4px rgba(174, 174, 192, 0.2), inset -5px -5px 4px rgba(255, 255, 255, 0.3)',
        'custom-button':
          '-5px -5px 5px rgba(255, 255, 255, 0.5), 5px 5px 10px rgba(174, 174, 192, 0.2), inset -2px -2px 4px rgba(0, 0, 0, 0.1), inset 2px 2px 4px #FFFFFF',
        ...defaultTheme.boxShadow,
      },
      dropShadow: {
        sm: [
          '-5px -5px 20px #FFFFFF',
          ' 5px 5px 20px rgba(174, 174, 192, 0.5)',
        ],
        md: [
          '-10px -10px 30px #FFFFFF',
          '10px 10px 30px rgba(174, 174, 192, 0.4)',
        ],
        ...defaultTheme.dropShadow,
      },
    },
    screens: {
      xs: '450px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}

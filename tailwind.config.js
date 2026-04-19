module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#F5F1E8',
        secondary: '#5f5b54',
        tertiary: '#EAE4D3',
        accent: '#0d8a6e',
        'accent-alt': '#3B82F6',
        ink: '#1a1a2e',
        'black-100': '#E0D9C2',
        'black-200': '#D4CCB5',
        'white-100': '#1a1a2e',
      },
      boxShadow: {
        card: '0 20px 60px -20px rgba(26, 26, 46, 0.18)',
      },
      screens: {
        xs: '450px',
      },
    },
  },
  plugins: [],
};

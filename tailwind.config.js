module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}', // Include paths to your content
      './components/**/*.{js,ts,jsx,tsx}', 
    ],
    theme: {
      extend: {
        colors: {
          primary: '#3490dc',
          secondary: '#ffed4a',
          "brand-gray": '#888888',
          "brand-red": "#f0281e",
          "brand-green": "#094632"
          
        },
        fontFamily: {
          sans: ['Work Sans', 'Arial', 'sans-serif'],
        },
        screens: {
          'lg2': '1000px',
        },
      },
    },
    plugins: [],
  }
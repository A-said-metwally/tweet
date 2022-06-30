module.exports = {
  mode:"jit",
    content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
    "./src/**/*.{html,ts}",
    "./pages/**/*.{html,js,ts,jsx}",
    "./components/**/*.{html,js,ts,jsx}",
    './*.{html,js,ts,jsx}'    
  ],
  theme: {
    extend: {
      colors:{
        twitter:'#00ADED'
      }
    },
  },
    variants:{
      extend:{},
    },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      grey: {
         50: '#f6f7f9',
         100: '#edeef1',
         200: '#d6dae1',
         300: '#b3bbc6',
         400: '#8997a7',
         500: '#6b7a8c',
         DEFAULT: '#535f70',
         700: '#464f5e',
         800: '#3c4450',
         900: '#363c44',
         950: '#24272d',
      },
      primary: {
         100: '#e7d8f7',
         200: '#cfb1ee',
         300: '#b88ae6',
         400: '#a062dd',
         500: '#883bd5',
         DEFAULT: '#7014cc',
         600: '#631db0',
         700: '#552594',
         800: '#482e77',
         900: '#3a365b',
      },
      // secondary: {
      //    50: '#f1f6fd',
      //    100: '#d6e4f7',
      //    DEFAULT: '#c8dcf5',
      //    300: '#a2c6ee',
      //    400: '#76a7e4',
      //    500: '#5687db',
      //    600: '#426dce',
      //    700: '#385abd',
      //    800: '#334b9a',
      //    900: '#2e417a',
      //    950: '#202a4b',
      // },
      success: {
         50: '#f2fbf2',
         100: '#e0f8e0',
         200: '#c2f0c3',
         300: '#92e394',
         400: '#5ccc60',
         500: '#35b23a',
         DEFAULT: '#258c29',
         700: '#227325',
         800: '#1f5c22',
         900: '#1b4c1f',
         950: '#0a290d',
      },
      warning: {
         50: '#fffceb',
         100: '#fff7c6',
         200: '#feee89',
         300: '#fedf4b',
         400: '#fdce22',
         500: '#f7ae09',
         DEFAULT: '#e68b04',
         700: '#b65e07',
         800: '#93480d',
         900: '#793c0e',
         950: '#461e02',
      },
      error: {
         50: '#fef2f2',
         100: '#fee3e2',
         200: '#fdcdcb',
         300: '#fba9a6',
         400: '#f67873',
         500: '#ec4d47',
         DEFAULT: '#da342e',
         700: '#b6241f',
         800: '#97211d',
         900: '#7d221f',
         950: '#440d0b',
      },
   },
  },
  plugins: [],
};

export default config;
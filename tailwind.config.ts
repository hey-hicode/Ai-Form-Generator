import type { Config } from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
 

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		  colors: {
			  sass: {
				  blue: '#387FF5',
				  light: 'bg-gradient-to-b overflow-x-clip from-white to-[#D2DCFF]',
         			 brown_black: '#4B5162',
			  },
		  },

  	}
  },
  plugins: [require("tailwindcss-animate"),('addVariablesForColors')],
};
export default config;

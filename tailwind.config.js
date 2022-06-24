/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,md,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,md,mdx}"],
	theme: {
		// theme: {
		// 	backgroundColor: (theme) => ({
		// 		...theme("colors"),
		// 		primary: "#9b9ad0",
		// 		secondary: "#ffed4a",
		// 		danger: "#e3342f",
		// 	}),
		// },
		screens: {
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "940px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},
		extend: {},
	},
	plugins: [],
};

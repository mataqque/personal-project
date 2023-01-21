/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
		},
		extend: {
			borderRadius: {
				5: '5px',
			},
			colors: {
				letter: '#4a5163',
				primary: '#160f2d',
				secondary: '#434d60',
				info: '#3667fb',
				success: '#00a700',
				warning: '#ff8c00',
				danger: '#ff0000',
				bordersky: '#dee1ef',
				transparent: {
					10: 'rgba(255, 255, 255, 0.1)',
				},
				gray: {
					10: '#fafafa',
					20: '#fafafa',
					30: '#f5f5f5',
					80: '#4a5163',
					100: '#e8e8e8',
					200: '#c5c5c5',
					300: '#a2a2a2',
					400: '#838383',
					500: '#6e6e6e',
				},
				purple: {
					500: '#852dda',
				},
			},
			fontSize: {
				xsm: '0.75rem',
			},
			height: {
				input: '3rem',
			},
		},
	},
	plugins: [],
};

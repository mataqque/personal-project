/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			movil: { max: '500px' },
			sm: '500px',
			md: '900px',
			lg: '1200px',
			xl: '1400px',
		},
		extend: {
			borderRadius: {
				5: '5px',
			},
			colors: {
				primary: '#FB6F92',
				secondary: '#02394A',
				third: '#FEDCD9',
				info: '#3695fbfa',
				success: '#32d09c',
				lemon: '#39c6a4',
				warning: '#ff8c00',
				danger: '#ff6868',
				bordersky: '#dee1ef',
				sky: '#f3f4f6',
				letter: '#7e889b',
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
				'0/7xl': '.7rem',
				'0/8xl': '.8rem',
				'0/9xl': '.9rem',
				'1/1xl': '1.1rem',
				'1/2xl': '1.2rem',
				'1/3xl': '1.3rem',
				'1/4xl': '1.4rem',
				'1/5xl': '1.5rem',
			},
			height: {
				input: '3rem',
			},
		},
	},
	plugins: [],
};

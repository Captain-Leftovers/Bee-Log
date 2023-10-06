import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#0D0D0D',
				secondary: '#CE4760',
				accent: '#FFD600',
				background: '#F2F2F2',
			},
		},
	},
	plugins: [],
}
export default config

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				cream: '#fafaf9',
				accent: '#2563eb',
				'accent-hover': '#E8B7A9',
			},
			maxWidth: {
				'content': '72rem',
				'prose': '720px',
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
		},
	},
	plugins: [],
}

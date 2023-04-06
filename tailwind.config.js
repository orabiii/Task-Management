/** @type {import('tailwindcss').Config} */
export default {
	'tailwindCSS.experimental.configFile': '.config/tailwind.config.js',

	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./src/**/*.{html,js}',
		'./node_modules/tw-elements/dist/js/**/*.js'
	],
	theme: {
		extend: {}
	},
	plugins: [require('tw-elements/dist/plugin')]
};

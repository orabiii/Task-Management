/** @type {import('tailwindcss').Config} */
export default {
	'tailwindCSS.experimental.configFile': '.config/tailwind.config.js',

	content: [
		'./node_modules/flowbite/**/*.js',
		'./src/**/*.{html,js,svelte,ts}',
		'./src/**/*.{html,js}',
		'./node_modules/tw-elements/dist/js/**/*.js',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {}
	},
	plugins: [require('flowbite/plugin'), require('tw-elements/dist/plugin')]
};

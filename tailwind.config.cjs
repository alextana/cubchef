const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			transitionProperty: {
				'width': 'width'
			},
		}
	},

	plugins: []
}

module.exports = config

import preprocess from 'svelte-preprocess'
import node from '@sveltejs/adapter-node'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: node({ env: { port: 3000 } }),
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
}

export default config

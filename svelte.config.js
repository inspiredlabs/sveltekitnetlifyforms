/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-netlify';

const config = {
	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		prerender: {
			crawl: true,
			enabled: true,
			// force: true,
			entries: ['*'],
		},
		ssr: true // https://crinkle.dev/writing/journey-from-gatsby-to-sveltekit-deployment#hosting-on-netlify
	}
};

export default config;

/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-netlify';

const config = {
	kit: {
    adapter: adapter(),
		prerender: {
			crawl: true,
			force: true,
			pages: [
				'/' // - from: https://github.com/sveltejs/kit/issues/1683
			],
		}
    // files: {
    //   hooks: 'src/hooks',
    // },
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    vite: {
      define: {
        //'process.env.VITE_BUILD_TIME': JSON.stringify(new Date().toISOString()),
      },
    },
  }
};

export default config;

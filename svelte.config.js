import path from 'path';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import lang from './src/lib/translations/lang.js';

const supportedLocales = Object.keys(lang);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		prerender: {
			// NOTE: You can modify your exported error pages here.
			entries: supportedLocales.reduce((acc, locale) => [...acc, `/${locale}`, `/${locale}/401`, `/${locale}/403`, `/${locale}/404`, `/${locale}/500`], ['*']),
		},
		paths: {
			// base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
			base: ''
		},
		alias: {
			// these are the aliases and paths to them
			'@components': path.resolve('./src/lib/components'),
			'@lib': path.resolve('./src/lib'),
			'@utils': path.resolve('./src/lib/utils'),
			'@store': path.resolve('./src/store')
		},
	},
	preprocess: [vitePreprocess()]
};

export default config;

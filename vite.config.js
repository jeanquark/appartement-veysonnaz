import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
		  scss: {
			renderSync: true,
			// api: 'modern-compiler' // or "modern"
		  }
		}
	  }
});

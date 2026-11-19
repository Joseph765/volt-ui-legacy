import adapter from '@sveltejs/adapter-vercel';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			adapter: adapter()
		})
	],
	build: {
		// Set the limit to 1024 kB (1MB)
		chunkSizeWarningLimit: 1024
	}
});

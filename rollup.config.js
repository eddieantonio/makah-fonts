import svelte from 'rollup-plugin-svelte';
import sveltePreprocess from "svelte-preprocess";
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/main.js',
  output: {
    file: 'public/bundle.js',
    format: 'iife',
  },
  plugins: [
    svelte({
      preprocess: sveltePreprocess({
        postcss: {
          plugins: [
            require("tailwindcss"),
            require("autoprefixer"),
          ],
        },
      }),
    }),
    resolve({ browser: true }),
  ],
};

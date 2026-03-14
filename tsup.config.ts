import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  treeshake: true,
  splitting: true, // Enables code splitting for better tree-shaking
  minify: false, // No minification for libraries — consumers' bundlers handle this
  clean: true,
  dts: true,
  sourcemap: true,
  format: 'esm',
  outExtension() {
    return {
      js: '.js',
    };
  },
  external: ['react', 'react-dom'],
  outDir: 'lib',
  tsconfig: './tsconfig.json',
});

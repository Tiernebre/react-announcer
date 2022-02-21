import esbuild from 'rollup-plugin-esbuild'

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'es'
  },
  plugins: [
    esbuild({
      minify: true,
      target: 'esnext'
    }),
  ],
}
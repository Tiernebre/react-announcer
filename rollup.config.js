import esbuild from 'rollup-plugin-esbuild'
import dts from "rollup-plugin-dts"

const input = 'src/index.ts'

export default [
  {
    input,
    output: [{ file: "dist/react-announcer.d.ts", format: "es" }],
    plugins: [dts()],
  },
  {
    input,
    output: {
      dir: 'dist',
      format: 'es'
    },
    plugins: [
      esbuild({
        minify: true,
        target: 'esnext'
      })
    ],
  },
]
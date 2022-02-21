import esbuild from 'rollup-plugin-esbuild'
import dts from "rollup-plugin-dts"

export default [

  {
    input: 'src/index.ts',
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
  {
    input: "src/index.ts",
    output: [{ file: "dist/react-announcer.d.ts", format: "es" }],
    plugins: [dts()],
  }
]
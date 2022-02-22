import esbuild from "rollup-plugin-esbuild";
import dts from "rollup-plugin-dts";
import cleaner from "rollup-plugin-cleaner";

const input = "src/index.ts";

export default [
  {
    input,
    output: [{ file: "dist/react-announcer.d.ts", format: "es" }],
    external: ["react"],
    plugins: [
      cleaner({
        targets: ["./dist/"],
      }),
      dts(),
    ],
  },
  {
    input,
    output: [
      {
        file: "dist/index.umd.js",
        format: "umd",
      },
      {
        file: "dist/index.es.js",
        format: "es",
      },
    ],
    external: ["react"],
    plugins: [
      esbuild({
        minify: true,
        target: "esnext",
      }),
    ],
  },
];

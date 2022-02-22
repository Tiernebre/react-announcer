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
        name: "react-announcer",
        file: "dist/index.umd.js",
        format: "umd",
        globals: {
          react: "react",
        },
      },
      {
        name: "react-announcer",
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

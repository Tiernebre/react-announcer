import esbuild from "rollup-plugin-esbuild";
import dts from "rollup-plugin-dts";
import cleaner from "rollup-plugin-cleaner";
import excludeDependenciesFromBundle from "rollup-plugin-exclude-dependencies";

const input = "src/index.ts";

export default [
  {
    input,
    output: [{ file: "dist/react-announcer.d.ts", format: "es" }],
    plugins: [
      cleaner({
        targets: ["./dist/"],
      }),
      dts(),
    ],
  },
  {
    input,
    output: {
      dir: "dist",
      format: "es",
    },
    plugins: [
      excludeDependenciesFromBundle({
        peerDependencies: true,
        dependencies: true,
      }),
      esbuild({
        minify: true,
        target: "esnext",
      }),
    ],
  },
];

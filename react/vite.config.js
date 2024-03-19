import { defineConfig } from "vite";
import { compileString } from "squint-cljs";
import esbuild from "esbuild";
import react from "@vitejs/plugin-react";

export default defineConfig({
  resolve: {
    extensions: [
      ".mjs",
      ".js",
      ".mts",
      ".ts",
      ".jsx",
      ".tsx",
      ".json",
      ".cljs",
    ],
  },
  plugins: [
    {
      name: "squint_compile",
      enforce: "pre",
      transform: function (code, id) {
        if (id.endsWith(".cljs")) {
          const cs = compileString(code);
          const jsx = esbuild.transformSync(cs, {
            loader: "jsx",
            jsx: "automatic",
          });
          return {
            code: jsx.code,
            map: jsx.map,
          };
        }
      },
    },
    react(),
  ],
});

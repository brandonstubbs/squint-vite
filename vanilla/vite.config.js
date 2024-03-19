import { defineConfig } from "vite";
import { compileString } from "squint-cljs";

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
      transform: function (code, id) {
        if (id.endsWith(".cljs")) {
          const cs = compileString(code);
          return {
            code: cs,
            map: null,
          };
        }
      },
    },
  ],
});

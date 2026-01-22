// eslint-disable-next-line pluginImport/no-unresolved
import { defineConfig } from "eslint/config";
import globals from "globals";
// eslint-disable-next-line pluginImport/extensions
import index from "./index.js";

// eslint-disable-next-line pluginImport/no-unused-modules
export default defineConfig([
  {
    extends: [index],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
]);

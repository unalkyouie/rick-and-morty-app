import js from "@eslint/js";
import * as typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import * as simpleImportSort from "eslint-plugin-simple-import-sort";
import * as react from "eslint-plugin-react";
import * as reactHooks from "eslint-plugin-react-hooks";
import * as importPlugin from "eslint-plugin-import";
import prettierConfig from "eslint-config-prettier";

export default [
  js.configs.recommended,
  prettierConfig,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: typescriptParser,
      sourceType: "module",
      ecmaVersion: "latest",
    },
    plugins: {
      "@typescript-eslint": typescript,
      "simple-import-sort": simpleImportSort.default,  
      react,
      "react-hooks": reactHooks,
      import: importPlugin,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      "import/order": "off",
      "import/no-unresolved": "off",
      "import/extensions": "off",

      "react/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];

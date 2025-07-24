import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "./prettier.config.cjs"; // Import config prettier nếu cần
import js from "@eslint/js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // Rule mặc định của JS
  js.configs.recommended,

  // Rule của Next + TypeScript
  ...compat.extends("next/core-web-vitals", "next", "next/typescript"),

  // Tích hợp Prettier
  {
    name: "prettier/rules",
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": ["error", prettierConfig],
    },
  },
];
